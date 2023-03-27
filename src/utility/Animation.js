import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import BaseApp from "../Base/base";

export default function Animation(){
    return(
        <BaseApp>
        <div className="uti-head">
         
        <h2>Animation Utilities</h2>
         <p>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. 
            The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>

        </div>
        <div className="animation">
            <h3 className="heading">Grow In Animation Utility</h3>
            <p style={{color:'red'}}>.animated--grow-in</p>
            <p style={{opacity:0.5}}>Navbar Dropdown Example:</p>
            <h2 style={{opacity:0.6}}>Navbar</h2><AnimationData/>
            <p style={{fontSize:15}}>Note: This utility animates the CSS transform property,
                 meaning it will override any existing transforms on an element being animated! In this theme,
                 the grow in animation is only being used on dropdowns within the navbar.</p>
        </div>
        <div className="animation">
            <h3 className="heading">Fade In Animation Utility</h3>
            <p style={{color:'red'}}>.animated--fade-in</p>
            <p style={{opacity:0.5}}>Navbar Dropdown Example:</p>
            <h2 style={{opacity:0.6}}>Navbar</h2><AnimationData/>
            <p style={{fontSize:15}}>Note: This utility animates the CSS opacity property, meaning it will override any existing opacity on an element being animated!</p>
        </div>
      

        </BaseApp>
    )
}


export function AnimationData(){
    const [utility,setutility]= useState(false)
    const navigate = useNavigate();
  
    return(
      <div className="com-data">
  
      <button 
      className="com-btn"
      onClick={()=>setutility(!utility)}>
       Dropdown
     </button>
    
     { 
     utility && (
  
        <div className="new-data">
         
              <button className="btn-clr">Action</button>
              <button className="btn-clr">Another Action</button>
              <button className="btn-clr">Something else here</button>       
      </div>
  
      )}
       
      </div>
    )
  }
  