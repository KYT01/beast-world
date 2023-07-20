import React from "react";
import "./Header.css";

export default function Header({handleBeasts}) {
  return (
    <header>
      <h1>BEAST WORLD</h1>
      <form className="form-container">
        <label className="horns-label" htmlFor="hornsInput">
          Filter beast by horns
        </label>
        <select id="inputHorns" name="selectHorns" onChange={handleBeasts}>
          <option value="all">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </select>
      </form>
    </header>
  );
  }