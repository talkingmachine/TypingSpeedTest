import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/typedWrappers";
import { secondsToTimer } from "../../utils/secondsToTimer";
import { useNavigate } from "react-router-dom";
import { checkMaxInARow } from "../../store/actions";
import { getAccuracy } from "../../utils/getStatistics";

type TypingTestStatsBarProps = {
  charsInARow: number;
}
const TypingTestStatsBar = ({charsInARow}:TypingTestStatsBarProps) => {
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mistakes = useAppSelector((state) => state.mistakes);
  const correctAnswers = useAppSelector((state) => state.correctAnswers);
  const timerSeconds = useAppSelector((state) => state.timerSeconds)
  const [currentTime, setCurrentTime] = useState(timerSeconds);
  
  const getCharsInARow = () => {
    dispatch(checkMaxInARow(charsInARow));
    return charsInARow;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentTime > 0) {
        setCurrentTime((prev) => prev - 1);
      } else {
        navigate('/finish');
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [currentTime, navigate]);

  return (
    <div className="row typing-test__stats-row">
      <div className="col-4 typing-test__stats-col" >
        <span>remaining time<br/>{secondsToTimer(currentTime)}</span>
      </div>
      <div className="col-4 typing-test__stats-col" >
        {getAccuracy(correctAnswers, mistakes)}%
      </div>
      <div className="col-4 typing-test__stats-col" >
      <span>in a row<br/>{getCharsInARow()}</span>
      </div>
    </div>
  );
}

export {TypingTestStatsBar};
