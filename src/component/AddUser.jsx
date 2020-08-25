import React from 'react';
import { AppContext } from '../utils/AppProvider';
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from 'react-router-dom';

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            isAddUser: false
         }
    }
    handleUser=()=>{
        const {addUser} = this.context
      
        let newUser = this.state.name
        addUser(newUser)
        this.setState({
            isAddUser: !this.state.isAddUser
        })
    }
    render() { 
        const {users, addUser}= this.context
        const {name, isAddUser} = this.state
        console.log(this.state.name)

        
        return ( 
            <div>
            {isAddUser?<Redirect to="/income"/>:<Redirect to="/add-user"/>}
            <div className="row m-4 text-center">
            <div className="form-group col-4 offset-3">
            <label htmlFor="user"><h4>User Name</h4></label>
            <input value={name} onChange={e=>this.setState({name:e.target.value})} type="text" className="form-control text-center " placeholder="Enter the Name"/>
              <div>
                  <button className="btn btn-primary mt-3 p-2" onClick={this.handleUser}>Add User</button>
              </div>
          
          </div>
              
              </div>
              </div>
         );
    }
}
AddUser.contextType = AppContext;
 
export default AddUser;