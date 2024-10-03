import {Skeleton} from "@mui/material";
import "./callSentimentLoader.scss"

export const CallSentimentLoader = () => {
    const callScoreTitleAndSummary = <div>
        <Skeleton animation="wave" height={20} width={"20vw"}/>
        <Skeleton animation="wave" height={20} />
        <Skeleton animation="wave" height={20} />
        <br/>
        <Skeleton animation="wave" height={150} />
    </div>


    return <div className={"symbl-loader-container"}>
        {callScoreTitleAndSummary}
    </div>
}