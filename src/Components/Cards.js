import BaseApp from "../Base/base";

export default function Cards(){

      
    return(
        <BaseApp>
        <div className="Cards">
         
                <div>
            <h1 className="head-cards">Cards</h1>
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
            </div>
            <div className="box">
            <div className="card-des">
                <h3 className="h-card">Default Card Example</h3>
                <p>This card uses Bootstrap's default styling with no utility classes added.
                 Global styles are the only things modifying the look and feel of this default card example.</p>

            </div>
            <div className="card-des">
                <h3 className="h-card">Basic Card Example</h3>
                <p>The styling for this basic card example is created by using default Bootstrap utility classes. 
                    By using utility classes, 
                    the style of the card component can be easily modified with no need for any custom CSS!</p>

            </div>
            </div>
            <div className="box">
            <div className="card-des">
                <h3 className="h-card">Default Card Example</h3>
                <p>This card uses Bootstrap's default styling with no utility classes added.
                 Global styles are the only things modifying the look and feel of this default card example.</p>

            </div>
            <div className="card-des">
                <h3 className="h-card">Basic Card Example</h3>
                <p>The styling for this basic card example is created by using default Bootstrap utility classes. 
                    By using utility classes, 
                    the style of the card component can be easily modified with no need for any custom CSS!</p>

            </div>
            </div>
            </BaseApp>
)}