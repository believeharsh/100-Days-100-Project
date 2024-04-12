import React from "react";
import { useState } from "react";
import UseTask from "../Context/UseTask";
import { FaPlus } from "react-icons/fa";
const AddNewTask = () => {
  const { addTask } = UseTask();

  const [inputValue, setinputValue] = useState("");

  const handleChange = (e) => {
    setinputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputValue);
    setinputValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex mb-4">
        
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter task"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
          />
          <button type="submit" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2 py-1 mx-[1.5px]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <FaPlus/>
          </button>
         
        </div>
      </form>
    </>
  );
};

export default AddNewTask;
