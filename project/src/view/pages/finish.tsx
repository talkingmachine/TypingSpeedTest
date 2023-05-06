import { useAppSelector } from "../../hooks/typedWrappers";
import { useNavigate } from "react-router-dom";

const Finish = () => {

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
                correct: 91%;
              </li>
              <li className="finish-screen-statistics-item">
                longest streak: 24 characters in a row
              </li>
              <li className="finish-screen-statistics-item">
                total characters: 2305
              </li>
              <li className="finish-screen-statistics-item">
                mistakes: 11
              </li>
              <li className="finish-screen-statistics-item">
                typing speed: 290 ch/m
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <span className="finish-screen__award">
              award: Platinum
            </span>
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