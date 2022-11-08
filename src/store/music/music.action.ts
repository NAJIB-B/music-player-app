import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer.util";
import { MUSIC_ACTION_TYPES } from "./music.types";
import { AlbumFormat, TracksTypes, ItemsObjectType } from "../../utils/music.utils";
export type FetchMusicsStart =
  Action<MUSIC_ACTION_TYPES.FETCH_MUSIC_DATA_START>;

export const fetchMusicsStart = withMatcher((): FetchMusicsStart => {
  return createAction(MUSIC_ACTION_TYPES.FETCH_MUSIC_DATA_START);
});

export type FetchMusicsSuccess = ActionWithPayload<
  MUSIC_ACTION_TYPES.FETCH_MUSIC_DATA_SUCCESS,
  AlbumFormat[]
>;

export const fetchMusicsSuccess = withMatcher(
  (value: AlbumFormat[]): FetchMusicsSuccess => {
    return createAction(MUSIC_ACTION_TYPES.FETCH_MUSIC_DATA_SUCCESS, value);
  }
);
export type FetchMusicsFailed = ActionWithPayload<
  MUSIC_ACTION_TYPES.FETCH_MUSIC_DATA_FAILED,
  Error
>;

export const fetchMusicsFailed = withMatcher(
  (error: Error): FetchMusicsFailed => {
    return createAction(MUSIC_ACTION_TYPES.FETCH_MUSIC_DATA_FAILED, error);
  }
);
export type SetCurrentlyViewingAlbum = ActionWithPayload<
  MUSIC_ACTION_TYPES.ALBUM_CURRENTLY_BEEN_VIEWED,
  AlbumFormat
>;

export const setCurrentlyViewingAlbum = withMatcher(
  (value: AlbumFormat): SetCurrentlyViewingAlbum => {
    return createAction(MUSIC_ACTION_TYPES.ALBUM_CURRENTLY_BEEN_VIEWED, value);
  }
);
export type SetPlayingSongIndex = ActionWithPayload<
  MUSIC_ACTION_TYPES.PLAYING_SONG_INDEX,
  number
>;

export const setPlayingSongIndex = withMatcher(
  (value: number): SetPlayingSongIndex => {
    return createAction(MUSIC_ACTION_TYPES.PLAYING_SONG_INDEX, value);
  }
);
export type SetPlayingSongArray = ActionWithPayload<
  MUSIC_ACTION_TYPES.PLAYING_SONG_ARRAY,
  ItemsObjectType[]
>;

export const setPlayingSongArray = withMatcher(
  (value: ItemsObjectType[]): SetPlayingSongArray => {
    return createAction(MUSIC_ACTION_TYPES.PLAYING_SONG_ARRAY, value);
  }
);
