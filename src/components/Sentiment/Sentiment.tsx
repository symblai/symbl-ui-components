import "./sentiment.scss";
import PositiveSentiment from "../../../lib/assets/icons/sentiment/PositiveSentiment.svg?react";
import NegativeSentiment from "../../../lib/assets/icons/sentiment/NegativeSentiment.svg?react";
import NeutralSentiment from "../../../lib/assets/icons/sentiment/NeutralSentiment.svg?react";
import {SentimentColors} from "../../../lib/components/CallSentiment/SentimentChart/SentimentChart.types.ts";

export const capitalizeFirstLetter = (string: string) => {
    if (!string) return "Unavailable";
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const getClassNameBySentiment = (callSentiment: string) => {
    return callSentiment?.toLowerCase() === CALL_SENTIMENT.POSITIVE ? 'symbl-positive' : callSentiment?.toLowerCase() === CALL_SENTIMENT.NEGATIVE ? 'symbl-negative' : 'symbl-neutral';
}
const CALL_SENTIMENT = {
    POSITIVE: 'positive',
    NEGATIVE: "negative",
    NEUTRAL: "neutral",
    UNAVAILABLE: 'unavailable'
}


export const Sentiment : React.FC<CallSentiment> = ({sentiment, isBoldText, sentimentColors }) => {
    const sentimentToShow = !!sentiment ? sentiment : CALL_SENTIMENT.UNAVAILABLE;
    const areCustomColorsPresent = !!sentimentColors?.positiveText && !!sentimentColors?.negativeText && !!sentimentColors.neutralText;

    const color = sentiment?.toLowerCase() === CALL_SENTIMENT.POSITIVE ? sentimentColors?.positiveText
        : sentiment?.toLowerCase() === CALL_SENTIMENT.NEGATIVE ? sentimentColors?.negativeText :  sentimentColors?.neutralText;

    const styles = {color: color};

    return <div className={"symbl-sentiment-text"}>
        {sentiment?.toLowerCase() === CALL_SENTIMENT.POSITIVE ?
            <PositiveSentiment color={areCustomColorsPresent ? color : "#0B893F"}/>
            : sentiment?.toLowerCase() === CALL_SENTIMENT.NEGATIVE ? <NegativeSentiment color={areCustomColorsPresent ? color : "#DB3939"}/>
                : <NeutralSentiment color={areCustomColorsPresent ? color : "#956B2F"}/>
        }
        <span className={`${areCustomColorsPresent ? '' : getClassNameBySentiment(sentiment)} ${isBoldText ? "symbl-bold-text" : ""}`} style={areCustomColorsPresent ? styles : {}}>
            {capitalizeFirstLetter(sentimentToShow)}
        </span>
    </div>
}

interface CallSentiment {
    sentiment: string,
    isBoldText?: boolean,
    sentimentColors?: SentimentColors
}