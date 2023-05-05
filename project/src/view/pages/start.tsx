const Start = () => {
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
            <form className="form-floating start-screen__form">
            <div className="input-group">
              <div className="form-floating">
                <input type="text" className="form-control start-screen__input-name" id="start-screen__input-name" placeholder="Username"/>
                <label htmlFor="start-screen__input-name">Username</label>
              </div>
              <button className="btn btn-outline-secondary start-screen__submit-button" type="button" >Button</button>
            </div>
            </form>  
          </div>
        </div>
      </section>
    </div>
  );
}

export {Start};
