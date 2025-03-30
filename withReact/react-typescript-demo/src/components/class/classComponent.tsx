import { count } from "console";
import { Component, ReactNode } from "react";

type PropType = {
 message : string
}

type StateType = {
    count : number
}

export class CounterClass extends Component<PropType,StateType>{
  
    constructor(props : PropType){
        super(props)
        this.state = {
            count : 0
        }
    }
    
     handleClick = () => {
       this.setState((prevState) => (
        {
           count : prevState.count + 1
        }
       ))
    }

    render(): ReactNode {
        return(
            <div>
                 <h1>{this.props.message}</h1>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleClick}>Increment Count</button>
            </div>
        )
    }


}