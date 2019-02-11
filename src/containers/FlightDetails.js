import React, {Component} from "react";
import {connect} from "react-redux";


class FlightDetails extends Component{

    render(){
        if(!this.props.flight){
            return(
                <h5> </h5>
            )
        }
        return(
            <h3> </h3>
        )
    }
}


function mapStateToProps(state){
    return(
        {
            flight:state.activeFlight
        }
    )
}

export default connect(mapStateToProps)(FlightDetails);
