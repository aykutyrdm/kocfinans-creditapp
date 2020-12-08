import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListCreditScore from './components/ListCreditScore';
import CreateCreditScore from './components/CreateCreditScore'
import ListCreditRequest from './components/ListCreditRequest';
import CreateCreditRequest from './components/CreateCreditRequest'
import Home from './components/Home'
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/credit_score" component={ListCreditScore}></Route>
            <Route path="/credit_score-add" component={CreateCreditScore}></Route>
            <Route path="/credit_request" component={ListCreditRequest}></Route>
            <Route path="/credit_request-add" component={CreateCreditRequest}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>

  );
}

export default App;