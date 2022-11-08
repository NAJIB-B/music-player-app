import "./popular.style.css";
import newRelease from "../../assets/newRelease.png";
const Popular = () => {
  return (
    <>
      <h3 className="text-[3rem] font-bold text-white mt-4">New releases</h3>
      <div className="flex  overflow-x-auto newReleaseSlider mb-[10rem]">
        <div className="mr-12 flex-shrink-0">
          <img
            src={newRelease}
            alt="new  release image"
            className="w-[153px] h-[153px]"
          />
          <p className="text-[1.6rem] text-white">song name</p>
        </div>
      </div>
    </>
  );
};

export default Popular;
