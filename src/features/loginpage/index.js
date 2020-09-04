/* <Login />

Login component - lets users create a profile or load an existing one

*/

import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (

            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '75%',
                    margin: '0px',
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                <div>
                    USERNAME:
                    <input placeholder='username' />
                </div>
                <div>
                    PASSWORD:
                    <input placeholder='password' />
                </div>

            </div>

        );
    }
}

export default Login;