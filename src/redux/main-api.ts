import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from './api-routes';
import { ErrorDataPayload } from './types';
import { MessageType, setBannerData } from 'redux/banner';

const LOGIN_REQUIRED = 'login_required';

const mainBaseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: async headers => {
    let auth0: undefined; // Auth0Client | undefined;
    try {
      // auth0 = await Auth0ClientSingleton.getInstance();
      const accessToken = 'await auth0.getTokenSilently()';
      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`);
      }
    } catch (error) {
      if (error === LOGIN_REQUIRED) {
        // await auth0?.logout({
        //   logoutParams: {
        //     returnTo: window.location.origin,
        //   },
        // });
      }
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return headers;
    }
  },
});

const mainQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  const result = await mainBaseQuery(args, api, extraOptions);

  if (!navigator.onLine) {
    api.dispatch(setBannerData({ type: MessageType.error, message: 'offlineNetworkMessage' }));
    return result;
  }

  if (result.error && result.error.status === 400) {
    // @TODO: use error code once BE is ready
    const data = result.error.data as ErrorDataPayload;
    if (data?.type === 'https://tools.ietf.org/html/rfc7231#section-6.5.1') {
      api.dispatch(setBannerData({ type: MessageType.error, message: 'serverError.validationError' }));
      return result;
    }

    // filter validation error
    api.dispatch(setBannerData({ type: MessageType.error, message: 'filters.error.title' }));
    return result;
  }

  if (result.error && result.error.status === 403) {
    api.dispatch(setBannerData({ type: MessageType.error, message: 'accessForbiddenMessage' }));
    return result;
  }

  if (result.error && result.error.status === 404) {
    api.dispatch(setBannerData({ type: MessageType.error, message: 'serverErrorBanner' }));
    return result;
  }

  // set error banner when server doesn't respond;
  // @TODO Refactor this implicit catch all case
  if (result.error && result.error.status !== 403) {
    if (result.error.status === 409 || result.error.status === 401) {
      // Email is already in use
      return result;
    }

    api.dispatch(setBannerData({ type: MessageType.error, message: 'serverErrorBanner' }));
    return result;
  }

  return result;
};

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: mainQueryWithReauth,
  tagTypes: [
    // SET_PAYMENT_INITIATOR_TAG,
    // CREATE_USER_TAG,
    // EDIT_USER_TAG,
    // DELETE_USER_BY_ID_TAG,
    // APPROVE_PAYMENT_TAG,
    // REJECT_PAYMENT_TAG,
  ],
  endpoints: () => ({}),
});
