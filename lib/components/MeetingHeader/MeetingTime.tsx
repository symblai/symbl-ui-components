import {HeaderField} from "../../../src/components/HeaderField/HeaderField";
import {MeetingDateProps} from "./MeetingHeader.types";
import ClockIcon from "../../assets/icons/clock.svg?react";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
import {addClassName} from "../../../src/components/helpers";
dayjs.extend(localizedFormat);

export const MeetingTime:React.FC<MeetingDateProps> = ({dateTime, classes, icon}: MeetingDateProps) => {
    return <HeaderField
        icon={!!icon ? icon : <ClockIcon className={addClassName(classes?.icon)}/>}
        value={dayjs(dateTime).format("LT")}
        name={"time"}
        headerFieldClassName={classes?.headerField}
    />
}