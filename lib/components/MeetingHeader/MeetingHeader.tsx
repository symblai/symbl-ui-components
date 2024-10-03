import {MeetingHeaderProps} from "./MeetingHeader.types";
import {AttendeeChip} from "./AttendeeChip";
import "./meetingHeader.scss";
import {MeetingDate} from "./MeetingDate";
import {MeetingTime} from "./MeetingTime";
import {MeetingDuration} from "./MeetingDuration";
import {ProspectCompany} from "./ProspectCompany";
import {CallStage} from "./CallStage";
import {Attendees} from "./Attendees";
import {addClassName} from "../../../src/components/helpers.ts";
import {ThemeProvider} from "@mui/material";
import theme from "../Theme.ts";

export const MeetingHeader: React.FC<MeetingHeaderProps> = (props: MeetingHeaderProps ) => {
    const {title,
        meetingLink,
        dateTime,
        duration,
        prospectCompany,
        callStage,
        attendees,
        showAttendeeNames, classes, attendeesGradientColors} = props;

    // const icon = classes?.icon ? classes.icon : '',
    //     headerFields = classes?.headerFields ? classes.headerFields : '',
    //     attendeesDropdown = classes?.attendeesDropdown ? classes.attendeesDropdown : "";
    const getClassName = (className: string | undefined)  => className ? className : "";
    const handleMeetingTitleClick = () => {
        if(!!meetingLink) {
            window.open(meetingLink)
        }
    }

    return <ThemeProvider theme={theme}>
    <div className={`symbl-meeting-header ${addClassName(classes?.container)}`}>
        <div className={`symbl-heading ${addClassName(classes?.meetingTitle)}`} onClick={handleMeetingTitleClick}>
            <p className={`symbl-meeting-title symbl-margin-top-16 ${!!meetingLink ? 'with-meeting-link': 'without-meeting-link'}`} title={!!meetingLink ? meetingLink : ''}>
                {title}
            </p>
        </div>

        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className={"symbl-meeting-details"}>
                {
                    !!dateTime && <>
                        <MeetingDate dateTime={dateTime} classes={{icon: getClassName(classes?.icons?.date), headerField: getClassName(classes?.headerFields?.date)}}/>
                        <MeetingTime dateTime={dateTime} classes={{icon: getClassName(classes?.icons?.time), headerField: getClassName(classes?.headerFields?.time)}}/>
                    </>
                }
                {
                    !!duration && <MeetingDuration duration={duration} classes={{icon: getClassName(classes?.icons?.duration), headerField: getClassName(classes?.headerFields?.duration)}}/>
                }
                {
                    !!prospectCompany && <ProspectCompany prospectCompany={prospectCompany} classes={{icon: getClassName(classes?.icons?.prospectCompany), headerField: getClassName(classes?.headerFields?.prospectCompany)}}/>
                }
                {
                    !!callStage && <CallStage callStage={callStage} classes={{icon: getClassName(classes?.icons?.callStage), headerField: getClassName(classes?.headerFields?.callStage)}}/>
                }
                {
                    attendees?.length > 0 && !showAttendeeNames && <Attendees attendees={attendees} 
                                                                              classes={{icon: getClassName(classes?.icons?.attendees), headerField: getClassName(classes?.headerFields?.attendees), attendeesDropdown: getClassName(classes?.attendeesDropdown)}} 
                                                                              attendeesGradientColors={attendeesGradientColors}/>
                }
            </div>
        </div>
        { attendees?.length > 0 && showAttendeeNames && <div className={"symbl-attendees-names"}> {attendees.map(({name, link}, index) => <AttendeeChip key={index} name={name} link={link} index={index} classes={{icon: getClassName(classes?.icons?.attendees), headerField: getClassName(classes?.headerFields?.attendees)}} attendeesGradientColors={attendeesGradientColors}/>)}</div>}
    </div>
    </ThemeProvider>
}