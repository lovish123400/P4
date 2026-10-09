function Footer() {
  return (
    <footer className="mt-12">

      <div className="flex flex-col items-center justify-center p-6">

        <h2 className="text-2xl font-bold text-slate-400 mb-5">
          SIGN UP FOR OUR DAILY INSIDER
        </h2>

        <form
          action="/welcome"
          method="post"
          className="flex gap-3 border text-slate-400 rounded-lg overflow-hidden"
        >

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-80 flex-1 focus:outline-none"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-5 py-2 hover:bg-blue-600"
          >
            Subscribe
          </button>

        </form>

      </div>


      <div className="bg-teal-600 text-white p-8 flex justify-around flex-wrap">

        <div>
          <h3 className="text-xl font-bold mb-3">
            Explore
          </h3>

          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>


        <div>
          <h3 className="text-xl font-bold mb-3">
            Support
          </h3>

          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>


        <div>
          <h3 className="text-xl font-bold mb-3">
            Stay connected
          </h3>

          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

      </div>


      <div className="bg-teal-600 text-white text-center p-5">

        <h3 className="font-bold">
          DEV@Deakin 2022
        </h3>

        <p className="mt-2">
          Privacy Policy
          &nbsp;&nbsp;&nbsp;
          Terms
          &nbsp;&nbsp;&nbsp;
          Code of Conduct
        </p>

      </div>

    </footer>
  );
}

export default Footer;