import React from 'react'
import "./SwipeButtons.css"
import ReplayRoundedIcon from '@material-ui/icons/ReplayRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import FlashOnRoundedIcon from '@material-ui/icons/FlashOnRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import IconButton from "@material-ui/core/IconButton";

function Swipebuttons() {
    return (
        <div className = "swipeButtons">
            <IconButton>
            <ReplayRoundedIcon className ="back" fontSize="large" ></ReplayRoundedIcon>
            </IconButton>
            
            <IconButton>
            <HighlightOffRoundedIcon className ="dislike" fontSize="large" ></HighlightOffRoundedIcon>            
            </IconButton>

            <IconButton>
            <StarRoundedIcon className ="star" fontSize="large" ></StarRoundedIcon>
            </IconButton>

            <IconButton>
            <FavoriteRoundedIcon className ="like" fontSize="large" ></FavoriteRoundedIcon>
            </IconButton>

            <IconButton>
            <FlashOnRoundedIcon className ="energy" fontSize="large" ></FlashOnRoundedIcon>
            </IconButton>
        </div>
    )
}

export default Swipebuttons
