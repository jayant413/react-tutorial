import React from "react";
import SearchBox from "./ui/SearchBox";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  const { pathname } = useLocation();
  return (
    <div>
      <div className="space-x-[1em] ">
        <Link
          to="/"
          className={pathname == "/" && "border-b border-black pb-1"}
        >
          App page
        </Link>
        <Link
          to="home"
          className={pathname == "/home" && "border-b border-black pb-1"}
        >
          Home (useState , UseEffect)
        </Link>
        <Link
          to="about"
          className={pathname == "/about" && "border-b border-black pb-1"}
        >
          About (map)
        </Link>
      </div>
      {/* <SearchBox title={props.title} /> */}
    </div>
  );
};

export default Header;
