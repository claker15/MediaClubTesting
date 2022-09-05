import React from "react";
import './albumListEntry.css'
import { Card } from "react-materialize";

const AlbumListEntry = (props) => {

    {/*This will need to display individual album information in lists*/}

    return (
        <Card className="albumEntry">
            <img src={props.album.cover} alt="" className="coverImage"></img>
            <span className="information"><p>{props.album.title}<br/>
            {props.album.artist}</p></span>
        </Card>
    )
}

export default AlbumListEntry