import { useState } from "react";

const Button = ({ handleChange, label }) => {
  return <button onClick={handleChange}>{label}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const voteArray = new Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(voteArray);
  const [mostVoted, setMostVoted] = useState(0);

  const chooseAnecdotes = () => {
    const choosen = Math.floor(Math.random() * (anecdotes.length - 1));
    return choosen;
  };

  const updateVotes = (index) => {
    const copy = [...votes];
    copy[index] += 1;
    setVotes(copy);
    // votes.map((vote) => copy);
    const most = Math.max(...copy);
    return most;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button
        handleChange={() => {
          setMostVoted(updateVotes(selected));
        }}
        label="vote"
      ></Button>
      <Button
        handleChange={() => {
          setSelected(chooseAnecdotes);
        }}
        label="next anecdote"
      ></Button>
      {console.log(votes)}
      {console.log(mostVoted)}
      {console.log(votes.indexOf(mostVoted))}
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[votes.indexOf(mostVoted)]}</p>
      <p>has {mostVoted} votes</p>
    </div>
  );
};

export default App;
