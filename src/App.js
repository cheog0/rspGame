import Box from "./components/Box";
import "./App.css";
import { useState } from "react";
import Choice from "./components/Choice";

function App() {
  const [myPick, setMyPick] = useState("");
  const [computerPick, setComputerPick] = useState("");

  let result = "DRAW";
  let comResult = "DRAW";

  if (myPick && computerPick) {
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
  }

  return (
    <div>
      <Box name="You" result={result} />
      <Box name="Computer" result={comResult} />
      <Choice
        setComputerPick={setComputerPick}
        setMyPick={setMyPick}
        result={result}
      />
      <p>Computer Pick: {computerPick}</p> {/* ✅ 컴퓨터가 선택한 값 표시 */}
    </div>
  );
}

export default App;
