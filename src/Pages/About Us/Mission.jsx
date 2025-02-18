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
    <section className=" dark:bg-gray-900 dark:text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-violet-700 mb-6">Our Mission</h2>
          <p className="text-gray-600 dark:text-fuchsia-50 text-justify">
          We are committed to building a trusted and inclusive community where individuals can discover love, understanding, and lifelong companionship. Through a safe, user-friendly, and innovative platform, we strive to foster meaningful connections that lead to lasting relationships, built on trust, respect, and shared values..
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
