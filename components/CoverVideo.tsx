import MainVideo from "@/assets/WalkingGirl.mp4";

const CoverVideo = () => {
  return (
    <div className="w-[100%] h-[100vh] relative">
      <video src={MainVideo} />
    </div>
  );
};

export default CoverVideo;
