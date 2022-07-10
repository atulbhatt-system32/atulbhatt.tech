import React from "react";
const Search = () => {
  return (
    <div className="m-5 ">
      <div className="flex flex-col p-5 gap-2">
        <div className="text-14px font-bold">Search Blog</div>
        <input
          className="py-3 px-4 rounded-md border"
          type="search"
          placeholder="Type Here"
        ></input>
      </div>
    </div>
  );
};

export default Search;
