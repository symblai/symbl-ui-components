import {CallSentiment} from "../CallSentiment.types.ts";

export interface SentimentColors {
    positiveText: string,
    negativeText: string,
    neutralText: string,
    positiveBackground: string,
    negativeBackground: string,
    neutralBackground: string,
}

export interface SentimentChartProps {
    callSentiments: CallSentiment[],
    chartColors: string[],
    chartBorderWidth: number,
    hideChartBackgroundColor: boolean,
    chartBackgroundColors: string[],
    hideSummaryTooltip: boolean,
    toolTipSentimentColors: SentimentColors,
    classes: {
        container: string,
        tooltip: string
    }
}
