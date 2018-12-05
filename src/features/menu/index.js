/*

Usage
<Menu />

Main Menu.js component - contains game world

*/

import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (

            <div
                style={{
                    position: 'relative',
                    width: '50vw',
                    height: '50vh',
                    margin: '0px',
                    backgroundColor: 'grey',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Link to="/lemonscates">
                    <div className='links'>PLAY GAME</div>
                </Link>
            </div>

        );
    }
}

export default Menu;