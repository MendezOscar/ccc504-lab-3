import { takeEvery } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import * as api from '../api'
import { startSession } from '../actions'

export default function* testSaga() {
  console.log('Wired up!');
  yield 'WIRED UP!'
}


export function* startSessionf() {
  yield takeEvery('START_SESSION', getSessionAsync);
}


