import Lottie from "react-lottie";
import animationData from "../../assets/lotte-json/Animation-login.json";

const Vision = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 dark:text-white px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-violet-700 mb-6">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-100 text-justify">
          We aspire to be a trusted and innovative online platform that goes beyond borders, enabling individuals to build meaningful and lasting relationships. Our goal is to create a safe, seamless, and effective environment where people can connect with trust, mutual understanding, and sincerity. By fostering genuine connections, we aim to help individuals find their ideal partners and build a beautiful future together.
          </p>
        </div>
        <div className="md:w-1/2">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
      </div>
    </section>
  );
};

export default Vision;
