import { useEffect, useState } from "react";
import "./countdownTimer.css";
const CountdownTimer = () => {
  const [isStart, setIsStart] = useState(false);
  const intialState = {
    hh: null,
    mm: null,
    sec: null,
  };
  const [time, setTime] = useState(intialState);
  const [removeBorder, setRemoveBorder] = useState(false);
  const onHandleChange = (e) => {
    let { name, value } = e.target;

    setTime((prev) => ({
      ...prev,
      [name]: value ? parseInt(value, 10) : "",
    }));
  };
  // const startTimer = () => {
  //   if (time?.sec > 0) {
  //     setTime((prev) => ({ ...prev, sec: sec - 1 }));
  //   } else if (time?.mm > 0) {
  //     setTime((prev) => ({ ...prev, mm: mm - 1, sec: 59 }));
  //   } else {
  //     setTime((prev) => ({ ...prev, hh: hh - 1, mm: 59, sec: 59 }));
  //   }
  // };
  const onClickStart =
    (() => {
      setIsStart(true);
      setRemoveBorder(true);

      const tid = setInterval(() => {
        // startTimer();
      }, [1000]);
    },
    [time]);
  const onClickReset = () => {
    setTime({ ...intialState });
    setIsStart(false);
    setRemoveBorder(false);
  };
  const onClickPause = () => {
    if (time.hh == "00" && time.mm == "00" && time.sec == "00") {
      setTime({ ...intialState });
    }
    setIsStart(false);
    setRemoveBorder(false);
  };
  const handleFocus = () => {};
  useEffect(() => {
    console.log(time);
  }, [time]);
  return (
    <div className="main-container">
      <div className="header">Countdown Timer :</div>
      <input
        type="number"
        placeholder="hh"
        className={`hour ${removeBorder ? "no-border" : ""}`}
        name="hh"
        value={time?.hh || ""}
        onChange={onHandleChange}
        onFocus={handleFocus}
      ></input>
      <input
        type="number"
        placeholder="mm"
        className={`min ${removeBorder ? "no-border" : ""}`}
        name="mm"
        value={time?.mm || ""}
        onChange={onHandleChange}
      ></input>
      <input
        type="number"
        placeholder="ss"
        className={`sec ${removeBorder ? "no-border" : ""}`}
        name="sec"
        value={time?.sec || ""}
        onChange={onHandleChange}
      ></input>
      {!isStart && (
        <button placeholder="start" className="start" onClick={onClickStart}>
          Start
        </button>
      )}
      {isStart && (
        <button
          type="submit"
          placeholder="pause"
          className="pause"
          onClick={onClickPause}
        >
          Pause
        </button>
      )}
      {isStart && (
        <button
          type="submit"
          placeholder="reset"
          className="reset"
          onClick={onClickReset}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default CountdownTimer;
