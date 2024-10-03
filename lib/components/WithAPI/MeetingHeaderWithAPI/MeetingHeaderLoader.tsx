import {Skeleton} from "@mui/material";

const MeetingHeaderField = () => {
    return <div style={{display: "flex", gap: "12px"}}>
        <Skeleton animation="wave" height={20} width={10}/>
        <Skeleton animation="wave" height={20} width={70}/>
    </div>
}

export const MeetingHeaderLoader = () => {
    return <div style={{display: "flex", flexDirection: "column", alignItems: "left"}}>
        <Skeleton animation="wave" height={20} width={210}/>
        <div style={{display: "flex", gap: "24px"}}>
            <MeetingHeaderField/>
            <MeetingHeaderField/>
            <MeetingHeaderField/>
            <MeetingHeaderField/>
            <MeetingHeaderField/>
            <MeetingHeaderField/>
        </div>
    </div>
}