import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Form from './components/Form';
import ListProduk from './components/ListProduk';
import FormEdit from './components/FormEdit';
import Login from './components/Login';



import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={ListProduk} />
        <Route path="/tambahdata" component={Form}/>
        <Route path="/editdata" component={FormEdit}/>
        <Route path="/login" component={Login}/>
      </div>
    );
  }
}

export default App;
