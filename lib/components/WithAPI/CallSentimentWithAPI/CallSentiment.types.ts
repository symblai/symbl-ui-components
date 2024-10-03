import {ReactElement} from "react";
import {CallSentiment} from "../../CallSentiment/CallSentiment.types.ts";
import {SentimentColors} from "../../CallSentiment/SentimentChart/SentimentChart.types.ts";

export interface CallSentimentWithAPIProps {
    accessToken: string,
    conversationId: string,
    onLoadingChange?: (isLoading: boolean) => {},
    onFetchError?: (error: string) => {},
    hideLoader?: boolean,
    customErrorMessage?: string,
    customLoader?: ReactElement,
    chartColors?: string[],
    chartBorderWidth?: number,
    hideChartBackgroundColor?: boolean,
    chartBackgroundColors?: string[],
    hideSummaryTooltip?: boolean,
    sentimentColors?: SentimentColors,
    classes?: {
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

export interface CallSentimentData {
    chunks: CallSentiment[],
    overallSentiment: string,
    summary: string
}