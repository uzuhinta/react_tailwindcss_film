import { all } from 'redux-saga/effects';
import asideSage from 'components/Admin/Aside/asideSaga';

export default function* rootSaga() {
  yield all([asideSage()]);
}
