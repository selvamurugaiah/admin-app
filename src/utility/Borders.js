import React from "react";
import BaseApp from "../Base/base";

export default function Borders(){
    return(
        <BaseApp>
         <h2>Border Utilities</h2>
         <p>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. 
            The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
        <div className="border-head">
           <div className="left-style">
            <p className="left-primary">.border-left-primary</p>
            <p className="left-secondary">.border-left-secondary</p>
            <p className="left-success">.border-left-success</p>
            <p className="left-info">.border-left-info</p>
            <p className="left-warning">.border-left-warning</p>
            <p className="left-danger">.border-left-danger</p>
            <p className="left-dark">.border-left-dark</p>
        
           </div>
           <div className="bottom-style">
            <p className="bottom-primary">.border-bottom-primary</p>
            <p className="bottom-secondary">.border-bottom-secondary</p>
            <p className="bottom-success">.border-bottom-success</p>
            <p className="bottom-info">.border-bottom-info</p>
            <p className="bottom-warning">.border-bottom-warning</p>
            <p className="bottom-danger">.border-bottom-danger</p>
            <p className="bottom-dark">.border-bottom-dark</p>
        
           </div>
 
        </div>
        

        </BaseApp>
    )
}