import React, { Component } from 'react';


class CheckState extends Component{
    constructor(){
        super()
        this.state = {
            answer: 'yes',
            name: 'Emerald',
            age: 26,
            isLoggedIn: true
        }
    }
    render(){
        let wordDisplay;
        if (this.state.isLoggedIn){
            wordDisplay = "in"
        }else {
            wordDisplay = 'out'
        }
        return(
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                <h3>{this.state.name}, {this.state.age} years old</h3>
                <h1>You're currently logged {wordDisplay}</h1>
        
            </div>
        )
    }
}

export default CheckState;