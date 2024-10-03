import "./callSentiment.scss";
import {Sentiment} from "../../../src/components/Sentiment/Sentiment.tsx";
import {SentimentChart} from "./SentimentChart";
import {addClassName, getConfigValue} from "../../../src/components/helpers.ts";
import {CallSentimentProps} from "./CallSentiment.types.ts";
import '@fontsource-variable/work-sans';
import {ThemeProvider} from "@mui/material";
import theme from "../Theme.ts";

export const CallSentiment = (props: CallSentimentProps) => {
    const {overallSentiment,
        summary,
        callSentiments,
        chartColors,
        chartBorderWidth,
        hideChartBackgroundColor,
        chartBackgroundColors,
        hideSummaryTooltip,
        sentimentColors,
        classes,
        displayConfig = {}} = props;


    const showTitle = getConfigValue( 'hideTitleBar',displayConfig, true),
        showSentimentSummary = getConfigValue( 'hideSummary',displayConfig, true),
        showOverallSentiment = getConfigValue( 'hideOverallSentiment',displayConfig,true),
        showSentimentChart = getConfigValue( 'hideSentimentChart',displayConfig,true);

    return <ThemeProvider theme={theme}>
    <div className={`symbl-call-sentiment-container ${addClassName(classes?.container)}`}>
            {showTitle && <div className={`symbl-call-sentiment-title ${addClassName(classes?.titleBar)}`}>
                <p className={"symbl-section-title"}>Call Sentiment</p>
                {showOverallSentiment && <Sentiment sentiment={overallSentiment} sentimentColors={sentimentColors}
                                                    isBoldText={true}/>}
            </div>
            }
            {showSentimentSummary && <p className={"symbl-call-sentiment-summary"}>{summary}</p>}

            {(showSentimentChart && !!callSentiments && callSentiments?.length > 0) &&
                <SentimentChart callSentiments={callSentiments}
                                chartColors={chartColors}
                                chartBorderWidth={chartBorderWidth}
                                hideChartBackgroundColor={hideChartBackgroundColor}
                                chartBackgroundColors={chartBackgroundColors}
                                hideSummaryTooltip={hideSummaryTooltip}
                                toolTipSentimentColors={sentimentColors}
                                classes={{container: classes?.chartContainer, tooltip: classes?.chartTooltip}}
                />}
        </div>
    </ThemeProvider>
}