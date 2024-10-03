import React, { useState, useEffect } from "react";
import "./sentimentChartTooltip.scss"
// @ts-ignore
// import colors from "../../assets/_colors.scss";
import {Sentiment} from "../Sentiment/Sentiment";
import {SentimentColors} from "../../../lib/components/CallSentiment/SentimentChart/SentimentChart.types.ts";
import {addClassName} from "../helpers.ts";
// import {NEGATIVE_POLARITY_LIMIT, POSITIVE_POLARITY_LIMIT} from "../../constants";

export const POSITIVE_POLARITY_LIMIT = 0.3;
export const NEGATIVE_POLARITY_LIMIT = -0.3;

const defaultColors = {
    positive: "#A9EBC5",
    negative: "#FED7D7",
    neutral: "#F4DA6F"
}
function Lerp(start: number, end: number , t: number) {
    return start * (1 - t) + end * t;
}

export const SentimentChartTooltip : React.FC<SentimentChartTooltipProps> = ({ tooltipState, isDetailedView, toolTipSentimentColors, className }) => {
    const [style, setStyle] = useState({ left: 0, top: 0 });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const colorsToUse = {
        positiveBackground: toolTipSentimentColors?.positiveBackground ? toolTipSentimentColors.positiveBackground : defaultColors.positive,
        negativeBackground: toolTipSentimentColors?.negativeBackground ? toolTipSentimentColors.negativeBackground : defaultColors.negative,
        neutralBackground: toolTipSentimentColors?.neutralBackground ? toolTipSentimentColors?.neutralBackground : defaultColors.neutral
    }
    let position = {
        left: style.left,
        bottom: 100
    };

    if (isDetailedView) {
        const leftPosition = tooltipState.isInLastTwo ? (style.left - 310) : style.left
        position = {
            left: leftPosition,
            // @ts-ignore
            top: -100,
            // bottom: 500
        }
    }

    // @ts-ignore
    const mouseMoveHandler: React.MouseEvent<HTMLButtonElement> = (event) => {
        const rect = event.target.getBoundingClientRect();
        setMousePosition({x: event.clientX - rect.left, y: 0});
    };

    useEffect(() => {
        // @ts-ignore
        document.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            // @ts-ignore
            document.removeEventListener('mousemove', mouseMoveHandler);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const x = Lerp(style.left, mousePosition.x, 0.1);
            const y = Lerp(style.top, mousePosition.y, 0.1);

            setStyle({ left: x, top: y });
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, [mousePosition, style]);

    if (!tooltipState.isVisible) return null;

    const {data, summary, timestamp} = tooltipState;

    let [hours, minutes] = timestamp.split(':').map(Number);
    if (minutes < 10) {
        // @ts-ignore
        minutes = "0" + minutes;
    }
    const timestampDisplay = hours + ":" + minutes;

    let backgroundColor;
    let sentimentString;
    if (data < NEGATIVE_POLARITY_LIMIT) {
        backgroundColor = colorsToUse.negativeBackground;
        sentimentString = "Negative";
    } else if (data > POSITIVE_POLARITY_LIMIT) {
        backgroundColor = colorsToUse.positiveBackground;
        sentimentString = "Positive";
    } else {
        backgroundColor = colorsToUse.neutralBackground;
        sentimentString = "Neutral";
    }

    return (
        <div className={`symbl-sentiment-chart-tooltip ${addClassName(className)}`} style={position}>
            <div className={"symbl-tooltip-banner"} style={{backgroundColor}}>
                <div className={"symbl-timestamp"}>
                    {timestampDisplay}
                </div>
                <div className={"symbl-sentiment-score"}>
                    <Sentiment sentiment={sentimentString} sentimentColors={toolTipSentimentColors}/>
                </div>
            </div>
            <div className={"symbl-sentiment-summary"}>
                {summary}
            </div>
        </div>
    );
}

interface SentimentChartTooltipProps {
    tooltipState: {data: number, summary: string, timestamp: string, isVisible: boolean, isInLastTwo: boolean};
    isDetailedView: boolean,
    toolTipSentimentColors: SentimentColors,
    className: string
}
// export default SentimentChartTooltip;