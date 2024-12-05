import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles/tophelp.css";


function TopBarHelp({setShowHelp}){
    return(
        <ul className="topbarhelp-container">
            <li className="topbarhelp-container-li topbarhelp-container-top">
                <h1>Help</h1>

                <button className="topbarhelp-container-top-btn" onClick={() => setShowHelp(false)}>
                    <span className="">&#10005;</span>
                </button>
            </li>
            <li className="topbarhelp-container-li topbar-help-container-helplinks">
                <ul className="topbar-help-container-helplinks-ul">
                    <li className="topbar-help-container-helplinks-ul-li">
                        <Link className="">
                            <img src="/images/OSU_icon_magnifyingglass_01_1.png" alt="alternatetext" className="topbar-help-container-helplinks-ul-li-img1"></img>
                            Browse Complete Documentation
                        </Link>
                    </li>
                    <li className="topbar-help-container-helplinks-ul-li">
                        <Link className="">
                            <img src="/images/OSU_icon_magnifyingglass_01_1.png" alt="alternatetext" className="topbar-help-container-helplinks-ul-li-img1"></img>
                            Contact Support
                        </Link>
                    </li>
                    <li className="topbar-help-container-helplinks-ul-li">
                        <Link className="">
                            <img src="/images/OSU_icon_magnifyingglass_01_1.png" alt="alternatetext" className="topbar-help-container-helplinks-ul-li-img1"></img>
                            Give Feedback
                        </Link>
                    </li>
                    <li className="topbar-help-container-helplinks-ul-li">
                        <Link className="">
                            <img src="/images/OSU_icon_magnifyingglass_01_1.png" alt="alternatetext" className="topbar-help-container-helplinks-ul-li-img1"></img>
                            Keyboard Shortcuts
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="topbarhelp-container-li topbar-help-container-doclinks">
                <Link className="">About ILI</Link>
                <Link className="">Terms of Use</Link>
                <Link className="">Privacy Policy</Link>
                <Link className="">Notice of Collection</Link>
            </li>
        </ul>
    );
}

export default TopBarHelp;