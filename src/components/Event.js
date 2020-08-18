import React from 'react';

function EventClick(){
    function handleClick(){
        console.log("I was clicked")
    }
    return(
        <div>
            <img onMouseOver={() => console.log('Hover')} src="https://www.fillmurray.com/200/100"/>
            <br/>
            <br/>
            <button onClick={handleClick}>Click me</button>

        </div>
    )
}


export default EventClick;