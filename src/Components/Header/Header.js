import React from 'react'
import "./header.css"
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';

export default function Header() {
    return (
        <div className="header">

            <img className="header__icon" src={require('../../Assests/logo.png')} alt="..." />

            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>

        </div >
    )
}

