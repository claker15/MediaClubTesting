import React from "react";
import './groupAlbumView.css'
import { Card } from "react-materialize";
import Tracker from "../timeTracker/tracker";
import TimeLine from "../timeTracker/timeLine";
import SpotifyWebPlayer from "react-spotify-web-playback/lib";

const GroupAlbumView = () => {

    let tracks = ["Test1", "Test2", "Test3"];

    return (
        <div>
            <div className="albumViewContainer">
                <div className="sidebar">
                    <Card>
                        <h4>sidebar</h4>
                        <ul>
                            {tracks.map(e => {
                                return <li><h5>{e}</h5></li>
                            })}
                        </ul>
                    </Card>
                </div>
                <div className="tracker">
                    <Card>
                        <TimeLine></TimeLine>
                    </Card>
                </div>
            </div>
            <SpotifyWebPlayer></SpotifyWebPlayer>
        </div>
    )

}

export default GroupAlbumView