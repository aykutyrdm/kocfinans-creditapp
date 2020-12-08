import React, { Component } from 'react'

import CreditScoreService from '../services/CreditScoreService'

class ListCreditScore extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scores: []
        }

    }

    componentDidMount() {
        CreditScoreService.getCreditScores().then((res) => {
            this.setState({ scores: res.data });
            console.log(res.data)
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Credit Score List</h2>
                <div className="row">
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> TC </th>
                                <th> Score </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.scores.map(
                                    score =>
                                        <tr key={score.id}>
                                            <td> {score.tc} </td>
                                            <td> {score.score}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default ListCreditScore