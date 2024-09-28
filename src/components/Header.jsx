import React from "react";
import SearchBox from "./ui/SearchBox";

const Header = (props) => {
  return (
    <div>
      <span> Header</span>
      <SearchBox title={props.title} />
    </div>
  );
};

export default Header;
