function TutorialCard({ tutorial }) {
  return (
    <div className="w-72 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">

      <img
        src={tutorial.image}
        alt={tutorial.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">

        <h3 className="font-bold text-center text-blue-500 text-lg font-mono tracking-wider">
          {tutorial.name}
        </h3>

        <p className="text-sm font-bold mt-4">
          Description
        </p>

        <p className="text-gray-500 text-sm mt-1">
          {tutorial.description}
        </p>

        <div className="flex justify-between items-center mt-4">

          <p className="text-yellow-500 font-bold">
            ⭐ {tutorial.rating}
          </p>

          <p className="font-bold text-gray-700">
            {tutorial.username}
          </p>

        </div>

      </div>

    </div>
  );
}

export default TutorialCard;