import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <hr />
      <div className="container">
        <div className="row">
          <div className="column1">
            <h4>
              About <i className="fa fa-users" aria-hidden="true"></i>{" "}
            </h4>
            <p className="pAbout">
              Cinéma á la Carte is part of a group project, carried out jointly
              by 8 coworkers, as the final stage to become Full Stack Web
              Developers of the bootcamp: "Soy Henry"
            </p>
          </div>

          <div className="contactUs">
            <h3>Contact us! </h3>
            <NavLink className="aboutUs" to="/aboutUs">
              <i className="fa fa-envelope-o fa-3x" aria-hidden="true"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
