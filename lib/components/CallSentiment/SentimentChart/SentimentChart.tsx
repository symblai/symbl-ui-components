// @ts-nocheck
import {useEffect, useRef, useState} from "react";
import "./sentimentChart.scss";
import "chartjs-adapter-date-fns";

import {Line} from 'react-chartjs-2';
import {SentimentChartTooltip} from "../../../../src/components/SentimentChartTooltip/SentimentChartTooltip.tsx";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    TimeScale,
    TimeSeriesScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import {SentimentChartProps} from "./SentimentChart.types.ts";
import {addClassName} from "../../../../src/components/helpers.ts";

ChartJS.register(
    CategoryScale,
    LinearScale,
    TimeScale,
    TimeSeriesScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const variables = {
    chartAreaTop: "#d378f240",
    chartAreaBottom: "#d378f200",
    chartStart: "#5A9CFF",
    chartMiddle: "#D378F2",
    chartEnd: "#E28A9C",
}

const addColorsToGradient = (gradient, chartColors) => {
    if(chartColors.length === 1) {
        gradient.addColorStop(1, chartColors[0]);
    } else {
        let offsetToAdd = parseFloat((1 / chartColors.length).toFixed(2));
        let currentOffset = 0
        chartColors.forEach((color: string, index: number) => {
            const finalOffset = index === (chartColors.length - 1) ? 1 : currentOffset;
            gradient.addColorStop(finalOffset, color)
            currentOffset = currentOffset + offsetToAdd;
        })
    }
}

const getLineGradient = (ctx, chart, chartColors) => {
    const gradient = ctx.createLinearGradient(0, 0, chart.width, 0);
    if(!chartColors || chartColors.length === 0) {
        gradient.addColorStop(0, variables.chartStart);
        gradient.addColorStop(0.5, variables.chartMiddle);
        gradient.addColorStop(1, variables.chartEnd);
    } else {
        addColorsToGradient(gradient, chartColors)
    }
    return gradient;
};

const getAreaGradient = (ctx, chart, chartColors) => {
    const gradient = ctx.createLinearGradient(0, chart.chartArea.top, 0, chart.chartArea.bottom);
    if(!chartColors || chartColors.length === 0) {
        gradient.addColorStop(0, variables.chartAreaTop);
        gradient.addColorStop(1, variables.chartAreaBottom);
    } else {
        addColorsToGradient(gradient, chartColors)
    }
    return gradient;
};

const buildChartData = (chartColors: string[], chartBorderWidth: number, hideChartBackgroundColor: boolean, chartBackgroundColors: string[], hideHoverRadius: boolean, sentiments = []) => {
    if (sentiments.length === 1) {
        const newSentiment = {...sentiments[0]};
        newSentiment.timestamp = "00:01";
        sentiments.push(newSentiment);
    }

    const firstSentiment = {...sentiments[0]}
    firstSentiment.sentiment = 0
    firstSentiment.summary = "";
    firstSentiment.timestamp = "00:00";
    sentiments.unshift(firstSentiment)

    return {
        labels: sentiments.map(s => s.timestamp),
        datasets: [
            {
                label: 'Sentiment',
                data: sentiments.map((s, index) => ({ y: s.sentiment, summary: s.summary, x: s.timestamp, isInLastTwo: index >= (sentiments.length - 2) })),
                fill: hideChartBackgroundColor ? false : "1",
                borderColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) {
                        return null;
                    }
                    return getLineGradient(ctx, chart, chartColors);
                },
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) {
                        return null;
                    }
                    return getAreaGradient(ctx, chart, chartBackgroundColors);
                },
                borderWidth: !!chartBorderWidth && chartBorderWidth > 0 ? chartBorderWidth : 2,
                tension: 0.4,
                pointRadius: 0,
                spanGaps: true,
                hoverRadius: hideHoverRadius ? 0 : 10,
                hoverBackgroundColor: 'white',
            },
            {
                label: 'Dummy1',
                data: sentiments.map(() => -1),
                borderColor: 'transparent',
                backgroundColor: 'transparent'
            },
            {
                label: 'Dummy2',
                data: sentiments.map(() => 1),
                borderColor: 'transparent',
                backgroundColor: 'transparent'
            }
        ]
    };
};

export const SentimentChart = (props: SentimentChartProps) => {
    const {callSentiments = [],
        chartColors,
        chartBorderWidth,
        hideChartBackgroundColor,
        chartBackgroundColors,
        hideSummaryTooltip, toolTipSentimentColors, classes} = props;

    const [tooltipState, setTooltipState] = useState({ data: 0, summary: "", isVisible: false, timestamp: "" });
    const [prevTooltipData, setPrevTooltipData] = useState("");
    const chartRef = useRef(null);

    useEffect(() => {
        if (tooltipState.timestamp !== prevTooltipData) {
            setPrevTooltipData(tooltipState.timestamp)
        }
    }, [tooltipState.timestamp, prevTooltipData]);


    const sentiments = callSentiments
        .filter(m => m.polarityScore !== undefined && m.polarityScore !== null)
        .map(m => {
            const [hours, minutes] = m.endTime.split(':').map(Number);
            return {
                sentiment: m.polarityScore,
                timestamp: `${String(hours).padStart(2, '0')}:${minutes < 10 ? '0' : ''}${minutes}`,
                summary: m.summary
            }
        });

    const data = buildChartData(chartColors, chartBorderWidth, hideChartBackgroundColor, chartBackgroundColors, hideSummaryTooltip, sentiments);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
            },
            tooltip: {
                enabled: false,
                external: function(context) {
                    const tooltip = context.tooltip;

                    if (tooltip.opacity === 0) {
                        !hideSummaryTooltip && setTooltipState({ isVisible: false });
                        return;
                    }

                    if (tooltip.dataPoints[0].raw.x !== prevTooltipData) {
                        !hideSummaryTooltip && setTooltipState({
                            isVisible: true,
                            x: tooltip.caretX,
                            y: tooltip.caretY,
                            data: tooltip.dataPoints[0].raw.y,
                            timestamp: tooltip.dataPoints[0].raw.x,
                            summary: tooltip.dataPoints[0].raw.summary,
                            isInLastTwo: tooltip.dataPoints[0].raw.isInLastTwo
                        })
                    }
                }
            },
        },
        interaction: {
            intersect: false,
            mode: 'index'
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    parser: 'HH:mm',
                    unit: 'minute',
                    stepSize: 5
                },
                ticks: {
                    source: 'auto',
                    callback: function (value, index, values) {
                        if (index % 5 !== 0) {
                            return null;
                        }
                        const date = new Date(value);
                        const hours = date.getHours();
                        const minutes = "0" + date.getMinutes();
                        const formattedTime = hours + ':' + minutes.substr(-2);
                        const parts = formattedTime.split(':');
                        var tickLabel = '';
                        if (parts[0] !== '0') {
                            tickLabel += parseInt(parts[0]) + 'h ';
                        }
                        if (parts[1] !== '0') {
                            tickLabel += parseInt(parts[1]) + 'm';
                        }
                        return tickLabel;
                    }
                }
            },
            y: {
                ticks: {
                    stepSize: 0.5,
                },
                border: {
                    dash: [2, 4]
                }
            }
        }
    };

    return (
            <div className={`symbl-sentiment-chart ${addClassName(classes?.container)}`}>
                <Line options={options}
                      data={data}
                      type={"line"}
                      ref={chartRef}
                />
                <SentimentChartTooltip tooltipState={tooltipState} isDetailedView={true} toolTipSentimentColors={toolTipSentimentColors} className={classes?.tooltip}/>
            </div>
    );
}

