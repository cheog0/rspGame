import "./Choice.css";

const Choice = ({ setComputerPick, setMyPick, drawResult }) => {
  const getRandomPick = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const onClick = (pick) => {
    setMyPick(pick);
    setComputerPick(getRandomPick());
  };

  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmdqhES9AEhEouS4qL5-hi0HMeHCTA3a6LA&s"
        alt="scissors"
        onClick={() => onClick("scissors")}
        className="choice-btn"
      />
      <img
        src="https://cdn.crowdpic.net/detail-thumb/thumb_d_223F6832C9A805EB5F3A39CF1CFF5501.png"
        alt="rock"
        onClick={() => onClick("rock")}
        className="choice-btn"
      />
      <img
        src="https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
        alt="paper"
        onClick={() => onClick("paper")}
        className="choice-btn"
      />
      <h4>{drawResult}</h4>
    </div>
  );
};

export default Choice;
