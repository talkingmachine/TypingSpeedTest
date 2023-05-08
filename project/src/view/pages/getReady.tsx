import { useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/typedWrappers";
import { setFutureSentence, setFutureToCurrentSentence } from "../../store/actions";
import { getText } from "../../api/getText";
import { GetReadyChangeTimer } from "../components/getReadyChangeTimer";

const GetReady = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    getText().then(text => { // first sentence without loading on the next screen
    dispatch(setFutureSentence(text));
    dispatch(setFutureToCurrentSentence());
  });
  }, [dispatch]);
  
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
        <GetReadyChangeTimer/>
      </section>
    </div>
  );
}

export {GetReady};