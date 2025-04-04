import React, { useState } from "react";

import UserApps from "./userapps";
import DashboardAnnouncements from "./announcements";
import UserEvents from "./userevents";

import TopBarHelp from "../topbar/tophelp";

import styles from "./styles/dashboard.css";

function formatDate() {
    const today = new Date();

    // Get the day of the week (Sunday, Monday, etc.)
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[today.getDay()];

    // Get the month (January, February, etc.)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[today.getMonth()];

    // Get the day of the month
    const date = today.getDate();

    // Function to get the appropriate suffix for the day of the month (st, nd, rd, th)
    const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
        return 'th'; // Special case for 11th, 12th, 13th
    }
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
    };

    const suffix = getDaySuffix(date);

    return `${dayOfWeek}, ${month} ${date}${suffix}`;
}

function Dashboard({showHelp, setShowHelp}){
    const date = new Date();
    // console.log("showHelp in Dashboard:", showHelp);

    const dashboard_items = [
        { id: 1, visible: showHelp, component: <TopBarHelp showHelp={showHelp} /> },
        { id: 2, visible: true, component: <DashboardAnnouncements /> },
        { id: 3, visible: true, component: <UserEvents /> },
    ];
    const lastVisibleId = dashboard_items.filter((item) => item.visible).at(-1)?.id;

    return(
        <div className="dashboard-container">
            <div className="dashboard-top-container">
                <h1>Dashboard</h1>
                <p>It's {formatDate()}</p>
            </div>
            <div className="dashboard-content">
                <UserApps />
                <ul className="dashboard-content-side">
                    {/* appearance of content is based on toggle conditions from topBar (triggering its "TopBarComponents") */}
                    {dashboard_items
                        .filter((item) => item.visible)
                        .map((item) => (
                        <li
                            key={item.id}
                            className={item.id === lastVisibleId ? "last-child-visible" : ""}
                        >
                            {item.component}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;