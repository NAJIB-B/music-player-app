import "./nav.style.css";
import { Outlet } from "react-router-dom";
import logo2 from "../../assets/Logo2.png";
import logo3 from "../../assets/Logo3.png";
import { ReactNode } from "react";
import playBtn from "../../assets/playBtn.svg";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
type MusicTrackType = {
  name: string;
  src: string;
};
const Nav = () => {
  const musicTracks: MusicTrackType[] = [
    {
      name: "Memories",
      src: "https://www.bensound.com/bensound-music/bensound-memories.mp3",
    },
    {
      name: "Creative Minds",
      src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
    },
    {
      name: "Acoustic Breeze",
      src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
    },
    {
      name: "Sunny",
      src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    },
    {
      name: "Tenderness",
      src: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3",
    },
    {
      name: "Once Again",
      src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3",
    },
  ];
  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex(trackIndex === 0 ? musicTracks.length - 1 : trackIndex - 1);
  };

  const handleClickNext = () => {
    setTrackIndex(trackIndex < musicTracks.length - 1 ? trackIndex + 1 : 0);
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
          <div className="flex-column bg-[#1A1E1F] m-4 p-4 mt-[3rem] rounded-[30px]">
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
      <div className="flex flex-row fixed bottom-0 left-0 right-0 backdrop-blur z-10">
        <div className="basis-[15%] pr-4">
          {" "}
          <h1>Song name</h1>
        </div>
        <div className="basis-[85%] pl-4">
          <AudioPlayer
            className="backdrop-blur"
            layout="stacked-reverse"
            style={{ backgroundColor: "#1E1E1E", backdropFilter: "blue(8px)" }}
            // layout="horizontal"
            src={musicTracks[trackIndex].src}
            onPlay={(e) => console.log("onPlay")}
            showSkipControls={true}
            showJumpControls={false}
            header={`Now playing: ${musicTracks[trackIndex].name}`}
            footer="All music from: www.bensound.com"
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
