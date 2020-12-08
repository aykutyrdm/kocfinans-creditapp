import React, { Component } from 'react'
import logo from '../static/image/koclogo.png'

class Home extends Component {

    render() {
        return (
            <div style={{
                "position": "absolute",
                "bottom": "0",
                "width": "70%",
                "height": "500px",
                "text-align": "center",
            }
            }>

                <img src={logo} alt='logo' />
            </div >
        )
    }
}

export default Home