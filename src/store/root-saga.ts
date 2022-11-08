import { all, call } from "typed-redux-saga/macro";

import { musicSaga } from "./music/music-saga";

export function* rootSaga() {
  yield* all([call(musicSaga)]);
}
