import React from "react";
import { StyledHeader } from "./style";
import logo from "../../assets/logo.svg";
import SearchForm from "../SearchForm";

const Header = ({ setSearch }) => {
  return (
    <StyledHeader>
      <div>
        <img
          src={logo}
          alt="Logo Hamburgueria Kenzie"
          onClick={() => setSearch("")}
        />

        <SearchForm setSearch={setSearch} />
      </div>
    </StyledHeader>
  );
};

export default Header;
