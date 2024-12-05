import React from "react";

import styles from "./styles/topBar.css";
// import searchIcon from './public/images/OSU_icon_magnifyingglass_01_1.png';


function TopBar({onHelpClick}){
    return (
        <div className='top-content'>
            <h1 className="top-content-h1">Welcome to OSU Student Experiences & Engagement!</h1>
            <ul className="top-content-icon-container">
                <li className="top-content-icon-search">
                    <button>
                        <div
                            src="/images/OSU_icon_magnifyingglass_01_1.png"
                            alt="Search Icon"
                            className="top-content-icon-search-img"
                        ></div>
                    </button>
                </li>
                <li className="">
                    <button onClick={() => {onHelpClick();}}>Help</button>
                </li>
                <li className="">
                    <button>Mail</button>
                </li>
                <li className="">
                    <button>Profile</button>
                </li>
            </ul>
        </div>
    );
}

export default TopBar;