import React,{Component} from 'react'

class Test extends Component{
    constructor(){
        super()
        this.state = {counter: 0}
    }
    add = () =>{this.setState({counter: this.state.counter + 1})}
    subtract = () => {this.setState({counter: this.state.counter - 1})}

    render(){
        return(
            <div>
                <h2>{this.state.counter}</h2>
                <button onClick ={this.add}>Add</button>
                <button onClick ={this.subtract}>Subtract</button>
            </div>
        )
    }
}

export default Test;