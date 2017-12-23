import { take, call, put } from 'redux-saga/effects';
import { SET_TEST_ACTION } from 'ducks/exampleDuck';

export default function* exampleSaga() {
  while (true) {
    try {
      const action = yield take(SET_TEST_ACTION); // Take every action
    } catch (errorMessage) {}
  }
}
