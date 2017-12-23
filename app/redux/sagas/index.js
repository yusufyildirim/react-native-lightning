import { fork, all } from 'redux-saga/effects';
import exampleSaga from './exampleSaga';

export default function* root() {
  yield all([
    fork(exampleSaga),
  ]);
}
