import SeperatorIcon from "../../assets/icons/seperator.svg?react";
import {HeaderField} from "../../../src/components/HeaderField/HeaderField";
import {ProspectCompanyProps} from "./MeetingHeader.types";
import {addClassName} from "../../../src/components/helpers";

export const ProspectCompany: React.FC<ProspectCompanyProps> = ({prospectCompany, classes, icon}: ProspectCompanyProps ) => {
    return <HeaderField
        icon={!!icon ? icon : <SeperatorIcon className={addClassName(classes?.icon)}/>}
        value={prospectCompany}
        name={prospectCompany}
        headerFieldClassName={classes?.headerField}
    />
}