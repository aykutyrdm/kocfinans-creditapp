import React, { Component } from 'react'
import CreditRequestService from '../services/CreditRequestService';

class CreateCreditRequest extends Component {
    constructor() {
        super()

        this.state = {
            tc: '',
            name: '',
            phone: '',
            salary: ''
        }
        this.changeTC = this.changeTC.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeSalary = this.changeSalary.bind(this);
        this.clickApply = this.clickApply.bind(this);
    }

    clickApply = (e) => {
        e.preventDefault();
        let request_obj = {
            tc: this.state.tc,
            name: this.state.name,
            phone: this.state.phone,
            salary: Number(this.state.salary)
        };
        console.log(request_obj)
        CreditRequestService.createCreditRequest(request_obj).then(res => {
            this.props.history.push('/credit_request');
        });

    }

    changeTC = (event) => {
        this.setState({ tc: event.target.value });
    }

    changeName = (event) => {
        this.setState({ name: event.target.value });
    }

    changePhone = (event) => {
        this.setState({ phone: event.target.value });
    }

    changeSalary = (event) => {
        this.setState({ salary: event.target.value });
    }

    cancel() {
        this.props.history.push('/');
    }


    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Credit Application</h3>

                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input placeholder="tc" name="tc" className="form-control"
                                            value={this.state.tc} onChange={this.changeTC} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeName} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="phone" name="phone" className="form-control"
                                            value={this.state.phone} onChange={this.changePhone} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="salary" name="salary" className="form-control"
                                            value={this.state.salary} onChange={this.changeSalary} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.clickApply}>Apply</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateCreditRequest