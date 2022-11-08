import axios from "axios";

export type ArtistInAlbumFormat = {
  name: string;
};

export type ImagesObject = {
  url: string;
};

export type ItemsObjectType = {
  name: string;
  preview_url: string;
  duration_ms : number;

};
export type TracksTypes = {
  items: ItemsObjectType[];
};

export type AlbumFormat = {
  artists: ArtistInAlbumFormat[];
  images: ImagesObject[];
  name: string;
  tracks: TracksTypes;
  total_tracks: number;
  label: string;
};

export type Albums = {
  albums: AlbumFormat[];
};

const options = {
  method: "GET",
  url: "https://spotify23.p.rapidapi.com/albums/",
  params: {
    ids: "0lzPMIAYhhUSD2BPT0VQWI,7eQGtkzCgrIWDOe76E9F8t,6fG2eFCgUmytQWL6umtsCh",
  },
  headers: {
    "X-RapidAPI-Key": "c846e3fc9dmshc2cb66621396e95p1c8890jsn6ef29f6cb6b1",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

export const fetchMusicAsync = async () => {
  try {
    const { data } = await axios.request<Albums>(options);
    console.log(data.albums);

    return data.albums;
  } catch (error) {
    console.error(error);
  }
};
