import React , {createContext} from 'react'

export const AppContext = createContext();

class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            users:['select users','user1', 'user2'],
            category:['select category',"Home", "Rent"],
            data:[],
            type: ['select type','income', 'expenses'],
            dummy:["milk", "school", "grocery"],
            income:[],
            isAuth: false         
         }
    }

    addUser=(name)=>{
        this.setState({
            users: [...this.state.users, name]
        })
        alert('User Added Successfully')
       
    }

    addCategory=(category)=>{
        this.setState({
            category: [...this.state.category, category]
        })
        alert('Category Added Successfully')
    }

    addData=(payload)=>{
        this.setState({
            data: [...this.state.data, payload]
        })
    }

    addIncome=(money)=>{
        this.setState({
            income: [...this.state.income, money]
        })
    }

    removeItem=(id)=>{
        let deleteitem = [...this.state.data]
       let delItem = deleteitem.filter(item=>(item.id!= id))
       this.setState({
            data: delItem
       })
    }

    handleUpdate=(updatedData)=>{
        this.setState({
            data: updatedData
        })
    }

    toggleAuth=()=>{
        this.setState({
            isAuth: !this.state.isAuth
        })
    }

    render() { 
        console.log(this.state.data)
        const {addUser, addCategory, addData, addIncome, removeItem, handleUpdate, toggleAuth} = this
        const store = {...this.state, addUser, addCategory, addData, addIncome, removeItem, handleUpdate, toggleAuth}
        return ( 
            <AppContext.Provider value={store}>
                {this.props.children}
            </AppContext.Provider>
         );
    }
}
 
export default AppProvider;