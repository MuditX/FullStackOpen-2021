import React, { useState } from "react";

const StatsticLine = ({ text, value }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{text}:</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Statstics = ({ good, bad, neutral, positive, average, all }) => {
  return (
    <>
      <StatsticLine text="good" value={good} />
      <StatsticLine text="bad" value={bad} />
      <StatsticLine text="neutral" value={neutral} />
      <StatsticLine text="all" value={all} />
      <StatsticLine text="positive" value={positive} />
      <StatsticLine text="average" value={average} />
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + bad + neutral;
  let average = (good - bad) / all;
  let positive = 100 * (good / all) + "%";

  const handleClick = (type) => {
    switch (type) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <h1>Give FeedBack</h1>
      <button onClick={() => handleClick("good")}>Good</button>
      <button onClick={() => handleClick("bad")}>Bad</button>
      <button onClick={() => handleClick("neutral")}>Neutral</button>
      <h1>Stats</h1>
      {all ? (
        <Statstics
          good={good}
          bad={bad}
          neutral={neutral}
          all={all}
          positive={positive}
          average={average}
        />
      ) : (
        "No feedback Given"
      )}
    </div>
  );
};

export default App;
