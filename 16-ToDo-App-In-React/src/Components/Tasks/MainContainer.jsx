import React from "react";
import Tasklist from "./Tasklist";
import AddNewTask from "./AddTask";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const MainContainer = () => {
  return (
    <>
      <div className="MainContainerBg fixed left-0 right-0 bottom-0 top-0 overflow-auto">
         <Navbar/>
        <div className="max-w-md mx-auto p-4">
          <div className="bg-slate-900 border-1 rounded-xl px-2 py-2 ">
            <Header />
            <AddNewTask />
            <Tasklist />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
