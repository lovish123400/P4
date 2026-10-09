import ArticleCard from "./ArticleCard";

import articleOne from "../assets/photo-1543357920-01f8ecd29814.avif";
import articleTwo from "../assets/photo-1708794494512-65d837b31e88.avif";
import articleThree from "../assets/premium_photo-1693966067602-9ca1f56695c0.avif";

function Articles() {

  const articleList = [
    {
      id: 1,
      name: "React Basics",
      description: "Learn basic React concepts",
      rating: 5,
      author: "Lovish",
      image: articleOne
    },

    {
      id: 2,
      name: "NodeJS",
      description: "Learn the basics of NodeJS",
      rating: 5,
      author: "Lovish",
      image: articleTwo
    },

    {
      id: 3,
      name: "React Hooks",
      description: "Learn about React Hooks",
      rating: 5,
      author: "Lovish",
      image: articleThree
    }
  ];

  return (
    <section className="mt-12">

      <h2 className="text-center text-3xl font-bold mb-8">
        Featured Articles
      </h2>

      <div className="flex justify-center gap-10 flex-wrap">

        {articleList.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
          />
        ))}

      </div>

      <div className="text-center mt-7">

        <button className="bg-gray-200 px-5 py-2 rounded-full">
          See all articles
        </button>

      </div>

    </section>
  );
}

export default Articles;