import {ReactElement} from "react";

export interface MeetingHeaderWithAPIProps {
    accessToken: string,
    conversationId: string,
    onLoadingChange?: (isLoading: boolean) => {},
    onFetchError?: (error: string) => {},
    hideLoader?: boolean,
    customErrorMessage?: string,
    customLoader?: ReactElement
    meetingLink?: string,
    showAttendeeNames?: boolean,
    attendeesGradientColors?: string[],
    attendeesLinks?: AttendeesLink[]
    classes?: {
        container?: string,
        meetingTitle?: string,
        icons?: {
            date?: string,
            time?: string,
            duration?: string,
            prospectCompany?: string,
            callStage?: string,
            attendees?: string,
        },
        headerFields?: {
            date?: string,
            time?: string,
            duration?: string,
            prospectCompany?: string,
            callStage?: string,
            attendees?: string,
        },
        attendeesDropdown?: string
    },
    icons?: {
        date?: ReactElement,
        time?: ReactElement,
        duration?: ReactElement,
        prospectCompany?: ReactElement,
        callStage?: ReactElement,
        attendees?: ReactElement,
    }
}

export interface AttendeesLink {
    email: string,
    link: string
}
export interface MeetingMetadata {
    conversationId: string,
    callStage: string,
    meetingName: string,
    prospectName: string,
    startTime: string,
    duration: string,
    conversationType: string,
    attendees: Attendee[],
    audioUrl: string,
    videoUrl: string,
    createdOn: string,
    updatedOn: string
}

export interface Attendee {
    id: string,
    name: string,
    userId: string,
    link?: string
}