import React from 'react'

// function Greet(props) {
//     return (
//         <div>
//             <h2>Hello {props.name} and {props.heroname}</h2>
//             {props.children}
//         </div>
//     )
// }

//Destructuring

function Greet({name,heroname}) {
    return (
        <div>
            <h2>Hello {name} and {heroname}</h2>
            
        </div>
    )
}
export default Greet