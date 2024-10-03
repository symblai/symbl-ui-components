import {SentimentColors} from "./SentimentChart/SentimentChart.types.ts";

export interface CallSentiment {
    endTime: string,
    polarityScore: string,
    sentiment: string,
    startTime: string,
    summary: string
}

export interface CallSentimentProps {
    overallSentiment: string,
    summary: string,
    callSentiments: CallSentiment[],
    chartColors: string[],
    chartBorderWidth: number,
    hideChartBackgroundColor: boolean,
    chartBackgroundColors: string[],
    hideSummaryTooltip: boolean,
    sentimentColors: SentimentColors,
    classes: {
        container: string,
        titleBar: string,
        chartContainer: string,
        chartTooltip: string
    },
    displayConfig?: {
        hideTitleBar?: boolean,
        hideSummary?: boolean,
        hideOverallSentiment?: boolean,
        hideSentimentChart?: boolean
    }
}