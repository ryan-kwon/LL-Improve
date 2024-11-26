import React from "react";

import DataFetcher from "./messages";

import styles from "./styles/topBar.css";
// import searchIcon from './public/images/OSU_icon_magnifyingglass_01_1.png';

function TopBar(){
    return (
        <div className='top-content'>
            <h1 className="top-content-h1">Welcome to OSU Student Experiences & Engagement!</h1>
            <ul className="top-content-icon-container">
                <li className="top-content-icon-search">
                    <a role='button'>
                        <div
                            src="/images/OSU_icon_magnifyingglass_01_1.png"
                            alt="Search Icon"
                            className="top-content-icon-search-img"
                        ></div>
                    </a>
                </li>
                <li className="">

                </li>
                <li className="">

                </li>
                <li className="">

                </li>
            </ul>
            
            {/* <div className="top-content-icon-container">
                <div className="">

                </div>
                <div className="">

                </div>
                <div className="">

                </div>
                <div className="">

                </div>
            </div> */}
        </div>
    );
}

export default TopBar;