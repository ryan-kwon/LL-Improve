import React from "react";
import { Link } from "react-router-dom";

import Dashboard from "../dashboard/dashboard";
import Clubs from "../clubs/clubs";

import styles from "./styles/sideBar.css";

const preloadedComponents = {};

function SideBar({ onNavigate }){
  const prefetchComponent = async (path, componentImport) => {
    if (!preloadedComponents[path]) {
      console.log(`Preloading component for ${path}`);
      preloadedComponents[path] = (await componentImport()).default;
    }
  };

  const handleHover = (path, componentImport) => {
    if (!preloadedComponents[path]) {
      prefetchComponent(path, componentImport); // Preload only once
    }
  };

  const handleClick = async (event, path, componentImport) => {
    event.preventDefault();
    window.history.pushState({}, "", path); // Update URL without reload
    const Component =
      preloadedComponents[path] || (await componentImport()).default;
    onNavigate(<Component />); // Render the component
  };

  return (
    <div className="side-content">
      <a className='logo-link'>
          <div className="logo"></div>
      </a>
      <ul className='side-tabs'>
        <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
          <Link
            role="button"
            to="/dashboard"
            onMouseEnter={() =>
              handleHover("/dashboard", () => import("../dashboard/dashboard"))
            }
            onClick={(e) =>
              handleClick(e, "/dashboard", () => import("../dashboard/dashboard"))
            }
          >
            <div id='side-tabs-menu-img'>
              <img src=''></img>
            </div>
            <div className='side-tabs-menu-text'>Dashboard</div>
          </Link>
          {/* <a
            role="button"
            href="/dashboard"
            onMouseEnter={() => handleHover("/dashboard", () => import("../dashboard/dashboard"))}
            onClick={(e) =>
              handleClick(e, "/dashboard", () => import("../dashboard/dashboard"))
            }
          >
            <div id='side-tabs-menu-img'>
              <img src=''></img>
            </div>
            <div className='side-tabs-menu-text'>Dashboard</div>
          </a> */}
        </li>
        <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
          <Link
            role="button"
            to="/clubs"
            onMouseEnter={() => handleHover("/clubs", () => import("../clubs/clubs"))}
            onClick={(e) =>
              handleClick(e, "/clubs", () => import("../clubs/clubs"))
            }
          >
            <div id='side-tabs-menu-img'>
              <img src=''></img>
            </div>
            <div className='side-tabs-menu-text'>Clubs</div>
          </Link>
          {/* <a
            role="button"
            href="/clubs"
            onMouseEnter={() => handleHover("/clubs", () => import("../clubs/clubs"))}
            onClick={(e) =>
              handleClick(e, "/clubs", () => import("../clubs/clubs"))
            }
          >
            <div id='side-tabs-menu-img'>
              <img src=''></img>
            </div>
            <div className='side-tabs-menu-text'>Clubs</div>
          </a> */}
        </li>
        <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
          <a
            role="button"
            href="/your-club"
            // onMouseEnter={() => handleHover("/your-club")}
            // onClick={(e) => handleClick(e, "/your-club")}
          >
            <div id='side-tabs-menu-img'>
              <img src=''></img>
            </div>
            <div className='side-tabs-menu-text'>[your club]</div>
          </a>
        </li>
        <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
          <a
            role="button"
            href="/calendar"
            // onMouseEnter={() => handleHover("/calendar")}
            // onClick={(e) => handleClick(e, "/calendar")}
          >
            <div id='side-tabs-menu-img'>
              <img src=''></img>
            </div>
            <div className='side-tabs-menu-text'>Calendar</div>
          </a>
        </li>
        <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
          <a
            role="button"
            href="/tasks"
            // onMouseEnter={() => handleHover("/tasks")}
            // onClick={(e) => handleClick(e, "/tasks")}
          >
            <div id='side-tabs-menu-img'>
              <img src=''></img>
            </div>
            <div className='side-tabs-menu-text'>Task</div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;