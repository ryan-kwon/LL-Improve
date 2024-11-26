import React from "react";

import styles from "./styles/sideBar.css";

function SideBar(){
    return (
        <div className="side-content">
        <a className='logo-link'>
            <div className="logo"></div>
        </a>
        <ul className='side-tabs'>
          <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
            <a role='button' href=''>
              <div id='side-tabs-menu-img'>
                <img src=''></img>
              </div>
              <div className='side-tabs-menu-text'>Dashboard</div>
            </a>
          </li>
          <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
            <a role='button' href=''>
              <div id='side-tabs-menu-img'>
                <img src=''></img>
              </div>
              <div className='side-tabs-menu-text'>Clubs</div>
            </a>
          </li>
          <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
            <a role='button' href=''>
              <div id='side-tabs-menu-img'>
                <img src=''></img>
              </div>
              <div className='side-tabs-menu-text'>[your club]</div>
            </a>
          </li>
          <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
            <a role='button' href=''>
              <div id='side-tabs-menu-img'>
                <img src=''></img>
              </div>
              <div className='side-tabs-menu-text'>Calendar</div>
            </a>
          </li>
          <li id='side-tab-menu-item-active' className='side-tabs-menu-item'>
            <a role='button' href=''>
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