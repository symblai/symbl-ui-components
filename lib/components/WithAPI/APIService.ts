import {getRequest} from "./serviceMiddleware.ts";
import {BASE_PATH_URL, COMPONENTS} from "../constants.ts";
import {MeetingMetadata} from "./MeetingHeaderWithAPI/MeetingHeader.types.ts";
import {CallScoreData} from "./CallScoreWithAPI/CallScore.types.ts";
import {CallSentimentData} from "./CallSentimentWithAPI/CallSentiment.types.ts";

const BASE_PATH = '/v1/insights/conversations'
const meetingMetadataPath = (conversationId: string) => `${BASE_PATH}/${conversationId}/metadata`
export const meetingMetadataUrl = (conversationId: string) => `${BASE_PATH_URL}${meetingMetadataPath(conversationId)}`
const callScorePath = (conversationId: string) => `${BASE_PATH}/${conversationId}/call-score`
export const callScoreUrl = (conversationId: string) => `${BASE_PATH_URL}${callScorePath(conversationId)}`
const callSentimentPath = (conversationId: string) => `${BASE_PATH}/${conversationId}/call-sentiment`
export const callSentimentUrl = (conversationId: string) => `${BASE_PATH_URL}${callSentimentPath(conversationId)}`

export const getMeetingMetadata = async (accessToken: string, conversationId: string) : Promise<MeetingMetadata> => {
    return new Promise((resolve, reject) => {
        getRequest(meetingMetadataUrl(conversationId), accessToken, COMPONENTS.MEETING_HEADER)
            .then(data => {
                if(!data) {
                    reject();
                } else {
                    resolve(data)
                }
            })
            .catch(() => {
                reject()
            });
    });
}

export const getCallScore = (accessToken: string, conversationId: string) : Promise<CallScoreData> => {
    return new Promise((resolve, reject) => {
        getRequest(callScoreUrl(conversationId), accessToken, COMPONENTS.CALL_SCORE)
            .then(data => {
                if(!data) {
                    reject();
                } else {
                    resolve(data)
                }
            })
            .catch(() => {
                reject()
            });
    });
}

export const getCallSentiment = (accessToken: string, conversationId: string) : Promise<CallSentimentData> => {
    return new Promise((resolve, reject) => {
        getRequest(callSentimentUrl(conversationId), accessToken, COMPONENTS.CALL_SENTIMENT)
            .then(data => {
                if(!data) {
                    reject();
                } else {
                    resolve(data)
                }
            })
            .catch(() => {
                reject()
            });
    });
}
