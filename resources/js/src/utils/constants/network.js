export default {
    baseURL: import.meta.env.VITE_API_URL,
    contentType: "application/json;charset=UTF-8",
    accept: "application/json;charset=UTF-8",
    xRequestedWith: "XMLHttpRequest",
    errorNetworkCode: "ERR_NETWORK",
    timeout: 5000,
    okCode: 200,
    createdCode: 201,
    notContentCode: 204,
    movedPermanentlyCode: 301,
    badRequestCode: 400,
    unauthorizedCode: 401,
    forbiddenCode: 403,
    notFoundCode: 404,
    methodNotAllowCode: 405,
    requestTimeoutCode: 408,
    payloadTooLargeCode: 413,
    pageExpiredCode: 419,
    unprocessableEntityCode: 422,
    tooManyRequestsCode: 429,
    internalServerCode: 500,
    serviceUnavailableCode: 503,
};
