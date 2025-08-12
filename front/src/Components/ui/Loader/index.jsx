import { LineWave } from "react-loader-spinner";
import "./style.scss";

const Loader = ({ from }) => {
  return (
    <>
      {from === "lotti" && (
        <>
          <LineWave
            visible={true}
            height="200"
            width="200"
            color="#FFB22C"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        </>
      )}
    </>
  );
};

export default Loader;
