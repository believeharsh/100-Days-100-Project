import React from "react";
import { useState } from "react";
import Header from "./Components/Header/Header";
import MainApp from "./Components/MainApp/MainApp";

const Words = "Harsh hello what are you doing today? ".split(" ");

const App = () => {
  const [Input, setInput] = useState(Words);

  return (
    <>
      <div className="MainContainer ">
         <div className="">
          <Header/>
          <MainApp/>
         </div>
      </div>
    </>
  );
};

export default App;
