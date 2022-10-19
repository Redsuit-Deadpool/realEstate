import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HouseIcon from '@mui/icons-material/House';
import PeopleIcon from "@material-ui/icons/People";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link to="/admin/properties">
        <p>
          <HouseIcon /> Properties
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
     
    </div>
  );
};

export default Sidebar;