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
    
    //theres got to be a generalized way of doing this without the variables affecting each other......
    const [showHelp, setShowHelp] = useState(false); //for TopBarHelp
    const [showNotif, setShowNotif] = useState(false); //for TopBarNotification
    const [showProfile, setShowProfile] = useState(false); //for TopBarProfile
    const passingvar = "var"

    useEffect(() => {// Handle dynamic routing based on current location
        // console.log("Current Path:", location.pathname); // Log current path
        switch (location.pathname) {
            case "/dashboard":
                // console.log("showHelp in Layout:", showHelp);
                // console.log("Setting Dashboard content with showHelp:", showHelp);
                setContent(<Dashboard showHelp={showHelp} setShowHelp={setShowHelp} />);
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
                // console.log("showHelp in Layout:", showHelp);
                setContent(<Dashboard showHelp={showHelp} setShowHelp={setShowHelp} />);
                // setContent(<div>Page not found</div>); // Fallback for unknown routes
        }
      }, [location.pathname, showHelp]);

    // const handleNavigation = (newContent) => {
    //     setContent(newContent);
    // };

    return (
        <div className='layout_container'>
            {/* <SideBar onNavigate={handleNavigation} /> */}
            <SideBar onNavigate={setContent} />
            <div className='container'>
                <TopBar
                    onHelpClick={() => {
                        // console.log("Before setShowHelp:", showHelp); // Log current state
                        setShowHelp((prev) => !prev); // Toggle state
                        // console.log("After setShowHelp:", !showHelp); // Log the new state
                    }}
                />
                {/* <TopBar onClickBtn={passingvar} /> */}
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