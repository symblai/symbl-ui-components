import React, {useState} from "react";
import "./callScoreFactorsSummary.scss";
import CallScoreIcon from "../../../assets/icons/CallScore.svg?react";
import FactorTitleAndScore from "../../../../src/components/CallScore/FactorTitleAndScore/FactorTitleAndScore";
import {
    getClassNameByScore,
    getColorStylesByScore, getBackgroundColorStylesByScore,
    NA_SCORE
} from "../../../../src/components/CallScore/callScoreHelpers";
import {CallScoreSummaryProps, defaultColors} from "../CallScore.types";
import {addClassName} from "../../../../src/components/helpers";

    export const CallScoreFactorsSummary: React.FC<CallScoreSummaryProps> = ({callScore, factors, showCallSummaryInTooltip, classes, summaryTooltipPlacement = 'top', colors }) => {
    const [activeFactorIndex, setActiveFactorIndex] = useState<number | undefined>(undefined);

    const handleFactorClick= (index?: number) => {
        if(index === activeFactorIndex) {
            setActiveFactorIndex(undefined);
        }else {
            setActiveFactorIndex(index)
        }
    }

    const {positiveTextColor, negativeTextColor, neutralTextColor, positiveBackgroundColor, negativeBackgroundColor, neutralBackgroundColor} = !!colors ? colors : defaultColors;

    return <div className={`symbl-call-score no-padding no-background-color ${addClassName(classes?.container)}`}>
        <div className={`symbl-total symbl-container ${getClassNameByScore(callScore, 100)} ${addClassName(classes?.totalCallScore)}`}
             style={getBackgroundColorStylesByScore(callScore, 100, true, positiveBackgroundColor, negativeBackgroundColor, neutralBackgroundColor)}
        >
            <p className={`symbl-value ${getClassNameByScore(callScore, 100)}`} style={getColorStylesByScore(callScore, 100, positiveTextColor, negativeTextColor, neutralTextColor)}>
                <CallScoreIcon className={getClassNameByScore(callScore, 100)} style={getColorStylesByScore(callScore, 100, positiveTextColor, negativeTextColor, neutralTextColor)} />
                <span>{callScore ? callScore.toString().toUpperCase() : NA_SCORE.toUpperCase()}</span>
            </p>
        </div>
        {
            factors?.map((factor, index) => (<FactorTitleAndScore key={`${index}-${factor.name}`}
                                                                  activeFactorIndex={activeFactorIndex}
                                                                  onFactorClick={handleFactorClick}
                                                                  title={factor.name}
                                                                  actual={factor.score}
                                                                  total={100}
                                                                  showCallSummary={showCallSummaryInTooltip}
                                                                  summary={factor.summary}
                                                                  index={index}
                                                                  factorsLength={factors.length}
                                                                  summaryTooltipPlacement={summaryTooltipPlacement}
                                                                  classes={{
                                                                      factor: classes?.factor,
                                                                      tooltip: classes?.tooltip
                                                                  }}
                                                                  colors={colors}
            />))
        }
    </div>
}