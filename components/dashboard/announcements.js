import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./styles/announcements.css"

function DashboardAnnouncements(){
    const [currentSlide, setCurrentSlide] = useState(0);

    //need to replace from database
    const slides = [
        {
          title: "insert title",
          description: "The atmosphere in Chania has a touch of Florence and Venice.The atmosphere in Chania has a touch of Florence and Venice."
        },
        {
          title: "insert title2",
          description: "The atmosphere in Chania has a touch of Florence and Venice."
        },
        {
          title: "insert title3",
          description: "Beautiful flowers in Kolymbari, Crete."
        }
    ];
    
    // Function to handle next slide
    const nextSlide = () => {
        setCurrentSlide(current => 
            current === slides.length - 1 ? 0 : current + 1
        );
    };
    
    // Function to handle previous slide
    const prevSlide = () => {
        setCurrentSlide(current => 
            current === 0 ? slides.length - 1 : current - 1
        );
    };

    return(
        <div className="dashannouncements-container">
            <div className="dashannouncements-top">
                <h1 className="dashannouncements-container-h1">Announcements</h1>
                
                <div className="dashannouncements-top-indicators-container">
                    <div className="slide-indicators">
                        <span className="slide-position">
                            {currentSlide + 1} of {slides.length}
                        </span>
                    </div>
                    <div className="dashannouncements-slide-control-container">
                        <button className="dashannouncements-slide-control left" onClick={prevSlide}>
                            <span className="dashannouncements-slide-control-prev-icon" aria-hidden="true">&#8249;</span>
                        </button>
                        <button className="dashannouncements-slide-control right" onClick={nextSlide}>
                            <span className="dashannouncements-slide-control-next-icon" aria-hidden="true">&#8250;</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="dashannouncements-slide" data-ride="slide">
                <div class="dashannouncements-slide-inner">
                    <h3>{slides[currentSlide].title}</h3>
                    <p>{slides[currentSlide].description}</p>
                </div>
            </div>
        </div>
    )
};

export default DashboardAnnouncements;