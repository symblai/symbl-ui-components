import {SentimentChart as SentimentChartOriginal} from "../../../../../lib/components/CallSentiment/SentimentChart";
import {SentimentChartProps} from "../../../../../lib/components/CallSentiment/SentimentChart/SentimentChart.types.ts";

export const SentimentChart = (props: SentimentChartProps) => {
    return <div className={"min-height"} style={{minHeight: "500px", height: "500px", position: "relative"}}>
        <div style={{marginTop: "100px"}}></div>
        <SentimentChartOriginal {...props}/>
    </div>
}