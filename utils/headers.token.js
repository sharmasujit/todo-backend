//extracting token from req.header.authorization
export const extractAccessTokenFromHeader=(authorisation)=>{
    const splittedValue=authorisation.split(" ");
    const token=splittedValue[1];
    return token;
}