import "./App.css";
import Grid from "./Grid";
import Keypad from "./Keypad";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import { words, randomizer } from "./words";

const initialGrid = [...Array(30).fill(["", "neutral"])];

function App() {
  const [word, setWord] = useState(randomizer(words));
  const [grid, setGrid] = useState(initialGrid);
  const [currIndex, setCurrIndex] = useState(0);
  const [currRow, setCurrRow] = useState(5);
  const [submitButton, setSubmitButton] = useState(false);
  return (
    <div>
      <Grid grid={grid}></Grid>
      <Keypad
        currIndex={currIndex}
        setCurrIndex={setCurrIndex}
        grid={grid}
        setGrid={setGrid}
        submitButton={submitButton}
        setSubmitButton={setSubmitButton}
        currRow={currRow}
        setCurrRow={setCurrRow}
        word={word}
      ></Keypad>
      {currIndex === 30 ? <p className="word">{word}</p> : null}
    </div>
  );
}

export default App;
