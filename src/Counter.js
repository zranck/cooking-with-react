import React, {Component} from 'react';

export default class Counter extends Component {
    render(){
        return(
            <div>
                {/* you cannot use class in JSX you must use className because class is reserved in js */}
                <button>-</button>
                <span>0</span>
                <button>+</button>
            </div>
        )
    }
}