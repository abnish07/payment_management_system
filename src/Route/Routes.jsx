import React from 'react'
import { Route, Switch } from "react-router-dom";
import MonthlyIncome from '../component/MonthlyIncome'
import {EditData} from '../component/EditData'
import AddCategory from '../component/AddCategory'
import AddUser from '../component/AddUser'
import Report from '../component/Report'
import Home from '../component/Home'
import LoginSignup from '../component/LoginSignup'
import Expences from '../component/Expences'

function Routes(){
    return (
        <div>
            <Switch>
            <Route exact path='/' exact component={Home}></Route>
            <Route path='/income'component={MonthlyIncome}></Route>
            <Route path='/add-category' component={AddCategory }></Route>
            <Route path='/loginsignup' component={LoginSignup }></Route>
            <Route path='/expences' component={Expences }></Route>
            <Route path='/add-user' component={AddUser }></Route>
            <Route path='/report' component={Report }></Route>
            <Route exact path='/:id' render={props=><EditData {...props}/>}></Route>
            </Switch>
        </div>
    )
}

export default Routes