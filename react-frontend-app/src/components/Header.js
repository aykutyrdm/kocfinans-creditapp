import React, { Component } from 'react'

class Header extends Component {

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="http://localhost:3000/" className="navbar-brand">Koç Finance</a></div>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="http://localhost:3000/credit_score">Credit Scores </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="http://localhost:3000/credit_score-add">Add Credit Score</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="http://localhost:3000/credit_request">Credit Requests </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="http://localhost:3000/credit_request-add"> Credit Application</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>


            </div>
        )
    }
}

export default Header