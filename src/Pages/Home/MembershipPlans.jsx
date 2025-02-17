import { FaCheckCircle } from "react-icons/fa";

const MembershipPlans = () => {
  const plans = [
    {
      name: "Basic (Free)",
      price: "Free",
      features: [
        "Limited Profile Views",
        "Basic Match Suggestions",
        "No Direct Messaging"
      ],
      buttonText: "Join Now",
    },
    {
      name: "Premium",
      price: "$9.99/mo",
      features: [
        "Unlimited Browsing",
        "Direct Messaging",
        "Video Calls"
      ],
      buttonText: "Upgrade Now",
    },
    {
      name: "VIP",
      price: "$19.99/mo",
      features: [
        "Private Consultation",
        "Expert Matchmaking",
        "Exclusive Profile Boost"
      ],
      buttonText: "Go VIP",
    }
  ];
  
  return (
    <section className="py-16 max-w-[1496px] mx-auto bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Membership Plans</h2>
        <p className="mb-12 text-gray-300">Choose the plan that best suits your needs.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-xl font-bold text-purple-400">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <FaCheckCircle className="text-green-400" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
