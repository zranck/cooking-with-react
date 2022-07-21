import React, {Component} from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: props.initialCount
        }
    }

    render(){
        return(
            <div>
                {/* you cannot use class in JSX you must use className because class is reserved in js */}
                <button onClick={() => this.changeCount(-1)}>-</button>
                <span>{this.state.count}</span>
                <button onClick={() => this.changeCount(1)}>+</button>
            </div>
        )
    }

    changeCount(amount){
        this.setState(prevState => { 
           return {count: prevState.count + amount}
        })
    }

}