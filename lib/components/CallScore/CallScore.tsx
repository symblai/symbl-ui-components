import React from "react";
import {CallScoreProps} from "./CallScore.types.ts";
import {addClassName, getConfigValue} from "../../../src/components/helpers.ts";
import {CallScoreFactorsSummary} from "./CallScoreFactorsSummary";
import {CallScoreFactorDetail} from "./CallScoreFactorDetail";
import "./callScore.scss";
import {ThemeProvider} from "@mui/material";
import theme from "../Theme.ts";

export const CallScore: React.FC<CallScoreProps> = (props: CallScoreProps) => {

    const {callScore,
        summary,
        factors,
        summaryTooltipPlacement,
        classes,
    colors,
        displayConfig} = props;

    const showSummary = getConfigValue( 'hideSummary',displayConfig, true),
        showFactorsSummary = getConfigValue( 'hideFactorsSummary',displayConfig, true),
        showFactorDetails = getConfigValue( 'hideFactorDetails',displayConfig, true),
        showCallSummaryInTooltip = getConfigValue( 'hideCallSummaryInTooltip',displayConfig, true);


    return <ThemeProvider theme={theme}>
    <div className={`symbl-call-score-container ${addClassName(classes?.container)}`}>
            <p className={`symbl-section-title ${addClassName(classes?.title)}`}>Call Score</p>
            {
                showSummary && <p className={"symbl-call-score-summary"}>{summary}</p>
            }
            {
                showFactorsSummary && <CallScoreFactorsSummary callScore={callScore}
                                                               factors={factors}
                                                               showCallSummaryInTooltip={showCallSummaryInTooltip}
                                                               classes={{
                                                                   container: classes?.factorsSummaryContainer,
                                                                   totalCallScore: classes?.factorSummaryTotalScore,
                                                                   factor: classes?.factorSummaryFactor,
                                                                   tooltip: classes?.factorSummaryTooltip
                                                               }}
                                                               summaryTooltipPlacement={summaryTooltipPlacement}
                                                               colors={colors}
                />
            }
            {
                showFactorDetails && factors.map(({name, score, feedback}) => <CallScoreFactorDetail
                    key={name.split(" ").join("")}
                    title={name} score={score} feedback={feedback}
                    classes={{
                        container: classes?.factorDetailsContainer,
                        factorTitle: classes?.factorDetailsTitle,
                        factorAnswer: classes?.factorDetailsAnswer
                    }}
                    colors={colors}
                />)
            }

        </div>
    </ThemeProvider>
}