import React from "react";
import {Routes , Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

// pages 
import CreateUser from "./pages/createUser/CreateUser";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
const App = () => {
    return(
        <div>
            <Navbar/>
             <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/createUser" element={<CreateUser/>}/>
                <Route path="/users" element={<Users/>}/>
             </Routes>
        </div>
    )
}
export default App;