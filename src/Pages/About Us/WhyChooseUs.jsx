import { FaShieldAlt, FaUsers, FaHandsHelping, FaHeart } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    { icon: FaShieldAlt, title: "Secure & Private", description: "We prioritize your safety and privacy." },
    { icon: FaUsers, title: "Culturally Aligned", description: "Reflects the traditions and values of our community." },
    { icon: FaHandsHelping, title: "Premium Profiles", description: "Verified profiles for genuine connections." },
    { icon: FaHeart, title: "User-Friendly Design", description: "An easy-to-use platform for everyone." },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 dark:text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-violet-700 text-center mb-10">Why Choose LifeLink?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-b from-purple-900 via-gray-900 to-black dark:bg-opacity-50 p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300">
              <feature.icon className="text-4xl text-gray-950 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-200 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
