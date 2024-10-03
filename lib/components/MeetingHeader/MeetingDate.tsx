import CalenderCheckIcon from "../../assets/icons/calendarCheck.svg?react";
import {HeaderField} from "../../../src/components/HeaderField/HeaderField";
import dayjs from "dayjs";
import {MeetingDateProps} from "./MeetingHeader.types";
import {addClassName} from "../../../src/components/helpers";

export const MeetingDate:React.FC<MeetingDateProps> = ({dateTime, classes, icon}: MeetingDateProps) => {
    return <HeaderField
        icon={!!icon ? icon : <CalenderCheckIcon className={addClassName(classes?.icon)}/>}
        value={dayjs(dateTime).format("DD MMM YY")}
        name={"date"}
        headerFieldClassName={classes?.headerField}
    />
}