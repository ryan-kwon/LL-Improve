import React, {useState,useEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import SideBar from "./sideBar";
import TopBar from "./topBar";
import Dashboard from "../dashboard/dashboard";
import Clubs from "../clubs/clubs";

import styles from "./styles/layout.css";

// function Layout({children}){
function Layout(){
    const [content, setContent] = useState(<Dashboard/>);
    const location  = useLocation;

    useEffect(() => {// Handle dynamic routing based on current location
        console.log("Current Path:", location.pathname); // Log current path
        switch (location.pathname) {
            case "/dashboard":
                setContent(<Dashboard />);
                break;
            case "/clubs":
                setContent(<Clubs />);
                break;
            // case "/user-club":
            //     setContent();
            //     break;
            // case "/user-calendar":
            //     setContent();
            //     break;
            // case "/user-tasks":
            //     setContent();
            //     break;
            default:
                setContent(<Dashboard />);
                // setContent(<div>Page not found</div>); // Fallback for unknown routes
        }
      }, [location.pathname]);

    // const handleNavigation = (newContent) => {
    //     setContent(newContent);
    // };

    return (
        <div className='layout_container'>
            {/* <SideBar onNavigate={handleNavigation} /> */}
            <SideBar onNavigate={setContent} />
            <div className='container'>
                <TopBar />
                {/* <MainContent /> */}
                <div className="main_content">
                    {content}
                    {/* <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/clubs" element={<Clubs />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes> */}
                </div>
            </div>
        </div>
    );
}

export default Layout;