import heroPic from "../assets/1720678584php1VZ8Ky.jpeg";

function Hero() {
  return (
    <div className="relative group">
      <img
        className="w-full h-150"
        src={heroPic}
        alt="Hero"
      />

      <h3 className="opacity-0 group-hover:opacity-100 bg-stone-900/66 absolute bottom-0 font- text-white w-full text-5xl text-center p-4 transition-opacity duration-500">
        Hey, I'm Lovish
      </h3>
    </div>
  );
}

export default Hero;