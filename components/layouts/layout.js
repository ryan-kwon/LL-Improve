import React from "react";

import SideBar from "./sideBar";
import TopBar from "./topBar";

import styles from "./styles/layout.css";

function Layout({children}){
    return (
        <div className='layout_container'>
            <SideBar />
            <div className='container'>
                <TopBar />
                {/* <MainContent /> */}
                <div className="main_content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;