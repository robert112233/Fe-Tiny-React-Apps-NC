const Backspace = ({
  currIndex,
  setCurrIndex,
  grid,
  setGrid,
  setSubmitButton,
  currRow,
}) => {
  const removeLetter = () => {
    setGrid((grid) => {
      const gridCopy = grid.map((cell) => {
        return [cell[0], cell[1]];
      });
      if (currIndex > currRow - 5) {
        gridCopy[currIndex - 1][0] = "";
      }

      return gridCopy;
    });
    setCurrIndex((currIndex) => {
      return currIndex > currRow - 5 ? currIndex - 1 : currIndex;
    });
    console.log(currIndex);
  };

  return (
    <button
      className="button"
      onClick={() => {
        removeLetter();
      }}
    >
      <p>⬅</p>
    </button>
  );
};

export default Backspace;
