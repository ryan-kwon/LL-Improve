import React from "react";

import Dashboard from "../dashboard/dashboard";

import styles from "./styles/sideBar.css";

const preloadedContent = {};

function SideBar({ onNavigate }){
  const prefetchContent = (path) => {
    if (!preloadedContent[path]) {
      console.log(`Pre-loading content for ${path}`);
      // Simulate pre-loading content
      preloadedContent[path] = getContentForPath(path);
    }
  };

  const handleHover = (path) => {
    if (!preloadedContent[path]) {
      prefetchContent(path); // Preload only if not already preloaded
    }
  };

  const handleClick = (event, path) => {
    event.preventDefault();
    window.history.pushState({}, "", path); // Update URL without reload
    onNavigate(preloadedContent[path]); // Use preloaded content
  };

  const getContentForPath = (path) => {
    switch (path) {
      case "/dashboard":
        return <div>Dashboard Content</div>;
      case "/clubs":
        return <div>Clubs Content</div>;
      case "/calendar":
        return <div>Calendar Content</div>;
      case "/tasks":
        return <div>Task Content</div>;
      default:
        return <div>Loading...</div>;
    }
  };

  return (
    <div className="side-content">
      <a className='logo-link'>
          <div className="logo"></div>
      </a>
      <ul className='side-tabs'>
        <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
          <a
            role="button"
            href="/dashboard"
            onMouseEnter={() => handleHover("/dashboard")} // Pre-load on hover
            onClick={(e) => handleClick(e, "/dashboard")}
          >
            <div id='side-tabs-menu-img'>
              <img src=''></img>
            </div>
            <div className='side-tabs-menu-text'>Dashboard</div>
          </a>
        </li>
        <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
          <a
            role="button"
            href="/clubs"
            onMouseEnter={() => handleHover("/clubs")}
            onClick={(e) => handleClick(e, "/clubs")}
          >
            <div id='side-tabs-menu-img'>
              <img src=''></img>
            </div>
            <div className='side-tabs-menu-text'>Clubs</div>
          </a>
        </li>
        <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
          <a
            role="button"
            href="/your-club"
            onMouseEnter={() => handleHover("/your-club")}
            onClick={(e) => handleClick(e, "/your-club")}
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
            onMouseEnter={() => handleHover("/calendar")}
            onClick={(e) => handleClick(e, "/calendar")}
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
            onMouseEnter={() => handleHover("/tasks")}
            onClick={(e) => handleClick(e, "/tasks")}
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