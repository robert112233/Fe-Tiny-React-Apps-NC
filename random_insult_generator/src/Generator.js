import { useState } from "react";
import {
  randomizer,
  prefix,
  adjective1,
  adjective2,
  noun,
  shakeAdjective1,
  shakeAdjective2,
  shakeNoun,
  shakePrefix,
} from "./words";

const Generator = () => {
  const [currPrefix, setCurrPrefix] = useState("");
  const [firstAdjective, setFirstAdjective] = useState("");
  const [secondAdjective, setSecondAdjective] = useState("");
  const [currNoun, setCurrNoun] = useState("");
  const [toBe, setToBe] = useState(false);
  const [selectionArr, setSelectionArr] = useState([
    prefix,
    adjective1,
    adjective2,
    noun,
  ]);

  const changeAll = () => {
    setCurrPrefix(randomizer(selectionArr[0]));
    setFirstAdjective(randomizer(selectionArr[1]));
    setSecondAdjective(randomizer(selectionArr[2]));
    setCurrNoun(randomizer(selectionArr[3]));
  };

  const toBeOr = () => {
    setToBe(!toBe);
    if (!toBe) {
      setSelectionArr([
        shakePrefix,
        shakeAdjective1,
        shakeAdjective2,
        shakeNoun,
      ]);
    } else setSelectionArr([prefix, adjective1, adjective2, noun]);
  };
  return (
    <div>
      <buttons className="buttons">
        <button onClick={() => changeAll()}>
          Generate an entirely new insult!
        </button>
        <button onClick={() => setCurrPrefix(randomizer(prefix))}>
          Change the prefix
        </button>
        <button onClick={() => setFirstAdjective(randomizer(adjective1))}>
          Change the first adjective
        </button>
        <button onClick={() => setSecondAdjective(randomizer(adjective2))}>
          Change the second adjective
        </button>
        <button onClick={() => setCurrNoun(randomizer(noun))}>
          Change the noun
        </button>
        <button onClick={() => toBeOr()}>
          Shakespeare {toBe ? "On" : "Off"}
        </button>
      </buttons>

      <p className="insult">
        {currPrefix} {firstAdjective} {secondAdjective} {currNoun}
      </p>
    </div>
  );
};

export default Generator;
