import React from "react";
import { Link } from "react-router-dom";
import Search from "../search";
import Button from "../button";

const Header = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <img src="/src/assets/logo.png" alt="" width={80} />
        </Link>
      </div>

      <Search />

      <Button />
    </div>
  );
};

export default Header;
