import React from "react";
import UseTask from "../Context/UseTask";
import { useState, useRef } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Tasklist = () => {
  const { Tasks, setTasks, EditTask, deleteTask } = UseTask();
  const [EditTaskId, setEditTaskId] = useState(null);
  const [EditedTaskText, setEditedTaskText] = useState("");
  const inputRef = useRef(null);

  const handleEditInputChange = (e) => {
    setEditedTaskText(e.target.value);
  };

  const handleEditSubmit = (taskid) => {
    if (EditedTaskText !== "") {
      EditTask(taskid, EditedTaskText);
      setEditTaskId(null);
      setEditedTaskText("");
    }
    else{
      alert("Task can't be empty")
    }
  };

  const handleKeyPress = (e, taskid) => {
    if (e.key == "Enter") {
      handleEditSubmit(taskid);
    }
  };

  return (
    <>
      <div className="">
        <ul>
          {Tasks.map((task) => {
            const isEditing = task.id === EditTaskId;
            return (
              <li
                key={task.id}
                className={` border border-b-[1px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-3  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1${
                  task.completed ? "bg-gray-200" : ""
                }`}
              >
                <div className="flex justify-between">
                  {isEditing ? (
                    <div className="flex w-full">
                      <input
                        type="text"
                        value={EditedTaskText}
                        onChange={handleEditInputChange}
                        ref={inputRef}
                        onKeyDown={(event) => handleKeyPress(event, task.id)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                      />
                      <button
                        className="text-green-500 hover:text-green-600 mx-2"
                        onClick={() => handleEditSubmit(task.id)}
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <span
                      className={`cursor-pointer ${
                        task.completed ? "line-through text-gray-500" : ""
                      }`}
                      onClick={() => toggleTaskCompletion(task.id)}
                    >
                      {task.text}
                    </span>
                  )}

                  <div className="">
                    {!isEditing && (
                      <>
                        <button
                          className="text-blue-500 hover:text-blue-600 mr-2"
                          onClick={() => setEditTaskId(task.id)}
                        >
                          <div className="">
                            <CiEdit />
                          </div>
                        </button>
                        <button
                          className="text-red-500 hover:text-red-600"
                          onClick={() => deleteTask(task.id)}
                        >
                          <div className="">
                            <MdDeleteOutline />
                          </div>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Tasklist;
