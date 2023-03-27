import React from "react";
import { useHistory } from "react-router";
import { useNavigate } from "react-router";
import BaseApp from "../Base/base";
import "./Dash.css"


export default function Dashboard(){

      
    return(
        <BaseApp>
        <div className="dash">
            <div className="card">
                <div>
            <h1 className="head-des">Dashboard</h1>
            </div>
            <div className="content-blue">
            <p className="salary-1">EARNINGS(MONTHLY)</p>
                <h3>$40,000</h3>

            </div>

            <div  className="content-green">
            <p  className="salary-2">EARNINGS(ANNUAL)</p>
                <h3>$215,000</h3>

            </div>

            <div  className="content-lightblue">
            <p  className="salary-3">TASK</p>
                <h3>50%</h3>

            </div>

            <div  className="content-yellow">
            <p  className="salary-4">PENDING REQUESTS</p>
                <h3>18</h3>

            </div>
            <div className="project">
                <div className="header-style">PROJECTS</div>
                <div>
                    <p className="p-head">Server Migratiion</p>
                    <div className="range1">.</div>
                </div>
                <div>
                    <p className="p-head">Sales Tracking</p>
                    <div className="range2">.</div>
                </div>
                <div>
                    <p className="p-head">Customer Database</p>
                    <div className="range3">.</div>
                </div>
                <div>
                    <p className="p-head"> Payout Details</p>
                    <div className="range4">.</div>
                </div>
                <div>
                    <p className="p-head">Account Setup</p>
                    <div className="range5">.</div>
                </div>


            </div>
     
                

            </div>
            <div className="illustrations">
                <h4 className="header-style">Illustrations</h4>
                <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"/>
                <p className="p-card">Add some quality, svg illustrations to your project courtesy of unDraw, 
                    a constantly updated collection of beautiful svg images that you can use 
                    completely free and without attribution!</p>

                    <a href="https://undraw.co/" target="blank">Browse Illustrations on unDraw →</a>

            </div>

            <div className="card-color">
                <div className="color-1">
                    <h4>Primary</h4>
                    <h6>#4e73df</h6>

                </div>
                <div className="color-2">
                    <h4>Info</h4>
                    <h6>#36b9cc</h6>

                </div>
                <div className="color-3">
                    <h4>Danger</h4>
                    <h6>#e74a3b</h6>

                </div>

            </div>
            <div className="Development">
                <h4 className="header-style">Development Approach</h4>
                <p className="p-card">SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. 
                Custom CSS classes are used to create custom components and custom utility classes.

                 Before working with this theme,
              you should become familiar with the Bootstrap framework, especially the utility classes.</p>

 

            </div>

        </div>
        </BaseApp>
        
    )
}