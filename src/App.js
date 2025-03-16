import Box from "./components/Box";
import "./App.css";
import { useState, useEffect } from "react";
import Choice from "./components/Choice";

function App() {
  const [myPick, setMyPick] = useState("");
  const [computerPick, setComputerPick] = useState("");
  const [drawResult, setDrawResult] = useState("");

  let result = "DRAW";
  let comResult = "DRAW";

  switch (true) {
    case myPick === computerPick:
      result = "DRAW";
      comResult = "DRAW";
      break;
    case (myPick === "rock" && computerPick === "scissors") ||
      (myPick === "scissors" && computerPick === "paper") ||
      (myPick === "paper" && computerPick === "rock"):
      result = "WINNER";
      comResult = "LOSER";
      break;
    default:
      result = "LOSER";
      comResult = "WINNER";
  }

  useEffect(() => {
    if (result === "DRAW") {
      setDrawResult("TIE");
    } else if (result === "LOSER") {
      setDrawResult("LOSE");
    } else {
      setDrawResult("WIN");
    }
  }, [result]);

  return (
    <div>
      <section className="main">
        <Box name="You" result={result} pick={myPick} />
        <Box name="Computer" result={comResult} pick={computerPick} />
      </section>
      <section className="main">
        <Choice
          setComputerPick={setComputerPick}
          setMyPick={setMyPick}
          drawResult={drawResult}
        />
      </section>
    </div>
  );
}

export default App;
