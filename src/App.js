import React, { Component } from 'react';
import './App.css';
import {loadData} from "./actions/loadDataAction";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Form from "./containers/Form";
import FlightList from "./containers/FlightsList";
import FlightDetails from "./containers/FlightDetails"

class App extends Component {
  constructor(props){
    super(props);
    this.fetchData()
  }

  fetchData=()=> {
    fetch("https://api.spacexdata.com/v2/launches")
        .then(response=>response.json())
          .then((response)=>{
            this.props.loadData(response);
          });
  };

  render(){

    return(

      <div className="App">
        <Form/>
        <h2>Flights</h2>
        <FlightList/>
        <h2>Flight Details</h2>
        <FlightDetails/>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch){
  return(
      bindActionCreators({loadData:loadData},dispatch)
  )
}
export default connect(null,mapDispatchToProps)(App);
