import "./AboutUs.css";
import Agostina from "../../../assets/Agostina.jpg";
import Agustin from "../../../assets/Agustin.jpg";
import Maria from "../../../assets/Maria.jpg";
import Alejandro from "../../../assets/Alejandro.jpg";
import Fernando from "../../../assets/Fernando.jpg";
import Alex from "../../../assets/Alex.jpg";
import Antonio from "../../../assets/Antonio.jpg";
import Constanza from "../../../assets/constanza.jpg";

import React from "react";

import NavBar from "../../NavBar/NavBar";

const AboutUs = () => {
  return (
    <div className="aboutContainer" >
      <NavBar/>
      <div className="titleAbout">
        <h1>Meet our work team</h1>
        <hr />
      </div>

      <div className="members">

      <div className="profile-body">
        <div className="photo">
          <img src={Fernando} alt="Fernando" className="image--cover" />
        </div>

        <div className="profile">
          <h1 class="username">Fernando A. Vale</h1>
          <br />
          <h4 class="locationname">
            <i class="fa fa-map-marker" aria-hidden="true"></i> Santa Fe,
            Argentina{" "}
          </h4>
          <hr />
          <br />
          <div className="socialmedia">
            <a
              href="https://www.linkedin.com/in/fernando27v"
              target="_blank"
              rel="noreferrer"
              class="button-LinkedIn"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/fernando27v"
              target="_blank"
              rel="noreferrer"
              class="button-GitHub"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="profile-body">
        <div className="photo">
          <img src={Maria} alt="Maria" className="image--cover" />
        </div>

        <div className="profile">
           <h1 className="username">María del Carmen Rodriguez</h1>
          <br />
          <h4 className="locationname">
            <i className="fa fa-map-marker" aria-hidden="true"></i> Colombia{" "}
          </h4>
          <hr />
          <br />
          <div className="socialmedia">
            <a
              href="https://www.linkedin.com/in/rmariacarmen/"
              target="_blank"
              rel="noreferrer"
              class="button-LinkedIn"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/Phili23"
              target="_blank"
              rel="noreferrer"
              class="button-GitHub"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="profile-body">
        <div className="photo">
          <img src={Alejandro} alt="Alejandro" className="image--cover" />
        </div>

        <div className="profile">
          <h1 className="username">Alejandro Heredia</h1>
          <br />
          <h4 className="locationname">
            <i className="fa fa-map-marker" aria-hidden="true"></i> Córdoba, Argentina{" "}
          </h4>
          <hr />
          <br />
          <div className="socialmedia">
            <a
              href="https://www.linkedin.com/in/ale-heredia/"
              target="_blank"
              rel="noreferrer"
              className="button-LinkedIn"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/a73heredia"
              target="_blank"
              rel="noreferrer"
              className="button-GitHub"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="profile-body">
        <div className="photo">
          <img src={Agostina} alt="Agostina" className="image--cover" />
        </div>

        <div className="profile">
          <h1 class="username">Agostina A. Gavilán </h1>
          <br />
          <h4 class="locationname">
            <i class="fa fa-map-marker" aria-hidden="true"></i> Formosa, Argentina{" "}
          </h4>
          <hr />
          <br />
          <div className="socialmedia">
            <a
              href="https://www.linkedin.com/in/agostina-gavilan-283a03209/"
              target="_blank"
              rel="noreferrer"
              class="button-LinkedIn"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/AgosGavilan"
              target="_blank"
              rel="noreferrer"
              class="button-GitHub"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="profile-body">
        <div className="photo">
          <img src={Agustin} alt="Agustin" className="image--cover" />
        </div>

        <div className="profile">
          <h1 class="username">Agustín M. Bravo</h1>
          <br />
          <h4 class="locationname">
            <i class="fa fa-map-marker" aria-hidden="true"></i> CABA, Argentina{" "}
          </h4>
          <hr />
          <br />
          <div className="socialmedia">
            <a
              href="https://www.linkedin.com/in/ambravo-developer/"
              target="_blank"
              rel="noreferrer"
              class="button-LinkedIn"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/MadMex23"
              target="_blank"
              rel="noreferrer"
              class="button-GitHub"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="profile-body">
        <div className="photo">
          <img src={Constanza} alt="Constanza" className="image--cover" />
        </div>

        <div className="profile">
          <h1 class="username">Constanza A. Marañon</h1>
          <br />
          <h4 class="locationname">
            <i class="fa fa-map-marker" aria-hidden="true"></i> Entre Ríos, Argentina{" "}
          </h4>
          <hr />
          <br />
          <div className="socialmedia">
            <a
              href="https://www.linkedin.com/in/constanza-mara%C3%B1on/"
              target="_blank"
              rel="noreferrer"
              class="button-LinkedIn"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/CMara14"
              target="_blank"
              rel="noreferrer"
              class="button-GitHub"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

 
      

      <div className="profile-body">
        <div className="photo">
          <img src={Antonio} alt="Antonio" className="image--cover" />
        </div>

        <div className="profile">
          <h1 class="username">Antonio A. Mejia Carrillo </h1>
          <br />
          <h4 class="locationname">
            <i class="fa fa-map-marker" aria-hidden="true"></i> Huaraz, Perú{" "}
          </h4>
       
          <hr />
          <br />
          <div className="socialmedia">
            <a
              href="https://www.linkedin.com/in/antoniomejiacarrillo"
              target="_blank"
              rel="noreferrer"
              class="button-LinkedIn"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.github.com/usuario08"
              target="_blank"
              rel="noreferrer"
              class="button-GitHub"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>



      <div className="profile-body">
        <div className="photo">
          <img src={Alex} alt="Alex" className="image--cover" />
        </div>

        <div className="profile">
          
          <h1 class="username">Alex Gramajo</h1>
          <br />
          <h4 class="locationname">
            <i class="fa fa-map-marker" aria-hidden="true"></i> CABA, Argentina{" "}
          </h4>
          <hr />
          <br />
          <div className="socialmedia">
            <a
              href="https://www.linkedin.com/in/gramajoalex/"
              f
              target="_blank"
              rel="noreferrer"
              class="button-LinkedIn"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/gramajoalex"
              target="_blank"
              rel="noreferrer"
              class="button-GitHub"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default AboutUs;
