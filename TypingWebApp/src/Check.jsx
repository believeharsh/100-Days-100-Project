import React, { useEffect, useState } from "react";

import {randomWords} from "random-words";

const para = ["harsh", "Dahiya", "Sharda" , "Asyab "]



const [words, setwords] = useState(
  randomWords({ exactly: 5, wordsPerString: 2 })
);

const Check = () => {
  return (
    <div>
      <div className="bg-blue-400">
        {words.map((word, index) => {
          <div className="" key={index}>
            {word}
          </div>;
        })}
      </div>
    </div>
  );
};

export default Check;
