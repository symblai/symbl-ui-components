import React, {ReactElement} from "react";
import "./headerField.scss"
import {addClassName} from "../helpers";

export const HeaderField:React.FC<HeaderFieldProps> = ({icon, value, name, headerFieldClassName} ) => {
    return <div className={`symbl-header-field ${addClassName(headerFieldClassName)}`}>
        {icon}
        <p className={name}>{value}</p>
    </div>
}

interface HeaderFieldProps {
    icon: ReactElement,
    value: string | ReactElement,
    name: string,
    headerFieldClassName?: string
}