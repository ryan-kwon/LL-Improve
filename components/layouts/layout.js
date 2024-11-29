import React, {useState} from "react";

import SideBar from "./sideBar";
import TopBar from "./topBar";

import styles from "./styles/layout.css";

function Layout({children}){
    const [content, setContent] = useState(children);

    const handleNavigation = (newContent) => {
        setContent(newContent);
    };

    return (
        <div className='layout_container'>
            <SideBar onNavigate={handleNavigation} />
            <div className='container'>
                <TopBar />
                {/* <MainContent /> */}
                <div className="main_content">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Layout;