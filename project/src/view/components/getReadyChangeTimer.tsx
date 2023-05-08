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
    <div className="row">
      <div className="col">
        <button onClick={decreaseSecondsHandler} className="get-ready-screen__change-time get-ready-screen__decrease-time">less</button>
      </div>
      <div className="col">
        <div className="get-ready-screen__timer">{secondsToTimer(seconds)}</div>
      </div>
      <div className="col">
        <button onClick={increaseSecondsHandler} className="get-ready-screen__change-time get-ready-screen__increase-time">more</button>
      </div>
    </div>
  );
}

export {GetReadyChangeTimer};
