import React from 'react';
import {Redirect} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';

class LoginSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            toggleForm: false
         }
    }



    render() { 
        return ( 
            <div className="mt-5 mb-5">
                <Login />
            </div>
         );
    }
}
 
export default LoginSignup;
