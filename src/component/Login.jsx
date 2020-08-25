import React from 'react';
import axios from 'axios';
import Signup from './Signup';
import style from './Login.module.css'
import AppProvider, { AppContext } from '../utils/AppProvider'
import {Redirect} from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            userData: [],
            toggleForm: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        const { username, password } = this.state
        if (username === '' && password === '') {
            alert('Please fill the form')
        }
        else {

            const validLogin =
                axios.post("http://localhost:8080/auth/login", {
                    username: username,
                    password: password
                })
                    .then(res =>
                        console.log(res),
                        alert("Login Sucessful"),
                        // <Redirect to="/"/>
                        )
                        .catch(error =>
                            console.log(error),
                            
                            
                            )
        }

    }

    handleToggleForm = () => {
        this.setState({
            toggleForm: !this.state.toggleForm
        })
    }

    // componentWillUnmount(){

    //     this.toggleAuth()
    // }

    render() {
        console.log(this.state.toggleForm)
        const { username, password } = this.state
        // console.log(username, password)
        // const { isAuth } = this.props

        const { isAuth } = this.context

        // return (
        // <ThemeContext.Consumer>
        // {(theme) => (
        // <AuthContext.Consumer>

        // {(value) => {
        // console.log('console inside value', value)
        // const { isAuth, toggleAuth } = value
        // const { isLightMode, toggleTheme, light, dark } = theme
        // console.log(theme.toggleTheme)
        // const style1 = theme.isLightMode ? "light" : "dark"
        // if (isAuth) {
        // return (
        // <div>
        // alert("Login Successful")
        // <Redirect to="/products" />
        // </div>
        // )
        // }
        return (
            <div>
            {/* <div style={style1}>
                {isAuth?"LoggedIn":"LoggedOut"}
            </div> */}

            <div>
                {this.state.toggleForm ?
                    <form className="p-3 offset-3 col-4" >
                        <h2 className="text-center">Sign In Form</h2>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input name="username" value={username} onChange={this.handleChange} type="email" className="form-control" required />

                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input name="password" value={password} onChange={this.handleChange} type="password" className="form-control" required />
                        </div>

                        <div className="text-right m-2">
                            <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Login</button>
                        </div>
                        <div className="text-right">
                            <button onClick={this.handleToggleForm} className="btn btn-primary">New User/ SignUp</button>
                        </div>
                    </form>
                    : <Signup toggleForm={this.state.toggleForm} handleToggleForm={this.handleToggleForm} />}
            </div>
            </div>
        )

    }
}
export default Login;
Login.contextType = AppProvider;
