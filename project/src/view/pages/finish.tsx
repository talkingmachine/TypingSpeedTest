import { useAppSelector } from "../../hooks/typedWrappers";
import { useNavigate } from "react-router-dom";
import { getAccuracy, getTypingSpeed } from "../../utils/getStatistics";

const Finish = () => {

  const maxCharsInARow = useAppSelector((state) => state.maxInARow);
  const correctAnswers = useAppSelector((state) => state.correctAnswers);
  const mistakes = useAppSelector((state) => state.mistakes);
  const timerSeconds = useAppSelector((state) => state.timerSeconds);
  const navigate = useNavigate();
  const userName = useAppSelector((state) => state.name);

  const restartHandler = () => {
    navigate('/');
  }

  return (
    <div className="container-fluid">
      <section className="finish-screen">
        <div className="row">
          <div className="col-12">
            <h1 className="finish-screen__title">Good job {userName}! Your results:</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul className="finish-screen__statistics">
              <li className="finish-screen-statistics-item">
                correct: <b>{getAccuracy(correctAnswers, mistakes)}%</b>;
              </li>
              <li className="finish-screen-statistics-item">
                longest streak: <b>{maxCharsInARow}</b> characters in a row
              </li>
              <li className="finish-screen-statistics-item">
                total typed: <b>{correctAnswers}</b>
              </li>
              <li className="finish-screen-statistics-item">
                mistakes: <b>{mistakes}</b>
              </li>
              <li className="finish-screen-statistics-item">
                typing speed: <b>{getTypingSpeed(timerSeconds, correctAnswers)} ch/m</b>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button onClick={restartHandler} className="finish-screen__button-restart">
              <svg width={50} height={50} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.17803 14.9999C4.43778 18.8326 8.04571 21.5999 12.3 21.5999C17.6019 21.5999 21.9 17.3018 21.9 11.9999C21.9 6.69797 17.6019 2.3999 12.3 2.3999C8.74662 2.3999 5.64417 4.33046 3.98428 7.1999M6.89998 8.3999H2.09998V3.5999" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export {Finish};