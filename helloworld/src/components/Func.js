import React from 'react';


//jsx

// const Func = () => <h1>Functional Component</h1>

// function Func()
// {
//     return <h1>Functional Component</h1>
// }

//using not jsx

const Func = () => { return React.createElement(
    'div',
    //null, 
    {id:'hello',className:"dummyClass"},   //class===className in React
    // for setting the id and class for the div
    React.createElement('h1', null, "Not JSX")) }

export default Func