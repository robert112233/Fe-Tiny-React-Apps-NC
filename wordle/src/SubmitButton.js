const handleSubmit = (
  currRow,
  setCurrRow,
  setSubmitButton,
  grid,
  setGrid,
  word,
  currIndex
) => {
  checker(grid, setGrid, word, currIndex);
  setCurrRow(currRow + 5);
  setSubmitButton(false);
};

const checker = (grid, setGrid, word, currIndex) => {
  const splitWord = word.split("");
  const changes = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const letter = grid[currIndex - 5 + i][0];
      if (letter === splitWord[i]) {
        changes.push({ letter, colour: "green" });
      } else if (letter === splitWord[j]) {
        changes.push({ letter, colour: "yellow" });
      }
    }
  }
  const updatedGrid = grid.map((cell, index) => {
    const cellUpdate = [cell[0], cell[1]];
    for (let i = 0; i < changes.length; i++) {
      if (
        cellUpdate[0] === changes[i].letter &&
        cellUpdate[1] !== "green" &&
        index >= currIndex - 5
      ) {
        cellUpdate[1] = changes[i].colour;
      }
    }
    return cellUpdate;
  });
  setGrid(updatedGrid);
};

const SubmitButton = ({
  currRow,
  setCurrRow,
  submitButton,
  setSubmitButton,
  grid,
  setGrid,
  word,
  currIndex,
}) => {
  return (
    <button
      className={submitButton ? "button" : "deactivatedButton"}
      onClick={() => {
        handleSubmit(
          currRow,
          setCurrRow,
          setSubmitButton,
          grid,
          setGrid,
          word,
          currIndex
        );
      }}
    >
      Enter
    </button>
  );
};

export default SubmitButton;
