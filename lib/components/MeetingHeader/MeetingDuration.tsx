import {MeetingDurationProps} from "./MeetingHeader.types";
import ClockClockwiseIcon from "../../assets/icons/clockClockwise.svg?react";
import {HeaderField} from "../../../src/components/HeaderField/HeaderField";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
import {addClassName} from "../../../src/components/helpers";
dayjs.extend(localizedFormat);

export const MeetingDuration: React.FC<MeetingDurationProps> = ({duration, classes, icon}: MeetingDurationProps ) => {
    return <HeaderField
        icon={!!icon ? icon : <ClockClockwiseIcon className={addClassName(classes?.icon)}/>}
        value={duration}
        name={"duration"}
        headerFieldClassName={classes?.headerField}
    />
}