import "./Topbar.css";
import logo from "./../../images/logo_weighealth_blog-removebg-preview.png";
import { BsYoutube } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

function Topbar() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const admin = false;
  return (
    <div className="topbar">
      <Link className="topbar__logoSect" to="/">
        <img className="topbar__logo" src={logo} alt="WeigHealth Logo" />
      </Link>
      <div className="topbar__menu">
        <ul>
          <li className="topbar__listItem">
            <Link className="link" to="/category/health">
              HEALTH
            </Link>
          </li>
          <li className="topbar__listItem">
            <Link className="link" to="/category/diet">
              DIET
            </Link>
          </li>
          <li className="topbar__listItem">
            <Link className="link" to="/category/fitness">
              FITNESS
            </Link>
          </li>
          <li className="topbar__listItem">
            <Link className="link" to="/category/wellness">
              WELLNESS
            </Link>
          </li>
          <li className="topbar__listItem">
            <Link className="link" to="/write">
              {admin && "WRITE"}
            </Link>
          </li>
        </ul>
      </div>
      <a
        className="link topbar__socials"
        href="https://www.youtube.com/channel/UCyd1_bzDPlgmyzIfShISmXQ"
      >
        <BsYoutube />
      </a>
      <GiHamburgerMenu
        onClick={() => setBurgerStatus(!burgerStatus)}
        className="topbar__hamburger"
      />
      {burgerStatus && (
        <div className="topbar__sideNav ">
          <AiOutlineClose
            className="closeSideNav"
            onClick={() => setBurgerStatus(!burgerStatus)}
          />
          <ul>
            <li className="topbar__sideNavItem">
              <Link className="link topbar__sideNavItem" to="/category/health">
                HEALTH
              </Link>
            </li>
            <li className="topbar__sideNavItem">
              <Link className="link topbar__sideNavItem" to="/category/diet">
                DIET
              </Link>
            </li>
            <li className="topbar__sideNavItem">
              <Link className="link topbar__sideNavItem" to="/category/fitness">
                FITNESS
              </Link>
            </li>
            <li className="topbar__sideNavItem">
              <Link
                className="link topbar__sideNavItem"
                to="/category/wellness"
              >
                WELLNESS
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Topbar;
