import React, {Component} from 'react';

export default class Auth extends Component{
    
    constructor(props){
        super(props);
        this.state={
            hasChanged: false
        }
    }
    
    changeAuthorized = (ev) => {
        ev.preventDefault();
        this.setState({hasChanged:true});
        this.props.changeAuthorized(this.props.name);
    }
    
    render(){
        return (
            <div className="person">
                <h2>{this.props.name}</h2>
                <h3>{this.props.count}</h3>
                <button onClick={this.increment}>Add</button>
                {this.state.hasChanged && (
                    <span>Updated</span>
                )}
            </div>
        );
    }
}