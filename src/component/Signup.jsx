import React from 'react';
import { Redirect } from 'react-router-dom';
import style from './Login.module.css'
import axios from 'axios'
import Login from './Login'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            mobile:'',
            description:'',
            userData: [],
            // toggleForm: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignUp = (e) => {
        e.preventDefault()
      
        const { name, username, email, password, mobile, description } = this.state
       
        const validSignUp = axios.post("http://localhost:8080/auth/register",{
            name: name,
            username: username,
            email: email,
            password: password,
            mobile: mobile,
            description: description
        })
        .then(res=>
            this.setState({
                // toggleForm: !this.state.toggleForm
            })
            )
            .catch(error=>{
                console.log(error)
            })

            this.setState({
                name: "",
                username: "",
                email: "",
                password: '',
                mobile: '',
                description: ''
            })
            // this.props.history.push('/login')
    }

 
    // componentWillUnmount(){

    //     this.toggleAuth()
    // }

    render() {
        console.log(this.state)
        const { name, username, email, password, mobile, description } = this.state
        // console.log(name, username, email, password, mobile, description)

        // return (
            // <ThemeContext.Consumer>
                // {(theme) => (
                    // <AuthContext.Consumer>

                        // {(value) => {
                            // console.log('console inside value', value)
                            // const { isAuth, toggleAuth, isLightMode } = value
                            // if (this.state.toggleForm) {
                            //     return (
                            //         <div>
                            //             <Redirect to="/login" />
                            //         </div>
                            //     )
                            // }
                            return (

                                <div>

                                    <form className="p-3 offset-3 col-4">
                                        <h2 className="text-center">SignUp Form</h2>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input name="name" value={name} onChange={this.handleChange} type="text" className="form-control" id="username" required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="username">User Name</label>
                                            <input name="username" value={username} onChange={this.handleChange} type="text" className="form-control" id="username" required/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email address</label>
                                            <input name="email" value={email} onChange={this.handleChange} type="email" className="form-control" required/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input name="password" value={password} onChange={this.handleChange} type="password" className="form-control" required/>
                                        </div>


                                        <div className="form-group">
                                            <label htmlFor="mobile">Mobile</label>
                                            <input name="mobile" value={mobile} onChange={this.handleChange} type="number" className="form-control" maxLength="10" maxLength="10" required/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="description">Description</label>
                                            <input name="description" value={description} onChange={this.handleChange} type="text" className="form-control" />
                                        </div>


                                        <div>
                                           
                                            <button type="button" className="btn btn-primary mr-3" onClick={this.handleSignUp}>Sign Up</button>
                                            <button type="button" className="btn btn-primary" onClick={this.props.handleToggleForm}>Login</button>

                                        </div>
                                     
                                    </form>
                                </div>
                            )
                        // }}
                    // </AuthContext.Consumer>
                // )}

            // </ThemeContext.Consumer>
        // )
    }
}
export default Signup;
