import { useEffect } from "react";
import AboutApp from "../../Components/base/AboutApp";

import HiroSection from "../../Components/base/HiroSection";
import Aos from "aos";

import "aos/dist/aos.css";

import LastBarSection from "../../Components/base/LastBarSection";
import ActivitiesSectin from "../../Components/base/ActivitiesSection/iindex";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <HiroSection />
      <AboutApp />
      <LastBarSection />
      <ActivitiesSectin />
    </div>
  );
};

export default Home;
