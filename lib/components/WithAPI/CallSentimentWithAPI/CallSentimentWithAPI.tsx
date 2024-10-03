import {CallSentimentWithAPIProps, CallSentimentData} from "./CallSentimentWithAPI.types.ts";
import {useEffect, useRef, useState} from "react";
import {MeetingsNotFoundErrorMessage, UnauthenticatedUserErrorMessage} from "../../constants.ts";
import {getCallSentiment} from "../APIService.ts";
import {CallSentiment as CallSentimentDumbComponent} from "../../CallSentiment/index.ts"
import {CallSentimentLoader} from "./CallSentimentLoader.tsx";

export const CallSentimentWithAPI: React.FC<CallSentimentWithAPIProps> = (props: CallSentimentWithAPIProps ) => {

    const {accessToken,
        conversationId,
        hideLoader,
        customErrorMessage,
        onLoadingChange,
        onFetchError,
        customLoader,
        chartColors,
        chartBorderWidth,
        hideChartBackgroundColor,
        chartBackgroundColors,
        hideSummaryTooltip,
        sentimentColors,
        classes
    } = props;

    const dataFetchedRef = useRef(false);
    const [data, setData] = useState<CallSentimentData | null>(null);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( ()=> {
        const fetchData = async () => {
            if (!accessToken) {
                setFetchError(UnauthenticatedUserErrorMessage)
                onFetchError && onFetchError(UnauthenticatedUserErrorMessage)
                setIsLoading(false);
                return;
            }
            if (dataFetchedRef.current) return;
            dataFetchedRef.current = true;
            try {
                const meetingSummary = await getCallSentiment(accessToken, conversationId);
                setData(meetingSummary)
                setIsLoading(false)
            }catch(e) {
                setIsLoading(false)
                onFetchError && onFetchError(MeetingsNotFoundErrorMessage)
                setFetchError(MeetingsNotFoundErrorMessage)
            }
        }

        fetchData();
    }, [])

    useEffect(() => {
        onLoadingChange && onLoadingChange(isLoading);
    }, [isLoading]);

    return <div>
        {
            !!data && <CallSentimentDumbComponent overallSentiment={data.overallSentiment}
                                                  summary={data.summary}
                                                  callSentiments={data.chunks}
                                                  chartColors={chartColors}
                                                  chartBorderWidth={chartBorderWidth}
                                                  hideChartBackgroundColor={hideChartBackgroundColor}
                                                  chartBackgroundColors={chartBackgroundColors}
                                                  hideSummaryTooltip={hideSummaryTooltip}
                                                  sentimentColors={sentimentColors}
                                                  classes={classes}
            />
        }
        {
            !customLoader && !hideLoader && isLoading && <CallSentimentLoader/>
        }
        {
            !!customLoader && isLoading && customLoader
        }
        {
            fetchError && <div>{!!customErrorMessage ? customErrorMessage : fetchError}</div>
        }
    </div>
}