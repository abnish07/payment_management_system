import React from 'react'
import { Link } from "react-router-dom";
function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-1 d-flex justify-content-around">

           <button style={{color:"White"}} className="btn btn-outline-success"><Link to='/'>Home</Link></button>

           <button className="btn btn-outline-success"><Link to='/income'>Add Income</Link></button>

           <button className="btn btn-outline-success"><Link to='/expences'>Expenses</Link></button>

           <button className="btn btn-outline-success"><Link to='/add-category'>Add Category</Link></button>

           <button className="btn btn-outline-success"><Link to='/add-user'>Add User</Link></button>

           <button className="btn btn-outline-success"><Link to='/report'>Report</Link></button>
            
        </nav>
    );
}

export default Navbar;