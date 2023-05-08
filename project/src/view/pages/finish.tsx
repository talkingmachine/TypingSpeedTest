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
                correct: {getAccuracy(correctAnswers, mistakes)}%;
              </li>
              <li className="finish-screen-statistics-item">
                longest streak: {maxCharsInARow} characters in a row
              </li>
              <li className="finish-screen-statistics-item">
                total characters: {correctAnswers}
              </li>
              <li className="finish-screen-statistics-item">
                mistakes: {mistakes}
              </li>
              <li className="finish-screen-statistics-item">
                typing speed: {getTypingSpeed(timerSeconds, correctAnswers)} ch/m
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button onClick={restartHandler} className="finish-screen__button-restart">Restart</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export {Finish};