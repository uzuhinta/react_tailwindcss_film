import Local from 'constant/Local';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* watchAsideSage() {
  yield takeLatest('aside/toggleAside', function (action) {
    // console.log(action.payload);
    localStorage.setItem(Local.TOGGLE_ASIDE, action.payload);
  });
}

export default watchAsideSage;
