import React from "react";
import "./Header.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from "@material-ui/core/IconButton";
import SendRoundedIcon from '@material-ui/icons/SendRounded';


function Header() {
    return (
        <div className = "header">
            <IconButton>
            <AccountCircleIcon fontSize = "large" className ="profile_icon"/>
            </IconButton>
      
            <img className = "header_logo"
            src = "https://1000logos.net/wp-content/uploads/2018/07/tinder-emblem.jpg" alt ="Tinder"></img>
            <IconButton>
                <SendRoundedIcon fontSize = "large" className="chat" />
            </IconButton>
        </div>
    );
}

export default Header;
