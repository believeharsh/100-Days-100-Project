import React, { useState } from "react";
import "./index.css";

function App() {
  const [Weight, setWeight] = useState(0);
  const [Height, setHeight] = useState(0);
  const [BMI, setBMI] = useState("");
  const [Message, setMessage] = useState("");
  const [Alert, setAlert] = useState("");



  const ToggleAlert = () => {
    setAlert(!Alert)
  }

  let calcBMI = (event) => {
    event.preventDefault();
    let UserWeight = Weight;
    let UserHeight = Height * 0.3048;

    if (UserWeight === 0 || UserHeight === 0) {
   
      setAlert(!Alert)
    } else {
      let BMI = UserWeight / (UserHeight * UserHeight);
      setBMI(BMI.toFixed(1));

      // Logic for Message

      if (BMI < 25) {
        setMessage("You are underWeight");
      } else if (BMI >= 25 && BMI < 30) {
        setMessage("You are a healthy Weight");
      } else {
        setMessage("You are overWeight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <>
       <div
          className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative  ${Alert ? "visible" : "hidden"}`}
          role="alert"
        >
          <strong className="font-bold">OverExcited Buddy! </strong>
          <span className="block sm:inline"> Phle Height or Weight to dalo</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg onClick={ToggleAlert}
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      <div className="w-full max-w-xs mx-auto mt-8">
     

        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={calcBMI}
        >
          <div className="text-white text-xl bg-gray-800 rounded-xl px-4 py-1 mb-1">
            <h3 className="text-center">Check Your BMI Status </h3>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Your Weight in Kg
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="58.8 kg"
              value={Weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor=""
            >
              Your Height in foot
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="5.8 feet"
              value={Height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="Submit"
            >
              Check Now
            </button>
            <button
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              onClick={reload}
              type="Submit"
            >
              Reload
            </button>
          </div>
          <div className=" bg-slate-800 rounded-xl px-3 py-2 mt-7 text-white ring-2 ring-green-700">
            <h3 className="text-center">Your BMI is : {BMI}</h3>
            <p className="text-center">{Message}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
