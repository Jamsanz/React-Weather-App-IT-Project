import React, { useState } from "react";

export default function SearchBar({ submitSearch }) {
  const [location, setLocation] = useState("");

  const inputHandler = (event) => {
    let the_value = event.target.value;
    setLocation(the_value);
  };

  const submitHandler = (e) => {
    if (!location || location === "") return;

    submitSearch(location);
    setLocation("");
    e.preventDefault();
  };

  return (
    <header className="searchbar">
      <div>
        <input
          type="text"
          placeholder="Enter city name..."
          onChange={inputHandler}
          value={location}
        />
        
        <button onClick={submitHandler}>Search</button>
        {/* <button onClick={()=>{
          submitHandler();
          // setting();
        }}>Search</button> */}
      </div>
    </header>
  );
}
