import React from "react";
import './timeline.css'
import Tracker from "./tracker";


const TimeLine = () => {

    return (
        <div>
            <div className="timeLineContainer">
                <Tracker></Tracker>
                <div className="horizLine"></div>
            </div>
        </div>
    )

}

export default TimeLine