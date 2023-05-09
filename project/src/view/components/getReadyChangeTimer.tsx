import { useEffect, useState } from "react";
import { DEFAULT_PARAMS } from "../../consts";
import { secondsToTimer } from "../../utils/secondsToTimer";
import { useAppDispatch } from "../../hooks/typedWrappers";
import { setTimerSeconds } from "../../store/actions";

const GetReadyChangeTimer = () => {
  
  const dispatch = useAppDispatch();
  const [seconds, setSeconds] = useState(60);
  
  const increaseSecondsHandler = () => {
    if (seconds < 600) {
      setSeconds((prev) => prev + DEFAULT_PARAMS.timeStep)
    }
  }
  const decreaseSecondsHandler = () => {
    if (seconds > 15) {
      setSeconds((prev) => prev - DEFAULT_PARAMS.timeStep)
    }
  }

  useEffect(() => {
    dispatch(setTimerSeconds(seconds));
  }, [dispatch, seconds]);

  
  return (
    <div className="row get-ready-screen__change-timer">
      <div className="col get-ready-screen__dec-time">
        <button onClick={decreaseSecondsHandler} className="get-ready-screen__change-time">
          <svg width={35} height={35} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4 16.7998L9.60001 11.9998L14.4 7.19981" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
      <div className="col">
        <div className="get-ready-screen__timer">Timer <b>{secondsToTimer(seconds)}</b></div>
      </div>
      <div className="col get-ready-screen__inc-time">
        <button onClick={increaseSecondsHandler} className="get-ready-screen__change-time">
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.59999 7.2002L14.4 12.0002L9.59999 16.8002" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}

export {GetReadyChangeTimer};
