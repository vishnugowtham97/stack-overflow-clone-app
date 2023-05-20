import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Forms from "../../components/Forms/Forms";

const Company = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <h1>Company</h1>
        <p>Learn about what it's like to work at companies</p>
        <Forms />
      </div>
    </div>
  );
};

export default Company;
