import { Clock, Timer } from "iconsax-react";
import { useEffect, useState } from "react";
import style from "./style.module.scss";
const TimerComponents = ({ range }) => {
  const [timer, setTimer] = useState(range);

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
  function tick() {
    setTimer(timer - 1);
  }
  return (
    <>
      <p className={style.timer}>
        0:{timer > 0 ? timer : 0}
        <span className={style.timer_icon}>
          <Clock />
        </span>
      </p>
    </>
  );
};

export default TimerComponents;
