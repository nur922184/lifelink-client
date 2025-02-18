import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import useAxiosSecurePublic from "../../Hooks/useAxiosSecurePublic";
import Loading from "../../Shared/Loading/Loading";

const SuccessStories = () => {
  const axiosPublic = useAxiosSecurePublic();
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API
    const fetchStories = async () => {
      try {
        const response = await axiosPublic.get("/successStoriesData");
        setStories(response.data); // Update state with fetched data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching success stories:", error);
        setLoading(false);
      }
    };
    fetchStories();
  }, [axiosPublic]);

  if (loading) {
    return <p className="text-center"><Loading></Loading></p>;
  }

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center dark:text-gray-100 mb-8">Success Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-purple-900 via-gray-900 to-black dark:bg-opacity-30 dark:text-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              {/* Couple Image */}
              <img
                src={story.coupleImage}
                alt="Couple"
                className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
              />

              {/* Marriage Date */}
              <p className=" text-white text-sm mb-2">
                Marriage Date: <span className="font-bold">{story.marriageDate}</span>
              </p>

              {/* Review Stars */}
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span key={starIndex}>
                    {starIndex + 1 <= Math.floor(story.reviewStars) ? (
                      <FaStar className="text-yellow-500" />
                    ) : starIndex + 0.5 === story.reviewStars ? (
                      <FaStarHalfAlt className="text-yellow-500" />
                    ) : (
                      <FaRegStar className="text-yellow-500" />
                    )}
                  </span>
                ))}
              </div>

              {/* Success Story Text */}
              <p className="text-violet-200 mb-4 text-sm line-clamp-3">{story.successText}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
