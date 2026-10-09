import myPhoto from "../assets/Screenshot 2026-08-18 184149.png";
import projectOne from "../assets/Screenshot 2026-08-18 191132.png";
import projectTwo from "../assets/Screenshot 2026-08-18 191204.png";

import photoOne from "../assets/photo-1543357920-01f8ecd29814.avif";
import photoTwo from "../assets/photo-1708794494512-65d837b31e88.avif";
import photoThree from "../assets/premium_photo-1693966067602-9ca1f56695c0.avif";
import photoFour from "../assets/premium_photo-1724178052290-3b45e5400a9c.avif";

function Profile() {
  return (
    <section>

      <div className="flex flex-col items-center justify-center mt-10 max-w-2xl mx-auto p-4 text-center">

        <div>
          <img
            className="w-40 object-cover rounded-full"
            src={myPhoto}
            alt="Lovish"
          />
        </div>

        <p className="text-center mt-5 text-stone-400 font-bold font-mono tracking-wider">
          I am a Student at Chitkara university,India.
        </p>

        <div className="h-0.5 w-50 mt-5 bg-stone-400"></div>

        <h2 className="text-center text-2xl mt-5 text-slate-400 font-bold">
          Here's what I have done so far:
        </h2>

        <div className="mt-13 flex flex-row">
          <img
            className="w-100 rounded-lg"
            src={projectOne}
            alt="Project"
          />

          <p className="text-center mt-2 text-stone-400 font-bold font-mono tracking-wider">
            Project: Designed Clone of a Website
          </p>
        </div>

        <div className="mt-5 flex flex-row">
          <img
            className="w-100 border border-gray-300 rounded-lg"
            src={projectTwo}
            alt="Portfolio"
          />

          <p className="text-center mt-2 text-stone-400 font-bold font-mono tracking-wider">
            Project: Self-Designed Portfolio
          </p>
        </div>

        <div className="h-0.5 w-50 mt-5 bg-stone-400"></div>

        <p className="text-center mt-2 text-stone-400 font-bold font-mono text-xl tracking-wider">
          My Photos
        </p>

      </div>

      <div className="flex p-4 gap-4 flex-wrap justify-center">

        <img
          className="w-60 h-90"
          src={photoOne}
          alt="Photo 1"
        />

        <img
          className="w-60 h-90"
          src={photoTwo}
          alt="Photo 2"
        />

        <img
          className="w-60 h-90"
          src={photoThree}
          alt="Photo 3"
        />

        <img
          className="w-60 h-90"
          src={photoFour}
          alt="Photo 4"
        />

      </div>

    </section>
  );
}

export default Profile;