import man from "../../assets/HomeManImage.png";
import ellipse2 from "../../assets/Ellipse 2.png";
import ellipse3 from "../../assets/Ellipse 3.png";
import ellipse4 from "../../assets/Ellipse 4.png";
import ellipse5 from "../../assets/Ellipse 5.png";
import ellipse6 from "../../assets/Ellipse 6.png";
import playBtn from "../../assets/playBtn.svg";
import { Icon } from "@iconify/react";
import { ReactComponent as Dotdot } from "../../assets/DotDotImage.svg";

const Home = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="basis-[60%]  w-10">
          <div className="bg-[#609EAF] rounded-[20px]">
            <div className="flex flex-row">
              <div className="basis-[50%] text-white pl-8">
                <p className="text-[1.8rem] mt-[1.7rem] ml-[1.5rem]">
                  Curated playlist
                </p>
                <h3 className="text-[3rem] font-bold mt-[8rem] ml-[1.5rem]">
                  R & B Hits
                </h3>
                <p className="text-[1.8rem] ml-[1.5rem]">
                  All mine, Lie again, pretty call me everyday, Out of time, No
                  love, Bad habit, and so much more
                </p>
                <div className="flex flex-row mt-[3.5rem] ">
                  <div>
                    <img
                      src={ellipse2}
                      alt="ellipseImge"
                      className="inline-block relative left-[12%] z-10"
                    />
                    <img
                      src={ellipse3}
                      alt="ellipseImge"
                      className="inline-block relative left-[-1%] z-20"
                    />
                    <img
                      src={ellipse4}
                      alt="ellipseImge"
                      className="inline-block relative left-[-10%] z-30"
                    />
                    <img
                      src={ellipse5}
                      alt="ellipseImge"
                      className="inline-block relative left-[-20%] z-40"
                    />
                    <img
                      src={ellipse6}
                      alt="ellipseImge"
                      className="inline-block relative left-[-30%] z-50"
                    />
                  </div>
                  <div>
                    <Icon
                      icon="ant-design:heart-filled"
                      color="white"
                      width="25"
                    />
                  </div>
                  <div>
                    <p className="text-[1.8rem]">33k Likes</p>{" "}
                  </div>
                </div>
              </div>
              <div className="basis-[50%] relative">
                <Dotdot className="absolute right-[2%] z-0"></Dotdot>
                <img
                  src={man}
                  alt="image of an artist"
                  className="z-10 relative"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="basis-[40%]">
          <h2 className="text-[3rem] text-white font-bold">Top charts</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
