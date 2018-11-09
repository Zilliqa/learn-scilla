const getHost = (host: string) => {
  switch (host) {
    default:
      // return 'http://13.209.76.126:8080';
      return 'http://localhost:8080';
  }
};

const HOST = getHost(window.location.hostname);

// When logged in you can get the current user data from here
export const getSignInAPI = () => `${HOST}/user/auth`;
export const getSignUpAPI = () => `${HOST}/user/signup`;
export const getUserAPI = () => `${HOST}/user`;
export const getAuthAPI = () => `${HOST}/auth`;
export const getEmailVerificationAPI = () => `${HOST}/user/verify-email`;
export const getPasswordResetAPI = () => `${HOST}/user/password-reset`;
export const getRequestPasswordResetAPI = () => `${HOST}/user/request-password-reset`;

export const handleFetch = async ({ fetch, method, url, accessToken, data }) => {
  const headers = {
    'Content-Type': 'application/json'
  };
  const result = await fetch({
    method,
    url,
    headers: handleHeaders(headers, accessToken),
    data: JSON.stringify(data)
  });
  return result.data;
};

const handleHeaders = (headers, accessToken?: string) => {
  if (accessToken !== undefined) {
    return {
      ...headers,
      'X-Access-Token': accessToken
    };
  }
  return headers;
};

export const getErrorStatus = (error): number => {
  const { request } = error;
  const { status } = request;
  return status;
};
