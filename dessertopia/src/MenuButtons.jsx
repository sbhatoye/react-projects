import React from "react";
import Data from "./Data";

const MenuButtons = ({ menuCategories, filterMenu, setMenu }) => {
  return (
    <React.Fragment>
      <div className="row d-flex justify-content-center">
        {/* for entire menu */}
        <button
          className="btn btn-danger mx-3 px-auto py-2 my-5 col-md-2"
          id="menu-all-button"
          onClick={() => setMenu(Data)}
        >
          All
        </button>
        {/* for each individual category */}
        {menuCategories.map((category) => (
          <button
            className="btn btn-danger mx-3 px-auto py-2 my-5 col-md-2"
            id="menu-cat-button"
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </React.Fragment>
  );
};

export default MenuButtons;
