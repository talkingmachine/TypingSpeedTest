import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { visualCharSelection } from "../../utils/visualCharSelection";
import { getText } from "../../api/getText";
import { useAppDispatch, useAppSelector } from "../../hooks/typedWrappers";
import { incCorrectAnswers, incMistakes, setFutureSentence, setFutureToCurrentSentence } from "../../store/actions";

type TypingTestSentenceProps = {
  setCharsInARow: Dispatch<SetStateAction<number>>;
}
const TypingTestSentence = ({setCharsInARow}: TypingTestSentenceProps) => {

  const dispatch = useAppDispatch();
  const sentence = useAppSelector((state) => state.sentences.current);
  const [selectedChar, setSelectedChar] = useState(0);
  
  useEffect(() => {
    getText().then(text => {
      dispatch(setFutureSentence(text));
    });

  }, [dispatch]);

  useEffect(() => {
    const loadNewSentence = () => {
      dispatch(setFutureToCurrentSentence());
      setSelectedChar(0);
      getText().then(text => {
        dispatch(setFutureSentence(text));
      });
    }

    const keyboardListener = (e: KeyboardEvent) => {
      if ((e.key).toLowerCase() === (sentence[selectedChar]).toLowerCase()) {
        dispatch(incCorrectAnswers());
        setCharsInARow((prev) => prev + 1);
        if (selectedChar === sentence.length - 1) {
          loadNewSentence();
        } else {
          setSelectedChar((prev) => prev + 1);
        }
      } else if (/[A-Za-z0-9,.() ]+/.test(e.key) && e.key.length === 1) {
        dispatch(incMistakes());
        setCharsInARow(0);
      }
    }

    document.addEventListener('keydown', keyboardListener);

    return () => document.removeEventListener('keydown', keyboardListener);
  }, [dispatch, selectedChar, sentence, setCharsInARow]);

  return (
    <div className="row typing-test__sentence">
      <div className="col-12">
        <div className="typing-test__text">{visualCharSelection(sentence, selectedChar)}</div>
      </div>
    </div>
  );
}

export {TypingTestSentence};
