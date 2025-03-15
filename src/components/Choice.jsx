import { useState } from "react";

const Choice = ({ setComputerPick, setMyPick, result }) => {
  const [drawResult, setDrawResult] = useState("");

  const changeResult = () => {
    if (result === "DRAW") {
      setDrawResult("TIE");
    } else if (result === "LOSER") {
      setDrawResult("LOSE");
    } else {
      setDrawResult("WIN");
    }
  };

  const getRandomPick = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const onClick = (pick) => {
    setMyPick(pick);
    setComputerPick(getRandomPick());
    changeResult();
  };

  return (
    <div>
      <button onClick={() => onClick("scissors")}>가위</button>
      <button onClick={() => onClick("rock")}>바위</button>
      <button onClick={() => onClick("paper")}>보</button>
      <h4>{drawResult}</h4>
    </div>
  );
};

export default Choice;
