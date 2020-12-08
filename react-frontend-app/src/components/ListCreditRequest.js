import React, { Component } from 'react'

import CreditRequestService from '../services/CreditRequestService'

class ListCreditRequest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            requests: []
        }

    }

    componentDidMount() {
        CreditRequestService.getCreditRequests().then((res) => {
            this.setState({ requests: res.data });
            console.log(res.data)
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Credit Request List</h2>
                <div className="row">
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> TC </th>
                                <th> Name </th>
                                <th> Phone </th>
                                <th> Salary </th>
                                <th> Credit Score </th>
                                <th> Amount </th>
                                <th> Status </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.requests.map(
                                    request =>
                                        <tr key={request.id}>

                                            <td> {request.creditScore.tc} </td>
                                            <td> {request.name} </td>
                                            <td> {request.phone}</td>
                                            <td> {request.salary} </td>
                                            <td> {request.creditScore.score}</td>
                                            <td> {request.amount} </td>
                                            <td> {request.approved ? "Accepted" : "Rejected"} </td>
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

export default ListCreditRequest