import {getRequest} from "./serviceMiddleware.ts";
import {BASE_PATH_URL} from "../constants.ts";
import {MeetingMetadata} from "./MeetingHeaderWithAPI/MeetingHeaderWithAPI.types.ts";
import {CallScoreData} from "./CallScoreWithAPI/CallScoreWithAPI.types.ts";
import {CallSentimentData} from "./CallSentimentWithAPI/CallSentimentWithAPI.types.ts";

const BASE_PATH = '/v1/insights/conversations'
const meetingMetadataPath = (conversationId: string) => `${BASE_PATH}/${conversationId}/metadata`
export const meetingMetadataUrl = (conversationId: string) => `${BASE_PATH_URL}${meetingMetadataPath(conversationId)}`
const callScorePath = (conversationId: string) => `${BASE_PATH}/${conversationId}/call-score`
export const callScoreUrl = (conversationId: string) => `${BASE_PATH_URL}${callScorePath(conversationId)}`
const callSentimentPath = (conversationId: string) => `${BASE_PATH}/${conversationId}/call-sentiment`
export const callSentimentUrl = (conversationId: string) => `${BASE_PATH_URL}${callSentimentPath(conversationId)}`

// const getData = (url: string, accessToken: string, type: any) => {
//     return new Promise((resolve, reject) => {
//         getRequest(url, accessToken)
//             .then(data => {
//                 if(!data) {
//                     reject(MeetingNotFoundForConversationIdErrorMessage);
//                 } else {
//                     resolve(data: <type>)
//                 }
//             })
//             .catch(() => {
//                 reject()
//             });
//     });
//
// }
export const getMeetingMetadata = async (accessToken: string, conversationId: string) : Promise<MeetingMetadata> => {
    return new Promise((resolve, reject) => {
        getRequest(meetingMetadataUrl(conversationId), accessToken)
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
        getRequest(callScoreUrl(conversationId), accessToken)
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
        getRequest(callSentimentUrl(conversationId), accessToken)
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
