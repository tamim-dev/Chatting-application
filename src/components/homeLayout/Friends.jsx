import React from "react";
import Button from "@mui/material/Button";
import Image from "../layout/Image";
import profile from "../../assets/profile.png";

const Friends = () => {
    return (
        <div className="box">
            <div className="heading">
                <h3 className="groupheading">Friends</h3>
            </div>
            <div className="list">
                <div className="profileImg">
                    <Image className="imgprofile" imgsrc={profile} />
                </div>
                <div className="profileName">
                    <h3>Friends Reunion</h3>
                    <p>Hi Guys, Wassup!</p>
                </div>
                <div className="profileBtn">
                    <p className="time">Today, 8:56pm</p>
                </div>
            </div>
        </div>
    );
};

export default Friends;
