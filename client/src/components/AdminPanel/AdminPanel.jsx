import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./AdminPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faUser,
  faCartShopping,
  faClapperboard,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

const AdminPanel = () => {

    return (
        <nav id="menu">
        <ul>
      <li><FontAwesomeIcon className="adminIcon" icon={faScrewdriverWrench} />
        <ul>
          <NavLink to="/form" className="navlink1">
          <li>Add Movie</li>
          </NavLink>
          <NavLink to="/modify" className="navlink">
          <li>Modify Movie</li>
          </NavLink>
          <NavLink to="/userlist" className="navlink">
          <li>Manage Users</li>
          </NavLink>
          <NavLink to="/movielist" className="navlink">
          <li>Movies Report</li>
            </NavLink>
            <NavLink to="/orders" className="navlink5">
          <li>Purchase Report</li>
          </NavLink>
        </ul>
      </li>

      </ul>
    </nav>
  );
};

export default AdminPanel;
