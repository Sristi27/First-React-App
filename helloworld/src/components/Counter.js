import React, { Component } from 'react'

class Counter extends Component {

    constructor(props)
    {
        super(props)
        this.state=
        {

            count:0
        }
    }

    increment()
    {
        // this.state.count=this.state.count+1 //wrong
        //never modify state directly
        //always use setState
        //setState is async function
        // this.setState(
        //     {
        //         //count:this.state.count+1
        //     }
        // )
        this.setState(  //use a function when u need to chnage baed on prev state
            (previouState,props)=> 
            (
                {
                    count:previouState.count+1
                }
            )
        )
    }
    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick=
                {
                    ()=>this.increment()
                }>Increment</button>
            </div>
        )
    }
}

export default Counter
