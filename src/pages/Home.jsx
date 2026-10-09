import Header from "../components/Header";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Articles from "../components/Articles";
import Tutorials from "../components/Tutorials";
import Footer from "../components/Footer";

function Home({ user, setUser }) {
  return (
    <>
      <Header user={user} setUser={setUser} />
      <Hero />
      <Profile />
      <Articles />
      <Tutorials />
      <Footer />
    </>
  );
}

export default Home;
