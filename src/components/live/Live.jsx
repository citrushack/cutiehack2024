import Landing from "./landing";
import About from "./about";
import Schedule from "./schedule/Schedule";
import Tracks from "./tracks";
// import Sponsors from "./Sponsors";
// import Team from "./leads/Team";
// import Committees from "./leads/Committees";
// import Judges from "./Judges";
import FAQ from "./faq/FAQ";
import Footer from "./footer";
import Navigation from "./Navigation";
import Stars from "./stars";
const Live = () => {
  return (
    <div className="relative">
      <Navigation />
      <Landing />
      <About />
      <Tracks />
      <Schedule />
      {/* <Sponsors />
      <Team />
      <Committees />
      <Judges /> */}
      <FAQ />
      <Footer />
      <Stars length={500} />
    </div>
  );
};

export default Live;
