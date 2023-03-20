

import { Badge, Space } from "antd";
import React from "react";
import { Button } from "react-bootstrap";
import {BellFilled,MailOutlined} from "@ant-design/icons"
import LogIn from "./login";
import {AiFillDashboard,AiOutlineTool,AiFillSetting,AiOutlineFolder } from "react-icons/ai";
import { ImWink2} from "react-icons/im";

import {BsTable } from "react-icons/bs";
import { SiSoundcharts} from "react-icons/si";
import {RiSearchLine} from "react-icons/ri"
import { useHistory } from "react-router-dom";

function BaseApp({children}){
    //const histrory = useHistory()
  
    return(
        <div className="Container">
       <div className="column">
        <h4 className="heading"><ImWink2/>SB ADMIN <sup>2</sup></h4>
        <div className="row">
       <button><AiFillDashboard/>Dashboard</button>
       <hr/>
       </div>
       <p>INTERFACE</p>
       <div className='components'>
      <AiFillSetting/>  <select>
            <option className="style" selected disabled>CUSTOM COMPONENTS:</option><br/>
            <option className="none" selected disabled>Components</option>
            <option>Buttons</option>
            <option>Cards</option>
            </select>
       </div><br/>
       <div>
       <AiOutlineTool/><select>
            
            <option className="style" selected disabled>CUSTOM UTILITIES:</option>
            <option className="none" selected disabled>Utilities</option>
            <option>Colors</option>
            <option>Borders</option>
            <option>Animation</option>
            <option>Other</option>
            </select>
        
       </div>
       <hr/>
       <p>ADDONS</p>
       <div className="addons">
            <AiOutlineFolder/><select>
            
            <option className="style" selected disabled>LOGIN SCREENS:</option>
           
            <option>Login</option>
            <option>Register</option>
            <option>Forget Password</option>
            <option className="style" selected disabled>OTHER PAGES:</option>
            <option className="none" selected disabled>Pages</option>
            <option>404 Pages</option>
            <option>Blank Pages</option>
            </select>

       </div><br/>
       <div className="Charts">

       <SiSoundcharts/><button>Charts</button>

       </div><br/>
       <div className="Charts">

   <BsTable/><button>Tables</button>
     <div className="top-bar">
     <div className="header">
    <input type="text"  className="search" placeholder="Search for" />

   </div>
   <div>
    <Space className="notification">

       <Badge count={3}>
        <BellFilled style={{fontSize:20}}/>
        </Badge><br/><br/>
        <Badge count={7}>
        <MailOutlined style={{fontSize:20}}/>
        </Badge>
    </Space>
   </div>
   <div>
       <LogIn/>

   </div>
    
     </div>
  

   </div>
     
       </div>
       <div className="children">{children}
           <footer>
            <div>Copyright © Your Website 2021</div>
            
           </footer>
           </div>
   
        </div>
        
    )
}

export default BaseApp