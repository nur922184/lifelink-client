import Lottie from "react-lottie";
import animationData from "../../assets/lotte-json/login.json";

const Mission = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600">
            To create a trusted community where individuals can find love, understanding, and lifelong companionship.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
