import React, { Component } from 'react'
import CreditScoreService from '../services/CreditScoreService';

class CreateCreditScore extends Component {
    constructor() {
        super()

        this.state = {
            tc: '',
            score: ''
        }
        this.changeTC = this.changeTC.bind(this);
        this.changeScore = this.changeScore.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
    }

    clickAdd = (e) => {
        e.preventDefault();
        let score_obj = {
            tc: this.state.tc,
            score: Number(this.state.score)
        };
        console.log(score_obj)
        CreditScoreService.createCreditScore(score_obj).then(res => {
            this.props.history.push('/credit_score');
        });

    }

    changeTC = (event) => {
        this.setState({ tc: event.target.value });
    }

    changeScore = (event) => {
        this.setState({ score: event.target.value });
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
                            <h3 className="text-center">Add Credit Score</h3>

                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input placeholder="tc" name="tc" className="form-control"
                                            value={this.state.tc} onChange={this.changeTC} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="score" name="score" className="form-control"
                                            value={this.state.score} onChange={this.changeScore} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.clickAdd}>Add</button>
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

export default CreateCreditScore