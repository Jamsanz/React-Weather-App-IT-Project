import React, { useState } from "react";
import PropTypes from "prop-types";


export default function Searchpage({ submitSearch }) {
  const [location, setLocation] = useState("");

  const inputHandler = (event) => {
    let the_value = event.target.value
    setLocation(the_value);
  };

  const submitHandler = (e) => {
    if (!location || location === "") return;

    submitSearch(location);
    setLocation('');
    e.preventDefault();
  };

  return (
    <div className="search-page">
      <form>
        <input
          id="city_name"
          type="text"
          placeholder="Enter city name..."
          onChange={inputHandler}
          value={location}
        />
        <button onClick={submitHandler}>Search</button>
      </form>
    </div>
  );
}

Searchpage.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};
