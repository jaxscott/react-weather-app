import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div className="search-bar">
      <button id="pinpoint">
        <i className="fas fa-map-marker-alt" alt="Current Location"></i>
      </button>
      <form id="search-engine">
        <input
          type="search/text"
          id="city-search"
          name="city-search"
          autoComplete="off"
          autoFocus="on"
          placeholder="Enter a City..."
        />

        <button type="submit" value="search" id="search-button">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
