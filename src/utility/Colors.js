import React from "react";
import BaseApp from "../Base/base";
import "./new.css"

export default function Colors(){
    return(
        <BaseApp>
        
        <div className="uti-head">
        <h2>Color Utilities</h2>
         <p>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. 
            The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
           <div className="uti-container">
            <h3 className="heading">Custom Text Color Utilities</h3>
          
             <p className="clr-1">.text-gray-100</p>
             <p className="clr-1">.text-gray-200</p>
             <p className="clr-1">.text-gray-300</p>
             <p className="clr-1">.text-gray-400</p>
             <p className="clr-2">.text-gray-500</p>
             <p className="clr-2">.text-gray-600</p>
             <p className="clr-2">.text-gray-700</p>
             <p className="clr-2">.text-gray-800</p>
             <p className="clr-2">.text-gray-900</p>
           </div>
           <div className="font-size">
            <h2 className="heading">Custom Font Size Utilities</h2>
              <p className="size-1">.text-xs</p>
              <p className="size-2">.text-lg</p>
           </div>
           <div className="gradient">
            <h2 className="heading">Custom Background Gradient Utilities</h2>
            <p className="primary">.bg-gradient-primary</p>
            <p className="secondary">.bg-gradient-secondary</p>
            <p className="success">.bg-gradient-success</p>
            <p className="info">.bg-gradient-info</p>
            <p className="warning">.bg-gradient-warning</p>
            <p className="danger">.bg-gradient-danger</p>
            <p className="light">.bg-gradient-light</p>
            <p className="dark">.bg-gradient-dark</p>

           </div>
           <div className="uti-background">
            <h3 className="heading">Custom Text Color Utilities</h3>
          
             <p className="beclr-1">.bgt-gray-100</p>
             <p className="beclr-2">.bg-gray-200</p>
             <p className="beclr-3">.bg-gray-300</p>
             <p className="beclr-4">.bg-gray-400</p>
             <p className="beclr-5">.bg-gray-500</p>
             <p className="beclr-6">.bg-gray-600</p>
             <p className="beclr-7">.bg-gray-700</p>
             <p className="beclr-8">.bgt-gray-800</p>
             <p className="beclr-9">.bg-gray-900</p>
           </div>
        </div>
        

        </BaseApp>
    )
}