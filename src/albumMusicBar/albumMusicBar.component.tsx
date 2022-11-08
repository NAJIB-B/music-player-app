import { Icon } from "@iconify/react";
import { ItemsObjectType, TracksTypes } from "../utils/music.utils";
import { useDispatch } from "react-redux";
import { convertMsToMinutesSeconds } from "../utils/helper.utils";
import {
  setPlayingSongIndex,
  setPlayingSongArray,
} from "../store/music/music.action";

type AlbumMusicBarProps = {
  trackItems: ItemsObjectType;
  labelName: string | undefined;
  image: string | undefined;
  trackArray: ItemsObjectType[] | undefined;
  songIndex: number;
};

const AlbumMusicBar = ({
  trackItems,
  labelName,
  image,
  trackArray,
  songIndex,
}: AlbumMusicBarProps) => {
  const dispatch = useDispatch();
  const musicName = trackItems.name;
  const raw_duration = trackItems.duration_ms;

  const duration = convertMsToMinutesSeconds(raw_duration);

  const selectSong = () => {
    if (trackArray) {
      dispatch(setPlayingSongIndex(songIndex));
      dispatch(setPlayingSongArray(trackArray));
    }
  };

  return (
    <div
      className="flex flex-row justify-between bg-[#33373b5e]  rounded-[15px] items-center mt-[2rem] mb-[2rem] pb-[0.5rem]"
      onClick={selectSong}
    >
      <div className="flex-[30%]">
        <div className="flex flex-row justify-start items-center ">
          <div className="flex flex-row items-center">
            <div>
              <img
                src={image}
                alt="song image"
                className="w-[63px] h-[63px] rounded-[10px] mt-[0.8rem] ml-[1rem]"
              />
            </div>
            <div>
              {" "}
              <Icon
                icon="ant-design:heart-filled"
                color="#e5524a"
                width="25"
                className="ml-[1rem]"
              />
            </div>
          </div>
          <div className="ml-[2rem]">
            <p>{musicName}</p>
          </div>
        </div>
      </div>
      <div className="flex-[25%] text-right">
        <p>{labelName}</p>
      </div>
      <div className="flex-[25%] text-right">
        <p>{duration}</p>
      </div>
      <div className="flex-[20%] text-right">
        <p className="mr-[1rem]">:</p>
      </div>
    </div>
  );
};

export default AlbumMusicBar;
