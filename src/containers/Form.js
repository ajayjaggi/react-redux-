import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {submitFormAction} from "../actions/submitFormAction";

class Form extends Component{

    constructor(props)
    {
        super(props)
        this.state={
            start:'',
            end:''
        }
    }

    handleStartChange=(event)=>{
        this.setState({
            start:event.target.value
        })
    };

    handleEndChange=(event)=>{
        this.setState({
            end:event.target.value
        })
    };

    render(){
        return(
            <form onSubmit={()=>this.props.submitForm({startYear:this.state.start,endYear:this.state.end})}>
                <label>Start Year </label>
                <input type="text" value={this.state.start} onChange={this.handleStartChange} required/>
                <label>End Year </label>
                <input type="text" value={this.state.end} onChange={this.handleEndChange} required/>
                <input type="submit"/>
            </form>
        );
    }
}



function mapDispatchToProps(dispatch){
    return(
        bindActionCreators({submitForm:submitFormAction},dispatch)
    )
}

export default connect(null,mapDispatchToProps)(Form);