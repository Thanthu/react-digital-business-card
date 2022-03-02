import React from "react";
import displayPicture from '../../resources/dp.jpg'
import './Display.css'

export default function Display() {
    return (
        <div className="dp-img-container">
            <img src={displayPicture} className="dp-img" alt="thanthu" />
        </div>
    );
}