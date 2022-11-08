import albumImage from "../assets/Lead-image.png";
import playerImage from "../assets/playerImage.png";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { selectAlbumCurrentlyBeenViewed } from "../store/music/music.selector";
import AlbumMusicBar from "../albumMusicBar/albumMusicBar.component";
const Album = () => {
  const album = useSelector(selectAlbumCurrentlyBeenViewed);

  const mainAlbumImage = album?.images[1].url;
  const musicImage = album?.images[2].url;
  const albumName = album?.name;
  const albumLable = album?.label;
  const albumTracks = album?.total_tracks;
  const tracks = album?.tracks;
  const tracksArray = album?.tracks.items;
  return (
    <>
      <div className="flex flex-row">
        <div>
          <img
            src={mainAlbumImage}
            alt="album image"
            className="w-[284px] h-[288.97px] rounded-[36px]"
          />
        </div>
        <div className="mt-[8rem] ml-[3rem]">
          <h2 className="text-[3rem] mb-[2rem]">{albumName}</h2>
          <p className="">{albumLable}</p>
          <p className="mb-[2rem]"> {albumTracks} songs </p>
          <div className="flex flex-row">
            <div>
              <button className="bg-[#ffffff12] p-[0.7rem] px-[1.3rem] rounded-[32px]">
                <div className="flex flex-row">
                  <div>
                    {" "}
                    <Icon
                      icon="ant-design:play-circle-filled"
                      color="#facd66"
                      width={20}
                    />
                  </div>
                  <div className="ml-[0.7rem]">
                    <p>Play all</p>
                  </div>
                </div>
              </button>
            </div>
            <div>
              <button className="bg-[#ffffff12] p-[0.7rem] ml-[2rem] px-[1.3rem] rounded-[32px]">
                <div className="flex flex-row ">
                  <div>
                    {" "}
                    <Icon
                      icon="fontisto:apple-music"
                      color="#facd66"
                      width={20}
                    />
                  </div>
                  <div className="ml-[0.7rem]">
                    <p>Add to collection</p>
                  </div>
                </div>
              </button>
            </div>
            <div className="ml-[3rem]">
              <Icon
                icon="ant-design:heart-filled"
                color="#e5524a"
                width="25"
                className="mt-[0.7rem]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[5rem] mb-[12rem]">
        {tracks?.items.map((items, i) => {
          return (
            <AlbumMusicBar
              trackItems={items}
              labelName={albumLable}
              image={musicImage}
              trackArray={tracksArray}
              songIndex={i}
              key={i}
            ></AlbumMusicBar>
          );
        })}
      </div>
    </>
  );
};

export default Album;
