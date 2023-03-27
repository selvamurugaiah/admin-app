import React from "react";
import BaseApp from "./Base/base";
import './App.css';
import LogInPage from "./Pages/loginpage";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/forgot-password";
import Dashboard from "./childrens/Dashboard";
import Button from "./Components/button";
import Cards from "./Components/Cards";
import TablesReact from "./Table/Table";
import { Route, Routes } from "react-router";
import ErrorPage from "./Pages/ErrorPage";
import BlankPage from "./Pages/BlankPage";
import Colors from "./utility/Colors";
import Borders from "./utility/Borders";
import Animation from "./utility/Animation";
import Others from "./utility/other";

function App() {
  return (
    <div className="App">
      
       <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/components/buttons" element={<Button/>}/>
        <Route path="/components/cards" element={<Cards/>}/>
        <Route path="/pages/register" element={<Register/>}/>
        <Route path="/pages/login" element={<LogInPage/>}/>
        <Route path="/pages/forgot" element={<ForgotPassword/>}/>
        <Route path="/pages/error" element={<ErrorPage/>}/>
        <Route path="/pages/blank" element={<BlankPage/>}/>
        <Route path="/others/tables" element={<TablesReact/>}/>
        <Route path="/colors" element={<Colors/>}/>
        <Route path="/borders" element={<Borders/>}/>
        <Route path="/animation" element={<Animation/>}/>
        <Route path="/others" element={<Others/>}/>
          
       </Routes>
     </div>
  );
}

export default App;