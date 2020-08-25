import React from 'react';
import { AppContext } from '../utils/AppProvider';
import { v4 as uuidv4 } from 'uuid';

class AddCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            isNewCategory: false,
         }
    }

    handleCategory=()=>{
        const {addCategory} = this.context
      
        let newCategory = this.state.name
        addCategory(newCategory)
        this.setState({
            isNewCategory: !this.state.isNewCategory
        })
        this.props.history.push('/expences');
    }


    render() { 
        const {category, addCategory}= this.context
        const {name} = this.state
        console.log(this.state.name)
        return ( 
            <div className="row mt-4 offset-4">
            <div className="form-group col-4">
            <label htmlFor="user">Category Name</label>
            <input value={name} onChange={e=>this.setState({name:e.target.value})} type="text" className="form-control" placeholder="Enter the Category"/>

            
          </div>
              <div>
                  <button className="btn btn-primary m-4" onClick={this.handleCategory}>Add Category</button>
              </div>
             
              </div>
         );
    }
}
AddCategory.contextType = AppContext;
 
export default AddCategory;