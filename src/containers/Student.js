import React, { Component } from 'react';

// we would like to inform this component from redux.
// to do that we need some glue. this container needs to 
// known about the store so it can use it's state, and 
// update if needed. To accomplish this, we use the connect 
// method from react-redux. this is our glue.
import { connect } from 'react-redux';

// we need bindActionsCreators from Redux, so that 
// we can get the actions to dispatch to the reducers
import { bindActionsCreators } from 'redux';

class Student extends Component{
    render(){
        const students = this.props.rightSideOfRoom.map((students)=>{
            return(<li>{students}</li>)
        })
        console.log(this.props);
        return(
            <div>
                <h1>Students</h1>
                {students}
            </div>
            )
    }
}

// We need a function to map the redux state to this components props
function mapStateToProps(state){
    //the state parameter in mapStateToProps IS THE ROOT REDUCER
    // this funciton returns an object
    // property will be props in THIS COMPONENT
    // value will be the piece of state in the reducer
    return {
        rightSideOfRoom: state.students
    }
}
console.log(connect);

// export default Student;
export default connect(mapStateToProps)(Student);