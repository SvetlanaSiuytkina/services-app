export const SERVICES_LIST_REQUESTED = 'SERVICES_LIST_REQUESTED';
export const SERVICES_LIST_SUCCEEDED = 'SERVICES_LIST_SUCCEEDED';
export const SERVICES_LIST_FAILED = 'SERVICES_LIST_FAILED';

export const SERVICES_DETAILS_REQUESTED = 'SERVICES_DETAILS_REQUESTED';
export const SERVICES_DETAILS_SUCCEEDED = 'SERVICES_DETAILS_SUCCEEDED';
export const SERVICES_DETAILS_FAILED = 'SERVICES_DETAILS_FAILED';

export const servicesListRequested = () => ({ type: SERVICES_LIST_REQUESTED });
export const servicesListSucceeded = (data) => ({ type: SERVICES_LIST_SUCCEEDED, payload: data });
export const servicesListFailed = (error) => ({ type: SERVICES_LIST_FAILED, payload: error });

export const servicesDetailsRequested = (id) => ({ type: SERVICES_DETAILS_REQUESTED, payload: id });
export const servicesDetailsSucceeded = (data) => ({ type: SERVICES_DETAILS_SUCCEEDED, payload: data });
export const servicesDetailsFailed = (error) => ({ type: SERVICES_DETAILS_FAILED, payload: error });