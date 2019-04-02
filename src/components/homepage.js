import React, { Component } from 'react';

class loginpage extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={{textAlign: 'left'}}>
                <input type="text"/><br/><br/>
                Password:<br/>
                <input type="text"/><br/><br/>
                
                <input type="checkbox"/><br/>
                Remember me<br/><br/>

                <button onClick={() => this.props.handler('LoginPage')}>Log in</button><br/>
                <div onClick={() => this.props.handler('SignUp')}>Sign Up</div><br/>
                <div onClick={() => this.props.handler('ForgotPass')}>Forgot Password</div>
            </div>
        )
    }
}

export default loginpage