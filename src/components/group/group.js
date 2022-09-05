import React from "react";
import { Card, Collection, CollectionItem } from "react-materialize";
import AlbumListEntry from "../album/albumListEntry";
import MemberListEntry from '../member/memberListEntry'
import './group.css'

function Group() {

    let albumList = [{title: "test", artist: "test", cover: "https://cdn-icons-png.flaticon.com/512/483/483064.png"},
    {title: "test", artist: "test", cover: "https://cdn-icons-png.flaticon.com/512/483/483064.png"},
    {title: "test", artist: "test", cover: "https://cdn-icons-png.flaticon.com/512/483/483064.png"}]

    let memberList = [{name: "test", image: "https://cdn-icons-png.flaticon.com/512/483/483064.png"},
    {name: "test", image: "https://cdn-icons-png.flaticon.com/512/483/483064.png"},
    {name: "test", image: "https://cdn-icons-png.flaticon.com/512/483/483064.png"}]

    return(
        <div className="groupContainer">
            <div className="groupInfo">
                <Card>
                    <h3>Group Name</h3>
                    <h5>Date created: 99/99/9999</h5>
                    <h5>Frequency: Monthly</h5>
                    <h5>Next vote: 99/99/9999</h5>
                </Card>
            </div>
            <div className="albumListSection">
                <Card>
                    <h5>Current Listening Selections</h5>
                    <ul className="albumList">
                        <li className="albumEntry">
                            {albumList.map(e => {
                                return <a href="/group/1/album/1"><AlbumListEntry album={e}></AlbumListEntry></a>
                            })}
                        </li>
                    </ul>
                </Card>
            </div>
            <div className="memberListSection">
                <Card>
                    <h5>Current Members</h5>
                    <ul className="memberList">
                        <li className="memberEntry">
                            {memberList.map(e => {
                                return <MemberListEntry member={e}></MemberListEntry>
                            })}
                        </li>
                    </ul>
                </Card>
            </div>
        </div>
    )

}

export default Group