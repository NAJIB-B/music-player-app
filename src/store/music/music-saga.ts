import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import { fetchMusicAsync } from "../../utils/music.utils";
import { fetchMusicsFailed, fetchMusicsSuccess } from "./music.action";

import { MUSIC_ACTION_TYPES } from "./music.types";

export function* startFetchingTheMusic() {
  console.log("working");
  try {
    const response = yield* call(fetchMusicAsync);
    if(response){
      yield* put(fetchMusicsSuccess(response))
    }
    
  } catch (error) {
    console.log(error);
  }
}

export function* onFetchMusicStart() {
  yield* takeLatest(
    MUSIC_ACTION_TYPES.FETCH_MUSIC_DATA_START,
    startFetchingTheMusic
  );
}

export function* musicSaga() {
  yield* all([call(onFetchMusicStart)]);
}
