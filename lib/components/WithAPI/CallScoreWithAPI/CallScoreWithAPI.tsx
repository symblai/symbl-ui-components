import {CallScoreWithAPIProps, CallScoreData} from "./CallScoreWithAPI.types.ts";
import {useEffect, useRef, useState} from "react";
import {MeetingsNotFoundErrorMessage, UnauthenticatedUserErrorMessage} from "../../constants.ts";
import {getCallScore} from "../APIService.ts";
import {CallScore as CallScoreDumbComponent} from "../../CallScore/index.ts"
import {CallScoreLoader} from "./CallScoreLoader.tsx";

export const CallScoreWithAPI: React.FC<CallScoreWithAPIProps> = (props: CallScoreWithAPIProps ) => {

    const {accessToken,
        conversationId,
        hideLoader,
        customErrorMessage,
        onLoadingChange,
        onFetchError,
        customLoader,
        summaryTooltipPlacement,
        classes,
        colors,
        displayConfig
    } = props;

    const dataFetchedRef = useRef(false);
    const [data, setData] = useState<CallScoreData | null>(null);
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
                const meetingSummary = await getCallScore(accessToken, conversationId);
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
            !!data && <CallScoreDumbComponent callScore={data.score} summary={data.summary} factors={data.criteria}
                                              summaryTooltipPlacement={summaryTooltipPlacement}
                                              classes={classes}
                                              colors={colors}
                                              displayConfig={displayConfig}
            />
        }
        {
            !customLoader && !hideLoader && isLoading && <CallScoreLoader/>
        }
        {
            !!customLoader && isLoading && customLoader
        }
        {
            fetchError && <div>{!!customErrorMessage ? customErrorMessage : fetchError}</div>
        }
    </div>
}