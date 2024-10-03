import {CallScoreColors, Factor, TooltipPlacementTypes} from "../../CallScore/CallScore.types.ts";
import {ReactElement} from "react";

export interface CallScoreWithAPIProps {
    accessToken: string,
    conversationId: string,
    onLoadingChange?: (isLoading: boolean) => {},
    onFetchError?: (error: string) => {},
    hideLoader?: boolean,
    customErrorMessage?: string,
    customLoader?: ReactElement,
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

export interface CallScoreData {
    criteria: Factor[],
    score: number,
    summary: string
}