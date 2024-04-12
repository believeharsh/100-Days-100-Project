import React from "react";

const Header = () => {
    const InitalDate = new Date();
    let CurrentDate = {
      date: InitalDate.getDate(),
      month: InitalDate.getMonth() + 1,
      year: InitalDate.getFullYear(),
    };
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-serif mb-4 text-white">To-Do List</h1>
        <h3 className="text-white font-serif">{`${CurrentDate.date}-${CurrentDate.month}-${CurrentDate.year}`}</h3>
      </div>
    </>
  );
};

export default Header;
