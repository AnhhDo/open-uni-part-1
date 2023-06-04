import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ name, value }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistic = ({ good, neutral, bad }) => {
  const total = bad + good + neutral;
  const average = (good - bad) / total;
  const postitive = (good * 100) / total + "%";
  return (
    <div>
      <StatisticLine name="good" value={good}></StatisticLine>
      <StatisticLine name="neutral" value={neutral}></StatisticLine>
      <StatisticLine name="bad" value={bad}></StatisticLine>
      <StatisticLine name="total" value={total}></StatisticLine>
      <StatisticLine name="average" value={average}></StatisticLine>
      <StatisticLine name="positive" value={postitive}></StatisticLine>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [choice, setChoice] = useState("");

  const chooseGood = () => setChoice("good");
  const chooseNeutral = () => setChoice("neutral");
  const chooseBad = () => setChoice("bad");

  const submitFunction = () => {
    if (choice === "good") {
      setGood(good + 1);
    } else if (choice === "neutral") {
      setNeutral(neutral + 1);
    } else if (choice === "bad") {
      setBad(bad + 1);
    }
    setIsShown(true);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={chooseGood} text="good"></Button>
      <Button handleClick={chooseNeutral} text="neutral"></Button>
      <Button handleClick={chooseBad} text="bad"></Button>
      <h1>your choice: {choice}</h1>
      <Button handleClick={submitFunction} text="submit"></Button>
      <h1>statistic</h1>
      {isShown && (
        <Statistic good={good} neutral={neutral} bad={bad}></Statistic>
      )}
    </div>
  );
};

export default App;
