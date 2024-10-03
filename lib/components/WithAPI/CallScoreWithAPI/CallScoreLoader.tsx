import {Skeleton} from "@mui/material";
import "./callScoreLoader.scss"

export const CallScoreLoader = () => {
    const skeleton20Height = <Skeleton animation="wave" height={20} />
    const skeleton20Height10Width = <Skeleton animation="wave" height={20} width={"10vw"}/>;
    const skeleton20Height20Width = <Skeleton animation="wave" height={20} width={"20vw"}/>;
    const skeleton50Height = <Skeleton animation="wave" height={50} style={{flex: 1}}/>

    const callScoreTitleAndSummary = <div>
        {skeleton20Height20Width}
        {skeleton20Height}
        <div className={"symbl-white-background-container"} style={{display: "flex", gap: "24px", width: "80vw", margin: "12px 0"}}>
            {skeleton50Height}
            {skeleton50Height}
            {skeleton50Height}
        </div>
    </div>

    const callScoreBlock = <div>
        {skeleton20Height20Width}
        {skeleton20Height10Width}
        {skeleton20Height}
        {skeleton20Height}
    </div>

    return <div className={"symbl-loader-container"}>
        {callScoreTitleAndSummary}
        {callScoreBlock}
        {callScoreBlock}
    </div>
}