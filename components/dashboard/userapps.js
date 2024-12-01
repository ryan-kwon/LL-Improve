import React from "react";
import { Link } from "react-router-dom";

import RegStuOrgs from "./userapps apps/registerstudentorg";

import styles from "./styles/userapps.css"

function UserApps(){
    return(
        <div className="userapps-container">
            <h1 className="userapps-container-h1">Apps</h1>
            <div className="userapps-apps-container">
                <RegStuOrgs />
                <RegStuOrgs />
                <RegStuOrgs />
                <RegStuOrgs />
                <RegStuOrgs />
            </div>
            <Link className="userapps-allappslink-container">
                <div className="userapps-allappslink-img">[img]</div>
                <h3 className="userapps-allappslink-h3">View All Apps</h3>
            </Link>
        </div>
    )
};

export default UserApps;