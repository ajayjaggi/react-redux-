import React,{Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {flightSelectAction} from "../actions/flightSelectAction";

class FlightList extends  Component{

    createList(){
        return this.props.flights.map((flight)=>{
            return(
                <li key={flight.flight_number} onClick={()=>{this.props.selectFlight(flight)}}>
                    {flight.flight_number}
                    {flight.mission_name}
                    {flight.links.mission_patch}
                </li>
            )
        })
    }


    render(){
        return(
            <ul>
                {this.createList()}
            </ul>
            /*<div>
               hi
            </div>*/
        );
    }
}

function mapStateToProps(state){
    return(
        {
            flights:state.flights,
            timeLine:state.activeTimeline
        }
    )
}


function mapDispatchToProps(dispatch){
    return(
        bindActionCreators({selectFlight:flightSelectAction},dispatch)
    )
}


export default connect(mapStateToProps,mapDispatchToProps)(FlightList);