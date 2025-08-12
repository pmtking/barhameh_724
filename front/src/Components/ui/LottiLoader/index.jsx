import { useEffect } from "react";
import "./style.scss";
import { useState } from "react";
import Loader from "../Loader";
import Lottie from "lottie-react";

const LottiLoader = ({ animatin }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading && <Loader from={"lotti"} />}
      <Lottie animationData={animatin} />
    </>
  );
};

export default LottiLoader;
