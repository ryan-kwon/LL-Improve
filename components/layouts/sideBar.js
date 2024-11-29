import React from "react";

import styles from "./styles/sideBar.css";



function SideBar({ onNavigate }){
  const preFetchContent = path => {
    switch(path){
      case "/dashboard":
        return <div>Dashboard</div>;
      case "/clubs":
        return <div>clubs</div>;
      case "/calendar":
        return <div>calendar</div>;
      case "/tasks":
        return <div>tasks</div>;
      default:
        return <div>Loading..</div>;
    }
  };

  const handleClick = (event, path, content) => {
    event.preventDefault();
    window.history.pushState({}, "", path); // Update URL without reload
    onNavigate(content); // Update content in Layout
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
            onClick={(e) =>
              handleClick(e, "/dashboard", <div>Dashboard Content</div>)
            }
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
            onClick={(e) => handleClick(e, "/clubs", <div>Clubs</div>)}
          >
            <div id='side-tabs-menu-img'>
              <img src=''></img>
            </div>
            <div className='side-tabs-menu-text'>Clubs</div>
          </a>
        </li>
        <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
          <a
            role='button'
            href=''
            onClick={(e) => handleClick(e, "/[your club]", <div>Your Club</div>)}  
          >
            <div id='side-tabs-menu-img'>
              <img src=''></img>
            </div>
            <div className='side-tabs-menu-text'>[your club]</div>
          </a>
        </li>
        <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
          <a
            role='button' 
            href=''
            onClick={(e) => handleClick(e, "/Calendar", <div>Calendar</div>)}
          >
            <div id='side-tabs-menu-img'>
              <img src=''></img>
            </div>
            <div className='side-tabs-menu-text'>Calendar</div>
          </a>
        </li>
        <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
          <a
            role='button' 
            href=''
            onClick={(e) => handleClick(e, "/Task", <div>Task</div>)}
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