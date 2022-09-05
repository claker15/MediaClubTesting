import React from "react";
import './memberListEntry.css'
import { Card } from "react-materialize";

const MemberListEntry = (props) => {

    {/*This will need to display individual album information in lists*/}

    return (
        <Card className="memberEntry">
            <img src={props.member.image} alt="" className="coverImage"></img>
            <span className="information"><p>{props.member.name}</p></span>
        </Card>
    )
}

export default MemberListEntry