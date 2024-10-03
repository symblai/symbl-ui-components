import {AttendeesProps} from "./MeetingHeader.types";
import {HeaderField} from "../../../src/components/HeaderField/HeaderField";
import SeperatorIcon from "../../assets/icons/seperator.svg?react";
import {TotalAttendees} from "../../../src/components/Attendees/TotalAttendees";
import {addClassName} from "../../../src/components/helpers";

export const Attendees: React.FC<AttendeesProps> = ({attendees, classes, attendeesGradientColors, icon}: AttendeesProps ) => {
    const classesProp = {icon: classes?.icon ? classes.icon : "",
        headerField: classes?.headerField ? classes.headerField: "",
        attendeesDropdown: classes?.attendeesDropdown ? classes.attendeesDropdown: "",
    }

    return <HeaderField
        icon={!!icon ? icon : <SeperatorIcon className={addClassName(classes?.icon)}/>}
        value={<TotalAttendees attendees={attendees} classes={classesProp}
                               attendeesGradientColors={attendeesGradientColors}/>}

        name={"attendees"}
        headerFieldClassName={classes?.headerField}
    />
}