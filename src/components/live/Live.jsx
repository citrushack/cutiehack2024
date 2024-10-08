import Landing from "./Landing";
import About from "./About";
import Schedule from "./schedule/Schedule";
import Tracks from "./Tracks";
import Sponsors from "./Sponsors";
import Team from "./Team/Team";
import Committees from "./Team/Committees";
import Judges from "./Judges";
import FAQ from "./faq/FAQ";
import Footer from "./Footer";
import Navigation from "./Navigation";
const Live = () => {
  return (
    <div>
      <Navigation />
      <Landing />
      <About />
      <Tracks />
      <Schedule />
      <Sponsors />
      <Team />
      <Committees />
      <Judges />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Live;
