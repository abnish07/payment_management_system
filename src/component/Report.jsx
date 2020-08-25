import React from 'react'
import {AppContext} from '../utils/AppProvider'
import { v4 as uuidv4 } from 'uuid';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const reportData = [
  {
    name: 'user_1', income: 4000, expence: 2400, amt: 2400,
  },
  {
    name: 'user_2', income: 3000, expence: 1398, amt: 2210,
  },
  {
    name: 'user_3', income: 2000, expence: 9800, amt: 2290,
  },
  {
    name: 'user_4', income: 2780, expence: 3908, amt: 2000,
  },
  {
    name: 'user_5', income: 1890, expence: 4800, amt: 2181,
  },
  {
    name: 'user_6', income: 2390, expence: 3800, amt: 2500,
  },
  {
    name: 'user_7', income: 3490, expence: 4300, amt: 2100,
  },
];

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          viewDetails:[],
          userReport:'',
          amountReport:'',
          incomeReport:''

         }
     
        }
        static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    handleViewReport=()=>{
      const {data}= this.context;
      this.setState({
        userReport: data.userName,
        amountReport: data.amount,
        incomeReport: data.income
      })
    }

    render() { 
      const {data, users} = this.context;
      const {viewDetails}= this.state;
      const {userReport, amountReport, incomeReport} = this.state;
      console.log(userReport, amountReport, incomeReport)
      // console.log(data)
        return ( 
            <div >
                <div className="form-group row mt-4">

               <div className="col-4">
      <label htmlFor="inputState">Select the user</label>
      <select id="inputState" className="form-control">
        {users.map(item=>(
          <option key={uuidv4()}>{item}</option>
        ))}
      </select>
            </div>
      <div className="text-center col-3">
          <button className="btn btn-primary" onClick={this.handleViewReport}>Show Monthly Details</button>
      </div>

      <div className="text-center col-3">
          <button className="btn btn-primary" onClick={this.handleViewReport}>Show Weekly Details</button>
      </div>
      </div>
          <div>
          {data.map(item=>(
            <div>
            <div key={uuidv4()}>{item.userName}</div>
            <div key={uuidv4()}>{item.amount}</div>
            </div>
          ))}
          </div>
          <div className="offset-3 mt-5 text-primary">
          <BarChart 
        width={600}
        height={400}
        data={reportData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" className="text-white" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="income" fill="#ff0000" />
        <Bar dataKey="expence" fill="#ADFF2F" />
      </BarChart>
      </div>
            </div>
         );
    }
}
 
export default Report;
Report.contextType = AppContext;