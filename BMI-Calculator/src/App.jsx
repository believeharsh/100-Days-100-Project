import React, { useState } from "react";

function App() {
  const [Weight, setWeight] = useState(0);
  const [Height, setHeight] = useState(0);
  const [BMI, setBMI] = useState("");
  const [Message, setMessage] = useState("");

  let calcBMI = (event) => {
    event.preventDefault();
    let UserWeight = Weight;
    let UserHeight = Height * 0.3048;

    if (UserWeight === 0 || UserHeight === 0) {
      alert("Please enter a valid Weight and Height");
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
              for="username"
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
              for=""
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
          <div className=" bg-slate-800 rounded-xl px-3 py-2 mt-7 text-white">
            <h3 className="text-center" >Your BMI is : {BMI}</h3>
            <p className="text-center"  >{Message}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
