import React, { useState } from "react";
import '../App.css';
import {IoIosPerson} from "react-icons/io"

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