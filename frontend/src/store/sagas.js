import { call, put, takeLatest } from 'redux-saga/effects';
import {
  SERVICES_LIST_REQUESTED,
  SERVICES_DETAILS_REQUESTED,
  servicesListSucceeded,
  servicesListFailed,
  servicesDetailsSucceeded,
  servicesDetailsFailed,
} from './actions';

const API = 'http://localhost:7070/api';

function* fetchServicesList() {
  try {
    const res = yield call(fetch, `${API}/services`);
    if (!res.ok) throw new Error(`Ошибка ${res.status}`);
    const data = yield call([res, 'json']);
    yield put(servicesListSucceeded(data));
  } catch (e) {
    yield put(servicesListFailed(e.message));
  }
}

function* fetchServiceDetails(action) {
  try {
    const res = yield call(fetch, `${API}/services/${action.payload}`);
    if (!res.ok) throw new Error(`Ошибка ${res.status}`);
    const data = yield call([res, 'json']);
    yield put(servicesDetailsSucceeded(data));
  } catch (e) {
    yield put(servicesDetailsFailed(e.message));
  }
}

export function* watchServices() {
  yield takeLatest(SERVICES_LIST_REQUESTED, fetchServicesList);
  yield takeLatest(SERVICES_DETAILS_REQUESTED, fetchServiceDetails);
}