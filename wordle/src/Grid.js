const Grid = ({ grid }) => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td className={grid[0][1]}>{grid[0][0]}</td>
          <td className={grid[1][1]}>{grid[1][0]}</td>
          <td className={grid[2][1]}>{grid[2][0]}</td>
          <td className={grid[3][1]}>{grid[3][0]}</td>
          <td className={grid[4][1]}>{grid[4][0]}</td>
        </tr>
        <tr>
          <td className={grid[5][1]}>{grid[5][0]}</td>
          <td className={grid[6][1]}>{grid[6][0]}</td>
          <td className={grid[7][1]}>{grid[7][0]}</td>
          <td className={grid[8][1]}>{grid[8][0]}</td>
          <td className={grid[9][1]}>{grid[9][0]}</td>
        </tr>
        <tr>
          <td className={grid[10][1]}>{grid[10][0]}</td>
          <td className={grid[11][1]}>{grid[11][0]}</td>
          <td className={grid[12][1]}>{grid[12][0]}</td>
          <td className={grid[13][1]}>{grid[13][0]}</td>
          <td className={grid[14][1]}>{grid[14][0]}</td>
        </tr>
        <tr>
          <td className={grid[15][1]}>{grid[15][0]}</td>
          <td className={grid[16][1]}>{grid[16][0]}</td>
          <td className={grid[17][1]}>{grid[17][0]}</td>
          <td className={grid[18][1]}>{grid[18][0]}</td>
          <td className={grid[19][1]}>{grid[19][0]}</td>
        </tr>
        <tr>
          <td className={grid[20][1]}>{grid[20][0]}</td>
          <td className={grid[21][1]}>{grid[21][0]}</td>
          <td className={grid[22][1]}>{grid[22][0]}</td>
          <td className={grid[23][1]}>{grid[23][0]}</td>
          <td className={grid[24][1]}>{grid[24][0]}</td>
        </tr>
        <tr>
          <td className={grid[25][1]}>{grid[25][0]}</td>
          <td className={grid[26][1]}>{grid[26][0]}</td>
          <td className={grid[27][1]}>{grid[27][0]}</td>
          <td className={grid[28][1]}>{grid[28][0]}</td>
          <td className={grid[29][1]}>{grid[29][0]}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Grid;
