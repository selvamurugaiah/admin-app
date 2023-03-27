import React, { useState } from "react";
import '../App.css';
import {IoIosPerson} from "react-icons/io"
import { AiFillSetting, AiOutlineFolder, AiOutlineTool } from "react-icons/ai";
import { useNavigate } from "react-router";

export default function LogIn(){
    const [open,setopen] = useState(false);
    const data = ["Profile","Setting","Activity Log","Logout" ]
    return(
            <div className="name">

      <button 
      className="btn"
      onClick={()=>setopen(!open)} >
      Douglas McGee
     </button><IoIosPerson/>
    
     { 
     open && (

        <div className="data">
         
        {
          data.map((data)=>(
              <p className="value"  key={data}>{data}</p>
          ))
        }
       
      </div>

      )}
       
      </div>
       
    )
}

export function ComponentsData(){
  const [utility,setutility]= useState(false)
  const navigate = useNavigate();

  return(
    <div className="com-data">

    <button 
    className="com-btn"
    onClick={()=>setutility(!utility)}>
      <AiFillSetting/>{" "}Components
   </button>
  
   { 
   utility && (

      <div className="new-data">
       
            <button onClick={()=>navigate("/components/buttons")} className="btn-clr">Buttons</button>
            <button onClick={()=>navigate("/components/cards")} className="btn-clr">Cards</button>
     
    </div>

    )}
     
    </div>
  )
}



export function UtilitiesData(){
  const [buttons,setbutton]= useState(false)
  const navigate = useNavigate()
  return(
    <div className="com-data">

    <button 
    className="com-btn"
    onClick={()=>setbutton(!buttons)}>
      <AiOutlineTool/>{" "}utility
   </button>
  
   { 
   buttons && (

      <div className="new-data">
       
            <button onClick={()=>navigate("/colors")} className="btn-clr">Colors</button>
            <button onClick={()=>navigate("/borders")} className="btn-clr">Borders</button>
            <button onClick={()=>navigate("/animation")} className="btn-clr">Animation</button>
            <button onClick={()=>navigate("/others")} className="btn-clr">Others</button>
     
    </div>

    )}
     
    </div>
  )
}
export function  PagesData(){
  const [buttons,setbutton]= useState(false)
  const navigate= useNavigate()
  return(
    <div className="com-data">

    <button 
    className="com-btn"
    onClick={()=>setbutton(!buttons)}>
    <AiOutlineFolder/> {" "}Pages
   </button>
  
   { 
   buttons && (

      <div className="new-data">
       
            <button onClick={()=>navigate("/pages/login")} className="btn-clr">Login</button>
            <button onClick={()=>navigate("/pages/register")} className="btn-clr">Register</button>
            <button onClick={()=>navigate("/pages/forgot")} className="btn-clr">ForgotPassword</button>
            <button onClick={()=>navigate("/pages/error")} className="btn-clr">ErrorPage</button>
            <button onClick={()=>navigate("/pages/blank")} className="btn-clr">BlankPage</button>
     
    </div>

    )}
     
    </div>
  )
}