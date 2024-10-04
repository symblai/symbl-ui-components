import {ReactElement} from "react";

export interface MeetingHeaderProps {
    title: string,
    meetingLink?: string,
    dateTime: string,
    duration: string,
    prospectCompany: string,
    callStage: string,
    attendees: Attendee[],
    showAttendeeNames?: boolean,
    attendeesGradientColors?: string[],
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

type headerFieldClasses = {
    icon: string,
    headerField: string,
}

export interface MeetingDateProps {
    dateTime: string,
    classes?: headerFieldClasses,
    icon?: ReactElement
}

export interface MeetingDurationProps {
    duration: string,
    classes?: headerFieldClasses,
    icon?: ReactElement
}

export interface ProspectCompanyProps {
    prospectCompany: string,
    classes?: headerFieldClasses,
    icon?: ReactElement
}

export interface CallStageProps {
    callStage: string,
    classes?: headerFieldClasses,
    icon?: ReactElement
}

export interface Attendee {
    name: string,
    link?: string,
    userId: string
}

export interface AttendeesProps {
    attendees: Attendee[],
    classes?: { icon: string, headerField: string, attendeesDropdown: string},
    attendeesGradientColors?: string[],
    icon?: ReactElement
}
export interface AttendeeChipProps {
    name: string,
    link?: string,
    index: number,
    noBorders?: boolean,
    classes?: headerFieldClasses,
    attendeesGradientColors?: string[]
}