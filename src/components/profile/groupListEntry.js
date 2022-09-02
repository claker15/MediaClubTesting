import React from "react";
import { Card } from "react-materialize";
import './profile.css'

const GroupListEntry = (props) => {

    return(
        <a href="/group">
            <Card horizontal header={<img src={props.group.image} className="cardImage"></img>} className="groupCard">
                <div className="rightInfo">
                    <h5>{props.group.name}</h5>
                    <p>Members: {props.group.members}</p>
                    <p >Time until next vote: {props.group.timeLeft}</p>
                    <p>Number of albums: {props.group.albums}</p>
                </div>
            </Card>
        </a>
    )

}

export default GroupListEntry