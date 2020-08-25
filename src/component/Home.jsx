import React from 'react'
import style from './Home.module.css';
// import Navbar from '../Route/Navbar';
import AppProvider from '../utils/AppProvider'
import {Redirect} from 'react-router-dom'

class Home extends React.Component{
    constructor(props){
      super(props)
      this.state={
        toggleForm: false
      }
    }

    toggleChange=()=>{
      this.setState({
        toggleForm: !this.state.toggleForm
      })
    }

  render(){
    const {toggleForm} = this.state
    return (
      <div>
      <div className={style.background}>
      {/* <Navbar /> */}
      <h2 className="text-center text-white pt-5 mb-5 text-primary">Welcome to Payment Management App</h2>
          {toggleForm? <Redirect to="/loginsignup"/>:<Redirect to="/" />}
          
          
        <div className="text-center">
      <h4 className="text-center mt-5 pt-5">New User ?</h4>
          <button className="btn btn-primary mt-2 mb-5" onClick={this.toggleChange}>Register/Login</button>
          </div>
      </div>
      </div>)
    
  }
}

export default Home
Home.contextType = AppProvider;