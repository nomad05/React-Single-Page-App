import React, { Component } from 'react';

class signup extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={{textAlign: 'left'}}>
                Name:<br/>
                <input type="text"/><br/><br/>
                Email:<br/>
                <input type="text"/><br/><br/>
                Password:<br/>
                (6 Characters minimum)<br/>
                <input type="text"/><br/><br/>
                Password confirmation:<br/>
                <input type="text"/><br/><br/>

                <button onClick={() => this.props.handler('LoginPage')}>Sign Up</button><br/>
                <div onClick={() => this.props.handler('LoginPage')}>Login</div><br/>
            </div>
        )
    }
}

export default signup