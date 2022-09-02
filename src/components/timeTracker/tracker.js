import React from "react";

function Tracker() {

    const trackerStyle = (trackProg, duration) => ({
        width: `0`,
        height: `0`,
        borderLeft: `10px solid transparent`,
        borderBottom: `20px solid red`,
        borderRight: `10px solid transparent`,
        position: `absolute`,
        left: `4%`,
        top: `65%`,
        animation: (isPlaying) ? `testanimation ${duration}ms linear -${trackProg}ms running` : `testanimation ${duration}ms linear -${trackProg}ms paused`,

    });

    return(
        <div className='arrow' style={trackerStyle(trackProg, duration)}></div>
    )

}