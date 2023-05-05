const GetReady = () => {
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
            <button className="get-ready-screen__ready-button">Go</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="get-ready-screen__change-time get-ready-screen__decrease-time">less</button>
          </div>
          <div className="col">
            <div className="get-ready-screen__timer">00:30</div>
          </div>
          <div className="col">
            <button className="get-ready-screen__change-time get-ready-screen__increase-time">more</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export {GetReady};