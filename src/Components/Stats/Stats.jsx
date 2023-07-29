import React from "react";
import CountUp from "react-countup";
import "./Stats.css";

export default function Stats() {
  return (
    <div className="flexCenter stats">
      <div className="flexColCenter stat">
        <span>4 years</span>
        <span className="secondary-text">Experience</span>
      </div>
      <div className="flexColCenter stat">
        <span>
          <CountUp start={800} end={1000} duration={4} />
          <span>+</span>
        </span>
        <span className="secondary-text">Experience</span>
      </div>
      <div className="flexColCenter stat">
        <span>
          <CountUp start={800} end={1000} duration={4} />
          <span>+</span>
        </span>
        <span className="secondary-text">Plot sold</span>
      </div>
      <div className="flexColCenter stat">
        <span>
          <CountUp start={800} end={1000} duration={4} />
          <span>+</span>
        </span>
        <span className="secondary-text">Unit sold</span>
      </div>
    </div>
  );
}
