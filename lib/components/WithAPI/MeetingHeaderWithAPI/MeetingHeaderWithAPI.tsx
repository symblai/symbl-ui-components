import {MeetingHeaderWithAPIProps, MeetingMetadata} from "./MeetingHeaderWithAPI.types.ts";
import {useEffect, useRef, useState} from "react";
import {MeetingsNotFoundErrorMessage, UnauthenticatedUserErrorMessage} from "../../constants.ts";
import {getMeetingMetadata} from "../APIService.ts";
import {MeetingHeader as MeetingHeaderDumbComponent} from "../../MeetingHeader/index.ts"
import {MeetingHeaderLoader} from "./MeetingHeaderLoader.tsx";

export const MeetingHeaderWithAPI: React.FC<MeetingHeaderWithAPIProps> = (props: MeetingHeaderWithAPIProps ) => {

    const {accessToken, conversationId,
        showAttendeeNames,
        attendeesGradientColors,
        classes,
        meetingLink,
        hideLoader,
        customErrorMessage,
        onLoadingChange,
        onFetchError,
        customLoader
    } = props;

    const dataFetchedRef = useRef(false);
    const [meetingSummary, setMeetingSummary] = useState<MeetingMetadata | null>(null);
    const [meetingsFetchError, setMeetingsFetchError] = useState<string | null>(null);
    const [meetingsLoading, setMeetingsLoading] = useState(true);

    useEffect( ()=> {
        const fetchMeetingMetadata = async () => {
            if (!accessToken) {
                setMeetingsFetchError(UnauthenticatedUserErrorMessage)
                onFetchError && onFetchError(UnauthenticatedUserErrorMessage)
                setMeetingsLoading(false);
                return;
            }
            if (dataFetchedRef.current) return;
            dataFetchedRef.current = true;
            try {
                const meetingSummary = await getMeetingMetadata(accessToken, conversationId);
                setMeetingSummary(meetingSummary)
                setMeetingsLoading(false)
            }catch(e) {
                setMeetingsLoading(false)
                onFetchError && onFetchError(MeetingsNotFoundErrorMessage)
                setMeetingsFetchError(MeetingsNotFoundErrorMessage)
            }
        }

        fetchMeetingMetadata();
    }, [])

    useEffect(() => {
        onLoadingChange && onLoadingChange(meetingsLoading);
    }, [meetingsLoading]);

    return <div>
        {
            !!meetingSummary && <MeetingHeaderDumbComponent title={meetingSummary.meetingName}
                                                            meetingLink={meetingLink}
                                                            dateTime={meetingSummary.startTime}
                                                            duration={meetingSummary.duration}
                                                            prospectCompany={meetingSummary.prospectName}
                                                            callStage={meetingSummary.callStage}
                                                            attendees={meetingSummary.attendees}
                                                            showAttendeeNames={showAttendeeNames}
                                                            classes={classes}
                                                            attendeesGradientColors={attendeesGradientColors}
            />
        }
        {
            !customLoader && !hideLoader && meetingsLoading && <MeetingHeaderLoader/>
        }
        {
            !!customLoader && meetingsLoading && customLoader
        }
        {
            meetingsFetchError && <div>{!!customErrorMessage ? customErrorMessage : meetingsFetchError}</div>
        }
    </div>
}