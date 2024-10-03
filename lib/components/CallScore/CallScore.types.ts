export interface CallScoreFactorDetailsProps {
    title: string;
    score: number;
    feedback?: Feedback;
    classes?: {
        container?: string,
        factorTitle?: string,
        factorAnswer?: string,
    },
    colors?: CallScoreColors
}
export interface Feedback {
    positive: {
        summary: string
    },
    negative: {
        summary: string
    },
    how_could_it_be_improved?: string
}

export interface Factor {
    name: string,
    score: number,
    feedback: Feedback,
    summary: string
}

export type TooltipPlacementTypes = 'top'| 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

export type CallScoreColors = {
    positiveTextColor?: string,
    negativeTextColor?: string,
    neutralTextColor?: string,
    positiveBackgroundColor?: string,
    negativeBackgroundColor?: string,
    neutralBackgroundColor?: string
}

export interface FactorTitleAndScoreProps {
    title: string;
    actual: number;
    total: number;
    showGreyBackground?: boolean;
    summary?: string;
    showCallSummary?: boolean;
    index?: number;
    activeFactorIndex?: number;
    onFactorClick?: (number?: number) => void,
    summaryTooltipPlacement?: TooltipPlacementTypes,
    classes?: {
        factor?: string,
        tooltip?: string,
    },
    colors?: CallScoreColors,
    factorsLength?: number
}

export interface FactorWithScoreProps {
    title: string;
    actual: number;
    total: number,
    showCallSummary?: boolean,
    colors?: CallScoreColors
}

export interface CallScoreSummaryProps {
    callScore: number;
    factors: Factor[];
    showCallSummaryInTooltip: boolean;
    summaryTooltipPlacement?: TooltipPlacementTypes,
    classes?: {
        container?: string,
        totalCallScore?: string,
        factor?: string,
        tooltip?: string,
    },
    colors?: CallScoreColors
}

export const defaultColors = {positiveTextColor: undefined, negativeTextColor: undefined, neutralTextColor: undefined, positiveBackgroundColor: undefined, negativeBackgroundColor: undefined, neutralBackgroundColor: undefined};

export interface CallScoreProps {
    callScore: number;
    summary: string,
    factors: Factor[];
    summaryTooltipPlacement?: TooltipPlacementTypes,
    classes?: {
        container?: string,
        title?: string,
        factorsSummaryContainer?: string,
        factorSummaryTotalScore?: string,
        factorSummaryFactor?: string,
        factorSummaryTooltip?: string,
        factorDetailsContainer?: string,
        factorDetailsTitle?: string,
        factorDetailsAnswer?: string,
    },
    colors?: CallScoreColors,
    displayConfig?: {
        hideSummary?: boolean,
        hideFactorsSummary?: boolean,
        hideFactorDetails?: boolean,
        hideCallSummaryInTooltip?: boolean
    }
}