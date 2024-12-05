import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles/topnotifications.css";

function TopBarNotifications(){
    const notification_items = [
        { id: 1, component: "Notification Description", date: "Nov 15" },
        { id: 2, component: "Notification Description", date: "Nov 15" },
        { id: 3, component: "Notification Description", date: "Nov 15" },
    ];

    const read_toggle = false;

    return(
        <ul className="topbarnotifications-container">
            <li className="topbarnotifications-container-top">
                <h1>Notifications</h1>

                <div className="">
                    {/* Show Unread */}
                    {/* Show Read */}
                    <label className="switch">
                        <input type="checkbox"></input>
                        <span className="slider round"></span>
                    </label>
                </div>
                <Link className="">
                    <img className=""></img>
                </Link>
            </li>
            <li className="">
                <ul>
                    {notification_items
                        .map((item) => (
                        <li
                            key={item.id}
                        >
                            <input type="checkbox"></input>
                            {item.component}
                            {item.date}
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
    );
}

export default TopBarNotifications;