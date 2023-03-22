import { firstRow, secondRow, thirdRow } from "./keys";
import SubmitButton from "./SubmitButton";
import Backspace from "./Backspace";

const inputLetter = (
  currIndex,
  setCurrIndex,
  grid,
  setGrid,
  letter,
  setSubmitButton,
  currRow
) => {
  const gridCopy = grid.map((cell) => {
    return [cell[0], cell[1]];
  });
  if (currIndex < currRow) {
    gridCopy[currIndex][0] = letter;
    setGrid(gridCopy);
    setCurrIndex(currIndex + 1);
  }
  if (currIndex === currRow - 1) {
    setSubmitButton(true);
  }
};

const Keypad = ({
  currIndex,
  setCurrIndex,
  grid,
  setGrid,
  setSubmitButton,
  currRow,
  setCurrRow,
  submitButton,
  word,
}) => {
  return (
    <table className="keypad">
      <tbody>
        <tr className="firstRow">
          {firstRow.map((letter) => {
            return (
              <button
                className="button"
                onClick={(event) => {
                  inputLetter(
                    currIndex,
                    setCurrIndex,
                    grid,
                    setGrid,
                    letter,
                    setSubmitButton,
                    currRow
                  );
                }}
                value={letter}
              >
                {letter}
              </button>
            );
          })}
        </tr>
        <tr className="secondRow">
          {secondRow.map((letter) => {
            return (
              <button
                className="button"
                onClick={(event) => {
                  inputLetter(
                    currIndex,
                    setCurrIndex,
                    grid,
                    setGrid,
                    letter,
                    setSubmitButton,
                    currRow
                  );
                }}
                value={letter}
              >
                {letter}
              </button>
            );
          })}
        </tr>
        <tr className="thirdRow">
          {thirdRow.map((letter) => {
            return (
              <button
                className="button"
                onClick={(event) => {
                  inputLetter(
                    currIndex,
                    setCurrIndex,
                    grid,
                    setGrid,
                    letter,
                    setSubmitButton,
                    currRow
                  );
                }}
                value={letter}
              >
                {letter}
              </button>
            );
          })}

          <SubmitButton
            currRow={currRow}
            setCurrRow={setCurrRow}
            submitButton={submitButton}
            setSubmitButton={setSubmitButton}
            grid={grid}
            setGrid={setGrid}
            word={word}
            currIndex={currIndex}
          ></SubmitButton>
          <Backspace
            currIndex={currIndex}
            setCurrIndex={setCurrIndex}
            grid={grid}
            setGrid={setGrid}
            setSubmitButton={setSubmitButton}
            currRow={currRow}
          ></Backspace>
        </tr>
      </tbody>
    </table>
  );
};

export default Keypad;
