import React from "react";
import BaseApp from "../Base/base";
import { AnimationData } from "./Animation";
import './new.css'

export default function Others(){
    return(
        <BaseApp>
        
        <div className="other-head">
        <h2>Other Utilities</h2>
         <p>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. 
            The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
            <div className="others">
           <h3 className="heading">Overflow Hidden Utilty</h3>
       <p>Use <span style={{color:'red'}}>.o-hidden </span>to set the overflow property of any element to hidden.</p>
       </div>
       <div  className="others">
            <h3 className="heading">Progress Small Utility</h3>
            <p>Normal Progress Bar</p>
               <div>
                    <p className="p-head"></p>
                    <div className="range3">.</div>
                </div>
            <p>Small Progress Bar</p>
               <div>
                    <p className="p-head"></p>
                    <div className="range3">.</div>
                </div>
            <p>Use the<span style={{color:'red'}}>. progress-sm</span>  class along with <span style={{color:'red'}}>. progress</span></p>
        </div>
        <div className="others">
            <h3 className="heading">Dropdown-No Arrow</h3><AnimationData/>
            <p>Add the<span style={{color:'red'}}>. progress-sm</span>  class alongside the <span style={{color:'red'}}>. dropdown</span></p>
        </div>
        <div className="rotate">
            <h3 className="heading">Rotation Utilities</h3>
            <p className="rot-1">.rotate-15</p><hr/>
            <p className="rot-2">.rotate-n-15</p>

        </div>
        
        </div>
    

        </BaseApp>
    )
}