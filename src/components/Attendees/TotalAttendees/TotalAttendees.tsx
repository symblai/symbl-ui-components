import React, {useState} from "react";
import AvatarName from "../AvatarName";
import "./totalAttendees.scss";
import Tooltip from '@mui/material/Tooltip';
import {AttendeeChip} from "../../../../lib/components/MeetingHeader/AttendeeChip";
import {addClassName} from "../../helpers.ts";
import {Attendee} from "../../../../lib/components/MeetingHeader/MeetingHeader.types.ts";

export const TotalAttendees : React.FC<TotalAttendeesProps> = ({ attendees, classes, attendeesGradientColors}) => {
    const names = attendees.map(({name}) => name);
    const [showAttendees, setShowAttendees] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setShowAttendees(showAttendees => !showAttendees);
    }

    const namesAttendeesChip = (<div>{attendees.map(({name, link}, index) => (
        <AttendeeChip name={name} link={link} index={index} key={index} noBorders={true} classes={{icon: classes?.icon, headerField: classes?.headerField}} attendeesGradientColors={attendeesGradientColors}/>))}</div>);

    return <Tooltip open={showAttendees} title={namesAttendeesChip}
                    placement={"bottom"} classes={{tooltip: `symbl-total-attendees-tooltip ${addClassName(classes?.attendeesDropdown)}`}}>
        <div className={"symbl-attendees-container"} onClick={handleClick}>
            <div className={"symbl-avatars"}> {names.map((name, index) => <AvatarName name={name} overlap={true} index={index}
                                                                                key={index} attendeesGradientColors={attendeesGradientColors}/>)}</div>
            <p className={"symbl-attendees"}>{`${names.length} attendees`}</p>
        </div>
    </Tooltip>;
}

interface TotalAttendeesProps {
    attendees: Attendee[],
    attendeesGradientColors?: string[],
    classes: {
        attendeesDropdown: string,
        headerField: string,
        icon: string,
    }
}