import { AnyAction } from "redux";
import { AlbumFormat, ItemsObjectType } from "../../utils/music.utils";

import {
  setPlayingSongIndex,
  setPlayingSongArray,
  fetchMusicsSuccess,
  FetchMusicsFailed,
  setCurrentlyViewingAlbum,
} from "./music.action";

const playerPlaceHolder: ItemsObjectType = {
  name: "terminator",
  preview_url:
    "https://p.scdn.co/mp3-preview/a93e74dbf223524121f2417d9c481ed2abfb123f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
  duration_ms: 1000,
};

export type QuizState = {
  readonly isLoading: boolean;
  readonly albums: AlbumFormat[];
  readonly albumCurrentlyBeenViewed: AlbumFormat | null;
  readonly playingSongIndex: number;
  readonly playingSongArray: ItemsObjectType[];
};
const INITIAL_STATE: QuizState = {
  isLoading: false,
  albums: [],
  albumCurrentlyBeenViewed: null,
  playingSongArray: [playerPlaceHolder],
  playingSongIndex: 0,
};

export const musicReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (fetchMusicsSuccess.match(action)) {
    return { ...state, albums: action.payload };
  }
  if (setCurrentlyViewingAlbum.match(action)) {
    return { ...state, albumCurrentlyBeenViewed: action.payload };
  }
  if (setPlayingSongIndex.match(action)) {
    return { ...state, playingSongIndex: action.payload };
  }
  if (setPlayingSongArray.match(action)) {
    return { ...state, playingSongArray: action.payload };
  }
  return state;
};
