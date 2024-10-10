import packageJson from "../../../package.json";

const packageVersion = packageJson.version;

const getHeaders = (accessToken: string, componentName: string) => ({
    Authorization: `Bearer ${accessToken}`,
    'x-api-key': accessToken,
    'Content-Type': 'application/json',
    Accept: "application/json",
    'x-symbl-component-version': packageVersion,
    'x-symbl-Component': componentName
});


export const getRequest = async (url: string, accessToken: string, componentName: string) => {
    const response = await fetch(url,{headers: getHeaders(accessToken, componentName)});const data = await response.json();
    if(!response.ok) {
        data.status = response.status;
        throw data;
    }
    return data;
}