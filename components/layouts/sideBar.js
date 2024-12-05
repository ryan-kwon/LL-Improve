import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Dashboard from "../dashboard/dashboard";
import Clubs from "../clubs/clubs";
import UserClubs from "../userClub/userclub";
import UserCalendar from "../userCalendar/usercalendar";
import UserTasks from "../userTasks/usertasks";

import styles from "./styles/sideBar.css";

const preloadedComponents = {};

function SideBar({ onNavigate }){
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const isActive = (path) =>{
    const currentPath = activePath.replace(/\/$/, '');
    const targetPath = path.replace(/\/$/, '');
    return currentPath === targetPath;
  };

  const prefetchComponent = async (path, componentImport) => {
    if (!preloadedComponents[path]) {
      try {
        console.log(`Preloading component for ${path}`);
        preloadedComponents[path] = (await componentImport()).default;
      } catch (error){
        console.log(`Error preloading component for ${path}:`, error);
      }
    }
  };

  // const handleHover = async (path, componentImport) => {
  //   if (!preloadedComponents[path]) {
  //     console.log(`Preloading component for ${path}`);

  //     try {
  //       preloadedComponents[path] = (await componentImport()).default;
  //     } catch (error) {
  //       console.error(`Error preloading component for ${path}:`, error);
  //     }
  //   }
  // };

  const handleHover = (path, componentImport) => {
    prefetchComponent(path, componentImport);
  };

  const handleClick = async (event, path, componentImport) => {
    event.preventDefault();

    try{
      window.history.pushState({}, "", path); // Update URL without reload

      setActivePath(path);

      const Component =
        preloadedComponents[path] || (await componentImport()).default;
      onNavigate(<Component />); // Render the component
    } catch(error){
      console.error(`Error loading component for ${path}:`, error);
    }
  };

  // console.log('Current active path:', activePath);
  // console.log('Location pathname:', location.pathname);

  return (
    <div className="side-content">
      <a className='logo-link'>
          <div className="logo"></div>
      </a>
      <ul className='side-tabs'>
        <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
          <Link
            to="/dashboard"
            onMouseEnter={() =>
              handleHover("/dashboard", () => import("../dashboard/dashboard"))
            }
            onClick={(e) =>
              handleClick(e, "/dashboard", () => import("../dashboard/dashboard"))
            }
            className={`side-tabs-link ${isActive("/dashboard") ? "bold" : ""}`}
          >
            <div id='side-tabs-menu-img'>
              <img src=''></img>
            </div>
            <div className='side-tabs-menu-text'>Dashboard</div>
          </Link>
        </li>
        <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
          <Link
            to="/clubs"
            onMouseEnter={() => 
              handleHover("/clubs", () => import("../clubs/clubs"))
            }
            onClick={(e) =>
              handleClick(e, "/clubs", () => import("../clubs/clubs"))
            }
            className={`side-tabs-link ${isActive("/clubs") ? "bold" : ""}`}
          >
            <div id='side-tabs-menu-img'>
              <img src=''></img>
            </div>
            <div className='side-tabs-menu-text'>Clubs</div>
          </Link>
        </li>
        <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
          <Link
            to="/user-club"
            onMouseEnter={()=>
              handleHover("/user-club", () => import("../userClub/userclub"))
            }
            onClick={(e) =>
              handleClick(e, "/user-club", () => import("../userClub/userclub"))
            }
            className={`side-tabs-link ${isActive("/user-club") ? "bold" : ""}`}
          >
            <div id='side-tabs-menu-img'>
              <img src=''></img>
            </div>
            <div className='side-tabs-menu-text'>[your club]</div>
          </Link>
        </li>
        <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
          <Link
            to="/calendar"
            onMouseEnter={() => 
              handleHover("/user-calendar", () => import("../userCalendar/usercalendar"))
            }
            onClick={(e) => 
              handleClick(e, "/user-calendar", () => import("../userCalendar/usercalendar"))
            }
            className={`side-tabs-link ${isActive("/user-calendar") ? "bold" : ""}`}
          >
            <div id='side-tabs-menu-img'>
              <img src=''></img>
            </div>
            <div className='side-tabs-menu-text'>Calendar</div>
          </Link>
        </li>
        <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
          <Link
            to="/tasks"
            onMouseEnter={() => 
              handleHover("/user-tasks", () => import("../userTasks/usertasks"))
            }
            onClick={(e) => 
              handleClick(e, "/user-tasks", () => import("../userTasks/usertasks"))
            }
            className={`side-tabs-link ${isActive("/user-tasks") ? "bold" : ""}`}
          >
            <div id='side-tabs-menu-img'>
              <img src=''></img>
            </div>
            <div className='side-tabs-menu-text'>Task</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;