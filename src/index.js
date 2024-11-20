import React from 'react';
import ReactDOM from 'react-dom';

import styles from "./styles/style.css"

function App() {
  return (
    <div className="home">
      {/* <h1>Hello, React!</h1> */}
      <div className='side-content'>
        <a className='logo'></a>
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
      <div className='container'>
        <div className='top-content'></div>
        <div className='main-content'></div>
      </div>
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
