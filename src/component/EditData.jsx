import React from 'react'
import { AppContext } from '../utils/AppProvider';
// import {connect} from 'react'
import { Link, Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import Home from './Home'
import {Redirect} from  'react-router-dom'

export class EditData extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            itemName:'',
            amount:'',
            userName:'',
            category:'',
            type:'',
            date:'',
            totalAmount:'',
            id:'',
            isSave: true
         }
    }

    componentDidMount(){
        let { id } = this.props.match.params
        let item = this.context.data.find(item=> item.id === id)
        this.setState({
            ...item
        })
    }
   
    handleChange=(e)=>{
        this.setState({

            [e.target.name]: e.target.value
        })
    }


    updateData=( data)=>{
        const value = this.props.match.params.id
        const {handleUpdate} = this.context

        const {itemName, userName, amount, category, type, date, id}= this.state
        const update = data.filter(item=>(
          
          item.id===value? ((item.itemName= itemName),
          (item.userName = userName),
          (item.amount = amount),
          (item.category = category),
          (item.type = type),
          (item.date = date),
          (item.id = value)):true
          
          )
          
          )
          handleUpdate(update, value)
        
      this.props.history.push('/expences');

    }

    handleCancle=()=>{
       
      this.props.history.push('/expences');
    }

    render() { 
        const {users, category, type, data, income}= this.context
        const { itemName, amount, date, userName, isSave } = this.state
        // console.log(data)
       
        return ( 
            <div>
            
                <h2 className='mt-4 text-center'>Edit Products</h2>
            <div className="m-4">
  <div className="form-row ">
    <div className="form-group col-md-4">
      <label htmlFor="item">Item Name</label>
      <input onChange={this.handleChange} value={itemName} name="itemName" type="text" className="form-control" placeholder="Enter the item name"/>
    </div>

    <div className="form-group col-md-4">
      <label htmlFor="amount">Amount</label>
      <input onChange={this.handleChange} value={amount} name="amount" type="number" className="form-control" placeholder="Enter the Amount"/>
    </div>

    <div className="form-group col-md-4">
      <label htmlFor="date">Date</label>
      <input onChange={this.handleChange} value={date} name="date" type="date" className="form-control"/>
    </div>
  </div>
 
    <div className="form-group row">
    <div className="col-4">
      <label htmlFor="inputState">User Name</label>
      <select onChange={this.handleChange} name="userName" className="form-control">
            {users.map(item=>(
                <option key={item} value={item}>{item}</option>
            ))}
      </select>
      </div>

        <div className="col-4">
      <label htmlFor="inputState">Category</label>
      <select onChange={this.handleChange} name="category" className="form-control">
            {category.map(item=>(
                <option key={item} value={item}>{item}</option>
            ))}
      </select>
      </div>

      <div className="col-4">
      <label htmlFor="inputState">Type</label>
      <select onChange={this.handleChange} name="type" className="form-control">
            {type.map(item=>(
                <option key={item} value={item}>{item}</option>
            ))}
      </select>
      </div>
    </div>

    <div className="text-center">
       
        <button className="btn btn-primary mr-3" onClick={()=>this.updateData( data)}>Save</button>

        <button className="btn btn-primary" onClick={this.handleCancle}>Cancle</button>
    </div>
    </div>

    </div>
         );
    }
}
 
EditData.contextType = AppContext;
