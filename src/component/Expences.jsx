import React from 'react'
import { AppContext } from '../utils/AppProvider';
// import {connect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

class Home extends React.Component {
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
            
            isTable: true
         }
    }

    handleChange=(e)=>{
        this.setState({

            [e.target.name]: e.target.value
        })
    }

    handleAdd=()=>{
        const {addData, income} = this.context;
        let payload= {...this.state, id: uuidv4(), income: income}
        addData(payload)

        this.setState({
          isTable: false
        })
    }

    handleDelete=(id)=>{
        const {removeItem} = this.context
        removeItem(id)
    }
    
    // handleEdit=(id)=>{

    // }

    render() { 
        const {users, category, type, data, income}= this.context
        const { itemName, amount, date, isTable } = this.state
        // let payload= {...this.state}
        // console.log("userdata"+this.state.userData)
        // console.log( this.state.totalAmount)
        // console.log( data.category)

        return ( 
            <div>
            <div className="m-4">
  <div className="form-row text-white ">
    <div className="form-group col-md-4 ">
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
 
    <div className="form-group row text-white">
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
        <button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
    </div>
    </div>
              {data.length<=0?<div></div>:
    <div>
     <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Item Name</th>
      <th scope="col">Amount</th>
      <th scope="col">User Name</th>
      <th scope="col">Category</th>
      <th scope="col">Type</th>
      <th scope="col">Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
    <tbody>
  {this.context.data.map(item=>(
            <tr key={uuidv4()}>
            {/* <td>{item.key}</td> */}
            <td >{item.itemName}</td>
            <td >{ item.amount}</td>
            <td >{item.userName}</td>
            <td>{item.category}</td>
            <td style= {item.type==="expenses"?{color: "red"}:{color:"green"}}><strong>{item.type}</strong></td>
            <td >{item.date}</td>
            <td ><button onClick={()=>this.handleDelete(item.id)} className='btn btn-danger'>Delete</button></td>
            <td ><Link to={`/${item.id}`}><button className='btn btn-success'>Edit</button></Link> </td>
           </tr>
        )
        )}
        </tbody>
</table>

    </div>}
    </div>
         );
    }
}
 
Home.contextType = AppContext;
export default Home;
