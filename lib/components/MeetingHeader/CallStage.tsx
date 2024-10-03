import {CallStageProps} from "./MeetingHeader.types";
import SeperatorIcon from "../../assets/icons/seperator.svg?react";
import {HeaderField} from "../../../src/components/HeaderField/HeaderField";
import {addClassName} from "../../../src/components/helpers";

export const CallStage: React.FC<CallStageProps> = ({callStage, classes, icon}: CallStageProps ) => {
    return <HeaderField
        icon={!!icon ? icon : <SeperatorIcon className={addClassName(classes?.icon)}/>}
        value={callStage}
        name={"call-stage"}
        headerFieldClassName={classes?.headerField}
    />
}