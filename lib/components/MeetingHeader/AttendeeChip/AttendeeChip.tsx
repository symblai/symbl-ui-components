import Chip from '@mui/material/Chip';
import AvatarName from "../../../../src/components/Attendees/AvatarName";
import "./attendeeChip.scss";
import {AttendeeChipProps} from "../MeetingHeader.types";
import React from "react";
import LinkIcon from "../../../assets/icons/ArrowSquareOut.svg?react";

export const AttendeeChip: React.FC<AttendeeChipProps> = ({name, link, index, noBorders, attendeesGradientColors}: AttendeeChipProps) => {
    const handleClick = () => {
        if(!!link) {
            window.open(link)
        }
    }
    return <Chip
        title={!!link ? link : link}
        onClick={handleClick}
        variant={noBorders ? "filled" : "outlined" }
        label={<div className={"symbl-flex-container"}><p style={{margin: 0}}>{name}</p>{!!link && <LinkIcon/>}</div>}
            avatar={<AvatarName name={name} index={index} overlap={false} attendeesGradientColors={attendeesGradientColors} />}
        className={`attendee-chip symbl-avatar-name ${noBorders ? "symbl-no-border-avatar-chip" : "symbl-bordered-avatar-chip"} ${!!link ? 'with-link' : 'without-link'}`}
        sx={{ margin: '4px 8px 4px 0px', background: "none"}}/>
}