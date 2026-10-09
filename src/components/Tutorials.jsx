import TutorialCard from "./TutorialCard";

import tutorialOne from "../assets/premium_photo-1724178052290-3b45e5400a9c.avif";
import tutorialTwo from "../assets/photo-1543357920-01f8ecd29814.avif";
import tutorialThree from "../assets/photo-1708794494512-65d837b31e88.avif";

function Tutorials() {

  const tutorialList = [
    {
      id: 1,
      name: "JavaScript Basics",
      description: "Learn basic JavaScript",
      rating: 5,
      username: "Lovish",
      image: tutorialOne
    },

    {
      id: 2,
      name: "React Tutorial",
      description: "Learn the basics of React",
      rating: 5,
      username: "Lovish",
      image: tutorialTwo
    },

    {
      id: 3,
      name: "ExpressJS",
      description: "Learn basic ExpressJS",
      rating: 4.9,
      username: "Lovish",
      image: tutorialThree
    }
  ];

  return (
    <section className="mt-12">

      <h2 className="text-center text-3xl font-bold mb-8">
        Featured Tutorials
      </h2>

      <div className="flex justify-center gap-10 flex-wrap">

        {tutorialList.map((tutorial) => (
          <TutorialCard
            key={tutorial.id}
            tutorial={tutorial}
          />
        ))}

      </div>

      <div className="text-center mt-7">

        <button className="bg-gray-200 px-5 py-2 rounded-full">
          See all tutorials
        </button>

      </div>

    </section>
  );
}

export default Tutorials;