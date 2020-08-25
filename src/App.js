import React from 'react';
import './App.css';
import UserInput from './component/AddUser'
import {BrowserRouter} from 'react-router-dom'
import Routes from './Route/Routes';
import AppProvider from './utils/AppProvider';
// import Home from './component/Home'
import Navbar from './Route/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppProvider>
        <Navbar />
      <Routes />
      {/* <Home /> */}
      </AppProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
