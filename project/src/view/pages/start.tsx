import { FormEvent, useRef } from "react";
import { useAppDispatch } from "../../hooks/typedWrappers";
import { setName } from "../../store/actions";
import { DEFAULT_PARAMS } from "../../consts";
import { useNavigate } from "react-router-dom";
import { isNameValid } from "../../utils/isNameValid";

const Start = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const inputNameRef = useRef<HTMLInputElement>(null);

  const nameInputHandler = (e: FormEvent) => {
    e.preventDefault();
    if (inputNameRef.current) {
      if (isNameValid(inputNameRef.current.value)) {
        dispatch(setName(inputNameRef.current.value));
        navigate('/get-ready');
      }
    } else {
      dispatch(setName(DEFAULT_PARAMS.userName));
    }
  }

  return (
    <div className="container-fluid">
      <section className="start-screen">
        <div className="row">
          <div className="col-12">
            <h1 className="start-screen__title">Typing Speed Test</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form onSubmit={nameInputHandler} className="form-floating start-screen__form">
            <div className="input-group">
              <div className="form-floating">
                <input type="text" className="form-control start-screen__input-name" id="start-screen__input-name" placeholder="Username" ref={inputNameRef}/>
                <label htmlFor="start-screen__input-name">Username</label>
              </div>
              <button onClick={nameInputHandler} className="btn btn-outline-secondary start-screen__submit-button" type="button" >Button</button>
            </div>
            </form>  
          </div>
        </div>
      </section>
    </div>
  );
}

export {Start};
