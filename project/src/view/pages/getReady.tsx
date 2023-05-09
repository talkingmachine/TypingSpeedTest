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
        <div className="row get-ready-screen__button-row">
          <div className="col-12">
            <button onClick={readyButtonHandler} className="get-ready-screen__ready-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243 243"><path d="M928.53,499.7V570a12,12,0,0,0,19,9.78L996,545.1a12,12,0,0,0,.13-19.45L947.65,490A12,12,0,0,0,928.53,499.7Z" transform="translate(-838.42 -414.79)" fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='10' /></svg>
            </button>
          </div>
        </div>
        <GetReadyChangeTimer/>
      </section>
    </div>
  );
}

export {GetReady};