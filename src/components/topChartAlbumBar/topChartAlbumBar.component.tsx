import { Icon } from "@iconify/react";
import { AlbumFormat } from "../../utils/music.utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentlyViewingAlbum } from "../../store/music/music.action";
type TopChartAlbumBarProps = {
  album: AlbumFormat;
};

const TopChartAlbumBar = ({ album }: TopChartAlbumBarProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, artists, total_tracks, images } = album;
  const artistName = artists[0].name;
  const image = images[2].url;

  const enterAlbum = () => {
    dispatch(setCurrentlyViewingAlbum(album));
    navigate("album");
  };

  return (
    <div
      className="flex flex-row mt-6 bg-[#141414] py-4 px-6 w-[90%] rounded-[16px]"
      onClick={enterAlbum}
    >
      <div className="basis-[80%]">
        <div className="flex flex-row">
          <div>
            <img
              src={image}
              alt="topChartImage"
              className="w-[63px] h-[63px] rounded-[10px]"
            />
          </div>
          <div className="ml-8">
            <p className="text-white text-[1.8rem] mt-[-8px] ">{name}</p>
            <p className="text-[1.6rem] text-white my-0">{artistName} </p>
            <p className="text-[1.7rem] text-white my-0">
              {" "}
              {total_tracks} songs
            </p>
          </div>
        </div>
      </div>
      <div className="basis-[20%] relative">
        <Icon
          icon="fluent:heart-20-regular"
          color="#facd66"
          width={33}
          className="absolute top-6 right-4"
        />
      </div>
    </div>
  );
};

export default TopChartAlbumBar;
