import { useState } from "react";
import { secondsToTimer } from "../../utils/secondsToTimer";
import { DEFAULT_PARAMS } from "../../consts";
import { useNavigate } from "react-router-dom";

const GetReady = () => {

  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(60);

  const increaseSecondsHandler = () => {
    setSeconds((prev) => prev + DEFAULT_PARAMS.timeStep)
  }
  const decreaseSecondsHandler = () => {
    setSeconds((prev) => prev - DEFAULT_PARAMS.timeStep)
  }

  const readyButtonHandler = () => {
    navigate('/typing-test')
  }

  return (
    <div className="container-fluid">
      <section className="get-ready-screen">
        <div className="row">
          <div className="col-12">
            <h1 className="get-ready-screen__title">Ready?</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button onClick={readyButtonHandler} className="get-ready-screen__ready-button">Go</button>
          </div>
        </div>
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
      </section>
    </div>
  );
}

export {GetReady};