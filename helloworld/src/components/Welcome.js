import React, { Component } from 'react';

// class Welcome extends Component {
//     //JSX
//     render() {
//         return <h1>Class Component {this.props.name} and {this.props.heroname}</h1>
//     }
// //props are immutable
// }

//DEstructuring 

class Welcome extends Component {
    //JSX
    render() {
        const {name,heroname}=this.props
        //props
        
        
        //const {state1,state2}=this.state
        //state
        return <h2>Class Component {name} and {heroname}</h2>
    }
//props are immutable
}
export default Welcome