import {
  SERVICES_LIST_REQUESTED,
  SERVICES_LIST_SUCCEEDED,
  SERVICES_LIST_FAILED,
  SERVICES_DETAILS_REQUESTED,
  SERVICES_DETAILS_SUCCEEDED,
  SERVICES_DETAILS_FAILED,
} from './actions';

const initialListState = { loading: false, error: null, data: [] };
const initialDetailsState = { loading: false, error: null, data: null };

export function servicesListReducer(state = initialListState, action) {
  switch (action.type) {
    case SERVICES_LIST_REQUESTED:
      return { loading: true, error: null, data: [] };
    case SERVICES_LIST_SUCCEEDED:
      return { loading: false, error: null, data: action.payload };
    case SERVICES_LIST_FAILED:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
}

export function servicesDetailsReducer(state = initialDetailsState, action) {
  switch (action.type) {
    case SERVICES_DETAILS_REQUESTED:
      return { loading: true, error: null, data: null };
    case SERVICES_DETAILS_SUCCEEDED:
      return { loading: false, error: null, data: action.payload };
    case SERVICES_DETAILS_FAILED:
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
}