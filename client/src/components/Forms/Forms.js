import React from "react";
import "./Forms.css";

const Forms = () => {
  return (
    <div className="form-container-1">
      <form className="form-container-2">
        <input type="text" placeholder="Search All Companies" />
        <input type="text" placeholder="Search Company by location" />
        <button>Search</button>
      </form>
      <hr />
      <p>Companies Rendering List from search</p>
    </div>
  );
};

export default Forms;
