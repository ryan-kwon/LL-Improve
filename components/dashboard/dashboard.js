import React from "react";

import styles from "./styles/dashboard.css";

function Dashboard({children}){
    return(
        <div>
            <div>
                <h1>Dashboard</h1>
                <p>[insert date]</p>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Dashboard;