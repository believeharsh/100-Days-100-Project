import React, {useState, useRef } from "react";

const MainApp = () => {
  const [Words, setWords] = useState([
    "Once ",
    "upon",
    "a",
    "time",
    "in",
    "a",
    "charming",
    "village,",
    "there",
    "lived",
    "a",
    "curious",
    "little",
    "cat",
    "named",
    "Whiskers.",
    "Whiskers",
    "had",
    "a",
    "knack",
    "for",
    "finding",
    "adventure",
    "in",
    "the",
    "most",
    "ordinary",
    "places.",
    "One",
    "day,",
    "while",
    "exploring",
    "the",
    "enchanted",
    "forest,",
    "Whiskers",
    "discovered",
    "a",
    "mysterious",
    "portal.",
    "Without",
    "hesitation,",
    "Whiskers",
    "stepped",
    "through",
    "and",
    "found",
    "a",
    "world",
    "filled",
    "with",
    "magic",
    "and",
    "wonder.",
    "The",
    "inhabitants",
    "welcomed",
    "Whiskers",
    "as",
    "their",
    "brave",
    "new",
    "friend.",
    "Together,",
    "they",
    "embarked",
    "on",
    "countless",
    "adventures,",
    "making",
    "memories",
    "that",
    "would",
    "last",
    "a",
    "lifetime.",
    "And",
    "so,",
    "Whiskers'",
    "tale",
    "of",
    "friendship",
    "and",
    "magic",
    "spread",
    "far",
    "and",
    "wide,",
    "inspiring",
    "all",
    "who",
    "heard",
    "it.".split(" "),
  ]);
  const [UserInput, setUserInput] = useState(" ");
  const Seconds = 60;
  const [CoundDown, setCountDown] = useState(Seconds);
  const [Status, setStatus] = useState("loading..");

  const [currWordIndex, setCurrWordIndex] = useState(0);
  const [isWordCorrect, setIsWordCorrect] = useState(true);
  const [Correct, setCorrect] = useState(0);
  const [InCorrect, setInCorrect] = useState(0);
  const InputRef = useRef(null);

  function ProcessInput(value) {
    const currentWord = Words[currWordIndex];
    if (value.endsWith(" ")) {
      setCurrWordIndex((index) => index + 1);
      setUserInput("");
      setIsWordCorrect(true);
      handleCorrectIncorrectCount(true); // Increment correct count
    } else {
      setUserInput(value);
      setIsWordCorrect(value.trim() === currentWord);
      if (!isWordCorrect) {
        handleCorrectIncorrectCount(false); // Increment incorrect count
      }
    }
  }
  const handleCorrectIncorrectCount = (isCorrect) => {
    if (isCorrect) {
      setCorrect((prevCorrect) => prevCorrect + 1);
    } else {
      setInCorrect((prevIncorrect) => prevIncorrect + 1);
    }
  };

  function Start() {
    InputRef.current.focus();
    if (Status === "finished") {
      setWords(Words);
      setCurrWordIndex(0);
      setCorrect(0);
      setInCorrect(0);
  
    }

    if (Status !== "started") {
      setStatus("started");
      let Interval = setInterval(() => {
        setCountDown((PrevCount) => {
          if (PrevCount === 0) {
            clearInterval(Interval);
            setStatus("finished");
            setUserInput("");
            return Seconds;
          } else {
            return PrevCount - 1;
          }
        });
      }, 1000);
    }
  }

  return (
    <>
      <div className="mt-3 my-3 outline-none border-gray-600 border-[0.4px] text-xl rounded-sm mx-2 flex justify-between">
        <input
          type="text"
          className="w-full px-1 mx-2 outline-none h-[20px]"
          value={UserInput}
          ref={InputRef}
          onChange={(e) => {
            ProcessInput(e.target.value);
          }}
        />
      </div>
      <div className=" flex justify-between items-center">
        <button onClick={Start}>Start Typing </button>
        <div className="h-[40px] w-[40px] rounded-full bg-black border-orange-600 flex justify-center items-center">
          <p className=" text-white text-xl">{CoundDown}</p>
        </div>
      </div>

      {Status === "started" && (
        <div className="bg-blue-500 text-white border-1 border-black border-[1px] px-5 py-3 text-xl">
          <div className="">
            {Words.map((word, index) => {
              if (index === currWordIndex) {
                return (
                  <b
                    className={` ${
                      isWordCorrect ? "bg-black text-white" : "bg-red-600"
                    }`}
                    key={index}
                  >
                    {word}{" "}
                  </b>
                );
              }
              return <span key={index}>{word} </span>;
            })}
          </div>
        </div>
      )}
      {Status === "finished" && (
        <div className="">
          <div className="">
            <div className="">
              <p className="">Words per minute:</p>
              <p className="text-black">{Correct}</p>
            </div>
            <div className="">
              <div className="">Accuracy:</div>
              {Correct !== 0 ? 
                <div className="">
                  {Math.round((Correct / (Correct + InCorrect)) * 100)}%
                </div>
               : 
                <div className="">0%</div>
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainApp;
