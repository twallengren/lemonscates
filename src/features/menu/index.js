/*

Usage
<Menu />

Main Menu.js component - contains game world

*/

import React, { Component } from 'react'
import { Link } from "react-router-dom"

import Login from '../loginpage'

class Menu extends Component {
    render() {
        return (

            <div
                style={{
                    position: 'relative',
                    width: '50vw',
                    height: '75vh',
                    margin: '0px',
                    backgroundColor: 'grey',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Login />
                <Link to="/lemonscates">
                    <div className='links'>PLAY GAME</div>
                </Link>
            </div>

        );
    }
}

export default Menu;