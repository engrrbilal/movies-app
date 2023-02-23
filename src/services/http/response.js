import { RESPONSE_TYPES, STATUS_CODES } from '../../constants/response-types';

export const prepareResponseObject = (response, status) => {
  const finalResponse = {
    data: null,
    error: true,
    statusCode: STATUS_CODES.INTERNAL_SERVER_ERROR,
    statusText: response?.message || response?.statusText,
  };

  if (response.noInternet) {
    return {
      ...finalResponse,
      data: {message: 'offline'},
      statusCode: STATUS_CODES.BAD_GATEWAY,
    };
  }

  if (!status) {
    return finalResponse;
  } else if (status === RESPONSE_TYPES.SUCCESS) {
    return {
      data: response?.data?.data || response?.data,
      statusMessage: response?.data?.userMessage || response?.data?.message || response?.data?.data?.message,
      statusCode: response?.status,
      error: response?.status !== STATUS_CODES.SUCCESS,
      statusText: response?.statusText || response?.data?.message,
    };
  } else if (status === RESPONSE_TYPES.ERROR_RESPONSE) {
    const { data: { error: errorResponse } } = response;
    const errorData = !Object.keys(errorResponse)?.length ? errorResponse : response.data;
    return {
      ...finalResponse,
      data: errorData,
      statusCode: response?.data?.error?.code || response?.status,
      statusText: response?.data?.message,
    };
  } else if (status === RESPONSE_TYPES.ERROR_REQUEST) {
    return {
      ...finalResponse,
      statusText: response,
    };
  }

  return finalResponse;
};

export const prepareErrorResponse = (error) => {
  if (error?.response) {
    return prepareResponseObject(error.response, RESPONSE_TYPES.ERROR_RESPONSE);
  } else if (error?.request) {
    return prepareResponseObject(error.request, RESPONSE_TYPES.ERROR_REQUEST);
  }

  return prepareResponseObject(error);
};
