import { createSelector } from "reselect";

import { RootState } from "../store";
export const selectMusicReducer = (state: RootState) => state.music;

export const selectAlbums = createSelector(
  [selectMusicReducer],
  (value) => value.albums
);

export const selectAlbumCurrentlyBeenViewed = createSelector(
  [selectMusicReducer],
  (value) =>value.albumCurrentlyBeenViewed

);
export const selectPlayingSongIndex = createSelector(
  [selectMusicReducer],
  (value) =>value.playingSongIndex

);
export const selectPlayingSongArray = createSelector(
  [selectMusicReducer],
  (value) =>value.playingSongArray

);
