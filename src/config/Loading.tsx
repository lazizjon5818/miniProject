import Lottie from "lottie-react";
import animationData from "../assets/loading.json"; 

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie animationData={animationData} loop={true} className="w-32 h-32" />
    </div>
  );
};

export default Loading;
