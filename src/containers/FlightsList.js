import React,{Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {flightSelectAction} from "../actions/flightSelectAction";

class FlightList extends  Component{

    createList(){
        if(!this.props.timeLine){
            return this.props.flights.map((flight)=>{
                return(
                    <li key={flight.flight_number} onClick={()=>{this.props.selectFlight(flight)}}>
                        {flight.flight_number}<br/>
                        {flight.mission_name}<br/>
                        {/*<img src={flight.links.mission_patch}/> <br/>*/}
                    </li>
                )

            })
        }
        else{
            return this.props.flights.map((flight)=>{
                if(parseInt(this.props.timeLine.startYear)<parseInt(flight.launch_year) &&  parseInt(flight.launch_year) <parseInt(this.props.timeLine.endYear)){
                    return(
                        <li key={flight.flight_number} onClick={()=>{this.props.selectFlight(flight)}}>
                            {flight.flight_number}<br/>
                            {flight.mission_name}<br/>
                           {/*<img  src={flight.links.mission_patch}/> <br/> */}
                        </li>
                    )
                }


            })
        }

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
            flights:state.flights||[],
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