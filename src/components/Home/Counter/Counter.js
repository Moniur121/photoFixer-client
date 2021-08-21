import React from "react";
// import { CountUp } from 'use-count-up'
import CountUp from "react-countup";
function Counter() {
  return (
    <section className="CountingExplore mb-5">
      <div className="container py-4">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col text-center">
            <h1 className="common-color text-bold">
              <CountUp isCounting end={3000} duration={10} />+
            </h1>
            <h5 className="common-titleColor text-bold">Completed Projects</h5>
          </div>
          <div className="col text-center">
            <h1 className="common-color text-bold">
              <CountUp isCounting end={2500} duration={10} />+
            </h1>
            <h5 className="common-titleColor text-bold">Happy Clients</h5>
          </div>
          <div className="col text-center">
            <h1 className="common-color text-bold">
              <CountUp isCounting end={1500} duration={10} />+
            </h1>
            <h5 className="common-titleColor text-bold">Questions Answered</h5>
          </div>
          <div className="col text-center">
            <h1 className="common-color text-bold">
              <CountUp isCounting end={1000} duration={10} />+
            </h1>
            <h5 className="common-titleColor text-bold">Ordered PhotoGraphy</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
