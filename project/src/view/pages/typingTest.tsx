const TypingTest = () => {
  return (
    <div className="container-fluid">
      <section className="typing-test-screen">
        <div className="row">
          <div className="col-4" >
            remaining time
            00:30
          </div>
          <div className="col-4" >
            100%
          </div>
          <div className="col-4" >
            in a row
            0
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="typing-test__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis aliquid cumque, laudantium id maiores aspernatur. Expedita distinctio iste laudantium, explicabo eius fuga voluptate dolore animi voluptates, obcaecati, repellendus eligendi soluta!
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="dots"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export {TypingTest};