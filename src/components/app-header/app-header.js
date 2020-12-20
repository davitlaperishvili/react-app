import React from "react";

import "./app-header.css";

const AppHeader = ({ allPosts, liked }) => {
  return (
    <div className="app-header d-flex">
      <h1>Davit Laperishvili</h1>
      <h2>
        Total: {allPosts}, Favorite: {liked}
      </h2>
    </div>
  );
};

export default AppHeader;
