import "./nav.style.css";
import { Outlet } from "react-router-dom";
import logo2 from "../../assets/Logo2.png";
import logo3 from "../../assets/Logo3.png";
import { ReactNode } from "react";
import playerImage from "../../assets/playerImage.png";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import {
  fetchMusicsStart,
  setPlayingSongIndex,
} from "../../store/music/music.action";
import { useDispatch } from "react-redux";
import {
  selectPlayingSongIndex,
  selectPlayingSongArray,
} from "../../store/music/music.selector";
import { useSelector } from "react-redux";

type MusicTrackType = {
  name: string;
  src: string;
};

const Nav = () => {
  const dispatch = useDispatch();
  const playingSongIndex = useSelector(selectPlayingSongIndex);
  const playingSongArray = useSelector(selectPlayingSongArray);

  useEffect(() => {
    dispatch(fetchMusicsStart());
  }, []);

  const [trackIndex, setTrackIndex] = useState(playingSongIndex);

  const handleClickPrevious = () => {
    playingSongIndex === 0
      ? dispatch(setPlayingSongIndex(playingSongArray.length - 1))
      : dispatch(setPlayingSongIndex(playingSongIndex - 1));
  };

  const handleClickNext = () => {
    playingSongIndex < playingSongArray.length - 1
      ? dispatch(setPlayingSongIndex(playingSongIndex + 1))
      : dispatch(setPlayingSongIndex(0));
  };

  return (
    <>
      <div className="flex flex-row m-4">
        <img
          src={logo3}
          className="absolute top-[2.7%] left-[2.2%]"
          alt="Logo image"
        />
        <img
          src={logo2}
          className="absolute top-[3.3%] left-[3%]"
          alt="Logo image"
        />

        <div className="ml-[8%] ">
          <div className="flex flex-row mt-4">
            <Icon
              icon="ant-design:search-outlined"
              color="rgba(221, 221, 221, 0.8666666666666667)"
              width="25"
            />
            <input
              type="text"
              className="text-[1.8rem] text-[#ddd] ml-4 bg-[#1e1e1e] outline-none"
              placeholder="Search artist"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-[8%]">
          <div className="flex-column bg-[#1A1E1F] ml-4 mb-4 mr-4 p-4 mt-[1rem] rounded-[30px]">
            <div className="p-2">
              <Icon
                icon="ci:home-fill"
                color="#facd66"
                width="33"
                className="mt-4"
              />
            </div>
            <div className="p-2">
              <Icon
                icon="entypo:folder-music"
                color="#dddd"
                width="33"
                className="mt-4"
              />
            </div>
            <div className="p-2">
              <Icon
                icon="ri:radio-2-fill"
                color="rgba(221, 221, 221, 0.8666666666666667)"
                width="33"
                className="mt-4"
              />
            </div>
            <div className="p-2">
              <Icon
                icon="fluent:content-view-gallery-28-filled"
                color="rgba(221, 221, 221, 0.8666666666666667)"
                width="33"
                className="mt-4"
              />
            </div>
          </div>
          <div className="flex-column bg-[#1A1E1F] m-4 p-4 mt-[2rem] rounded-[30px]">
            <div className="p-2">
              <Icon
                icon="bi:person-fill"
                color="rgba(221, 221, 221, 0.8666666666666667)"
                width="33"
                className="mt-4"
              />
            </div>
            <div className="p-2">
              <Icon
                icon="ion:exit-sharp"
                color="rgba(221, 221, 221, 0.8666666666666667)"
                width="33"
                className="mt-4"
              />
            </div>
          </div>
        </div>
        <div className="basis-[92%]">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="flex flex-row fixed bottom-0 left-0 right-0 backdrop-blur z-10 ">
        <div className="basis-[15%] pr-2 pt-[2rem] pl-[1rem] bg-[#1e1e1eb3]">
          <div className="flex flex-row ">
            <div className="ml-[1rem]">
              <img src={playerImage} alt="player image" />
            </div>
            <div className="ml-[2rem]">
              <h5 className="text-white text-[2.1rem] font-semibold">
                Music Name
              </h5>
              <p className="text-white text-[1.6rem]"> some shit</p>
            </div>
          </div>
        </div>
        <div className="basis-[85%] ">
          <AudioPlayer
            className="backdrop-blur"
            layout="stacked-reverse"
            style={{
              backgroundColor: "rgba(30,30,30,0.7)",
              backdropFilter: "blue(8px)",
            }}
            // layout="horizontal"
            src={
              playingSongArray[playingSongIndex].preview_url &&
              playingSongArray[playingSongIndex].preview_url
            }
            onPlay={(e) => console.log("onPlay")}
            showSkipControls={true}
            showJumpControls={false}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            onEnded={handleClickNext}
            // other props here
          />
        </div>
      </div>
    </>
  );
};

export default Nav;

// const musicTracks: MusicTrackType[] = [
//   {
//     name: "Memories",
//     src: "https://p.scdn.co/mp3-preview/a93e74dbf223524121f2417d9c481ed2abfb123f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
//   },
//   {
//     name: "Creative Minds",
//     src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
//   },
//   {
//     name: "Acoustic Breeze",
//     src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
//   },
//   {
//     name: "Sunny",
//     src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
//   },
//   {
//     name: "Tenderness",
//     src: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3",
//   },
//   {
//     name: "Once Again",
//     src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3",
//   },
// ];
