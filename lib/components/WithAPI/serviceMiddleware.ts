const getHeaders = (accessToken: string) => ({
    Authorization: `Bearer ${accessToken}`,
    'x-api-key': accessToken,
    'Content-Type': 'application/json',
    Accept: "application/json"});


export const getRequest = async (url: string, accessToken: string) => {
    const response = await fetch(url,{headers: getHeaders(accessToken)});const data = await response.json();
    if(!response.ok) {
        data.status = response.status;
        throw data;
    }
    return data;
}