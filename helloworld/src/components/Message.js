import React, { Component } from 'react';

class Message extends Component {
    //state example
    //states arre mutable
    constructor()
    {
        super()
        this.state={
            message:"Welcome Visitor"
        }
    }
    changeMessage()
    {
        this.setState(
            {
                message:"Thank you for subscribing"
            }
        )
    }
    render() {

        //returns only one elemnt
        return ( 
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={
                    ()=>this.changeMessage()
                }>Subscribe</button>
            </div>

        )
    }
}

export default Message