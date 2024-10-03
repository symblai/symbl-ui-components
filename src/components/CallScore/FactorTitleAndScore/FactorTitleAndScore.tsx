import React, {useState} from 'react';
import "./factorTitleAndScore.scss";
import {
    getBackgroundColorStylesByScore,
    getClassNameByScore,
    getClassNameContainerByScore, getColorStylesByScore,
    isNA
} from "../callScoreHelpers";
import {Button, Tooltip} from "@mui/material";
import {FactorTitleAndScoreProps, FactorWithScoreProps} from "../../../../lib/components/CallScore/CallScore.types";
import {addClassName} from "../../helpers";

const FactorWithScore: React.FC<FactorWithScoreProps> = ({title, actual, total, showCallSummary, colors }) => {
    const {positiveTextColor, negativeTextColor, neutralTextColor} = !!colors ? colors : {positiveTextColor: undefined, negativeTextColor: undefined, neutralTextColor: undefined};
    return <div className={`symbl-content ${showCallSummary ? "" : "symbl-added-margin"}`}>
        <p className={"symbl-title"}>{title}</p>
        <p className={`symbl-value ${getClassNameByScore(actual, total)}`}
           style={getColorStylesByScore(actual, total, positiveTextColor, negativeTextColor, neutralTextColor)}>
            {
                isNA(actual) ? actual.toString().toUpperCase() : `${actual}/${total}`
            }
        </p>
    </div>
}

const FactorTitleAndScore: React.FC<FactorTitleAndScoreProps> = ({title, actual, total, summary, showCallSummary, index, onFactorClick, activeFactorIndex, factorsLength, classes, summaryTooltipPlacement, colors}) => {
    const [isHover, setIsHover] = useState(false);

    const toggleTooltip = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        onFactorClick && onFactorClick(index);
    }

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const {positiveBackgroundColor, negativeBackgroundColor, neutralBackgroundColor} = !!colors ? colors : {positiveBackgroundColor: undefined, negativeBackgroundColor: undefined, neutralBackgroundColor: undefined};

    return (showCallSummary && summary && !isNA(summary))
        ? <div
            className={`symbl-factor symbl-grey-background ${showCallSummary ? getClassNameContainerByScore(actual, total) : ""} ${addClassName(classes?.factor)}`}
            style={getBackgroundColorStylesByScore(actual, total, isHover, positiveBackgroundColor, negativeBackgroundColor, neutralBackgroundColor)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Tooltip open={index === activeFactorIndex} title={summary}
                     placement={`${!!summaryTooltipPlacement ? summaryTooltipPlacement : 'top'}`} classes={{
                arrow: "symbl-tooltip-arrow",
                tooltip: `symbl-factor-summary ${addClassName(classes?.tooltip)}`
            }} arrow>
                <Button onClick={toggleTooltip}>
                    <FactorWithScore title={title} actual={actual} total={total}
                                     showCallSummary={showCallSummary} colors={colors}/>
                </Button>
            </Tooltip></div>
        : <div
            className={`symbl-factor symbl-grey-background ${showCallSummary ? getClassNameContainerByScore(actual, total) : ""} ${!!factorsLength && index === factorsLength - 1 && factorsLength > 2 ? 'remove-flex' : ''} ${addClassName(classes?.factor)}`}
            style={getBackgroundColorStylesByScore(actual, total, isHover, positiveBackgroundColor, negativeBackgroundColor, neutralBackgroundColor)}>
            <FactorWithScore title={title} actual={actual} total={total}
                             showCallSummary={showCallSummary}  colors={colors}/>
        </div>
}

export default FactorTitleAndScore;