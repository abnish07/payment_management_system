import React from 'react'
import {AppContext} from '../utils/AppProvider'
import {Redirect} from 'react-router-dom'

class MonthlyIncome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            monthlyAmount:'',
            isIncome: false
         }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleIncome=()=>{
        const {addIncome}= this.context;
        let money= {...this.state};
        
        addIncome(money)
        alert('Monthly Income Added Successfully')
        this.setState({
            isIncome: !this.state.isIncome
        })
    }

    render() { 
        const {income, users} = this.context;
        const {username, monthlyAmount, isIncome} = this.state
        // console.log(income)
        return ( 
            <div>

        {isIncome?<Redirect to="/expences"/>:<Redirect to="/income"/>}

                <div className='row offset-3 mt-3'>
                <div className="col-4">
      <label htmlFor="inputState">Select User</label>
      <select onChange={this.handleChange} name="username" value={username} className="form-control">
          
            {users.map(item=>(
                <option key={item} value={item}>{item}</option>
            ))}
      </select>
      </div>

            <div className=" mb-3 col-4">
      <label htmlFor="inputState">Enter the Income</label>
                
                <input name="monthlyAmount" onChange={this.handleChange} value={monthlyAmount} type="number" className="form-control" placeholder="enter the monthly amount"/>
            </div>
            <div>
            <button className="btn btn-primary mt-4 p-2" onClick={this.handleIncome}>Add Income </button></div>
</div>
            </div>
         );
    }
}
 
export default MonthlyIncome;
MonthlyIncome.contextType = AppContext;