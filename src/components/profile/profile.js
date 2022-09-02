import React from "react";
import { Card } from "react-materialize";
import GroupListEntry from "./groupListEntry";

function Profile() {

    let groups = [
        {image: 'https://cdn-icons-png.flaticon.com/512/483/483064.png', name: "group", members: 4, timeLeft: "4 days", albums: 4},
        {image: 'https://cdn-icons-png.flaticon.com/512/483/483064.png', name: "group", members: 4, timeLeft: "4 days", albums: 4},
        {image: 'https://cdn-icons-png.flaticon.com/512/483/483064.png', name: "group", members: 4, timeLeft: "4 days", albums: 4},
        {image: 'https://cdn-icons-png.flaticon.com/512/483/483064.png', name: "group", members: 4, timeLeft: "4 days", albums: 4},
    ];


    return(
        
        <Card className="profileContainer">
            <h4>Current Groups</h4>
            {groups.map((element, index) => {
                return <GroupListEntry group={element}></GroupListEntry>
            })}
        </Card>
        
    )
}

export default Profile