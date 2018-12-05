/*

Usage
<NavBar />

Main NavBar.js component - contains game world

*/

import React, { Component } from 'react'
import { Link } from "react-router-dom";

class NavBar extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div
                style={{
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    backgroundColor: 'grey',
                    height: '50px',
                }}>
                <Link to="/">
                    <div className='links'>MAIN MENU</div>
                </Link>
                <Link to="/lemonscates">
                    <div className='links'>LEMONSCATES</div>
                </Link>
                <Link to="/forest">
                    <div className='links'>FOREST WORLD</div>
                </Link>
                <Link to="/desert">
                    <div className='links'>DESERT WORLD</div>
                </Link>
                <Link to="/beach">
                    <div className='links'>BEACH WORLD</div>
                </Link>
                <Link to="/winter">
                    <div className='links'>WINTER WORLD</div>
                </Link>
            </div>

        );
    }
}

export default NavBar;