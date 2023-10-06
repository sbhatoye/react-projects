import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Data from "./Data";
import { useState } from "react";
import React from "react";
import MenuCard from "./MenuCard";
import MenuButtons from "./MenuButtons";

const App = () => {
  // store all data in menu and use useState Hook to manipulate it
  const [menu, setMenu] = useState(Data);

  // store unique categories from menu
  const menuCategories = [...new Set(Data.map((item) => item.category))];

  // function to filter menu from categories
  const filterMenu = (menuCategory) => {
    const newMenu = Data.filter((newItem) => newItem.category === menuCategory);
    setMenu(newMenu);
  };

  return (
    <React.Fragment>
      {/* jumbotron */}
      <div
        className="jumbotron jumbotron-fluid py-5"
        style={{
          backgroundImage: "url(/images/background.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-white text-center bg-danger pb-1">
          <h1 className="display-3">Dessertopia</h1>
          <p className="fst-italic">~ It's a taste of paradise ~</p>
        </div>
      </div>

      {/* Menu Buttons */}
      <div className="row bg-danger-subtle">
        <MenuButtons
          menuCategories={menuCategories}
          filterMenu={filterMenu}
          setMenu={setMenu}
        />
      </div>

      {/* Menu cards */}
      <div className="bg-dark">
        <MenuCard menu={menu} />
      </div>

      {/* Footer */}
      <footer className="bg-danger d-flex justify-content-between text-white">
        <p className="fs-5 mx-3 my-3">Order online or visit us in store!</p>
        <p className="fs-5 mx-3 my-3">
          Call us at <span className="fw-bold">1-800-235-9655</span>
        </p>
      </footer>
    </React.Fragment>
  );
};

export default App;
