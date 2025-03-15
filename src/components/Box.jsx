import "./Box.css";

const Box = ({ name, result }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{result}</h4>
    </div>
  );
};

export default Box;
