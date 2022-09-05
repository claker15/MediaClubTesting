import React from "react";
import './timeline.css'

function Tracker() {

    let isPlaying = true
    let duration = "2000ms"
    let trackProg = "1000ms"

    const trackerStyle = (trackProg, duration) => ({
        width: `0`,
        height: `0`,
        borderTop: `20px solid transparent`,
        borderBottom: `20px solid transparent`,
        borderLeft: `20px solid red`,
        animation: `testanimation 1000ms linear running`, //(isPlaying) ? `testanimation ${duration}ms linear -${trackProg}ms running` : `testanimation ${duration}ms linear -${trackProg}ms paused`,
    });

    return(
        <div className='arrow' style={trackerStyle(trackProg, duration)}></div>
    )

}

export default Tracker