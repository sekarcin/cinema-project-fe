import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [searchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <nav onSearch={handleSearch}>
      <h1>Cinema Cinepolis</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/crud"}>Booking Ticket</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
