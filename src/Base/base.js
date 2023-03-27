

import { Badge, Space } from "antd";
import React from "react";
import { Container } from "react-bootstrap";
import {BellFilled,MailOutlined} from "@ant-design/icons"
import LogIn, { ComponentsData, PagesData, UtilitiesData } from "./login";
import {AiFillDashboard } from "react-icons/ai";
import { ImWink2} from "react-icons/im";

import {BsTable } from "react-icons/bs";
import { SiSoundcharts} from "react-icons/si";

import { Navigate, useNavigate } from "react-router";



function BaseApp({children}){
    const navigate = useNavigate();
   
  
    return(
      
            <div className="layout Container">
               <div className="nav1">
              
              <Container fluid>
                  <input className="search" placeholder="Search for..."></input>
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
              </Container>
          
               </div>
<div className="sidebar aside">
<div className="side-bar">
    <div>
<h4 className="side-heading"><ImWink2/>SB ADMIN <sup>2</sup></h4>
</div>
 <div className="row">
 <AiFillDashboard/><button onClick={()=>navigate("/")}>Dashboard</button>
<hr/>
</div>
<p>INTERFACE</p>
     <div className='components'>
   <ComponentsData/>  
    </div><br/>
    <div>
<UtilitiesData/>

{/*<select>
     
     <option className="style" selected disabled>CUSTOM UTILITIES:</option>
     <option className="none" selected disabled>Utilities</option>
     <option>Colors</option>
     <option>Borders</option>
     <option>Animation</option>
     <option>Other</option>
    </select>*/}
 
</div>
<hr/>
<p>ADDONS</p>
<div className="addons">
     <PagesData/>
     {/*<select>
     
     <option className="style" selected disabled>LOGIN SCREENS:</option>
    
     <option>Login</option>
     <option>Register</option>
     <option>Forget Password</option>
     <option className="style" selected disabled>OTHER PAGES:</option>
     <option className="none" selected disabled>Pages</option>
     <option>404 Pages</option>
     <option>Blank Pages</option>
</select>*/}

</div><br/>
<div className="Charts">

<SiSoundcharts/><button>Charts</button>

</div><br/>
<div className="Charts">

<BsTable/><button onClick={()=>navigate("others/tables")}>Tables</button>
</div>
</div>
      <div>
    <footer>
     Copyright © Your Website 2021
     
    </footer>
    </div>

            <hr />
               </div>
               <div className="main">{children}</div>
            </div>
        )
    }
            

export default BaseApp
