import React from "react";
import "./cards.css";
import BaseApp from "../Base/base";
import { BsFacebook,BsFlagFill } from 'react-icons/bs';
import {AiOutlineCheck,AiOutlineInfo,AiFillDelete,AiOutlineWarning 
,AiOutlineGoogle,AiFillFacebook,AiOutlineArrowRight} from 'react-icons/ai';
function Button() {

  return (
    <BaseApp>
    <div className="button">
    <div>
    <h2 className="startheading">Buttons</h2>
    </div>
    <div className="circle-btn">
        <h3 className="heading">Circle Buttons</h3>
        <p className="circle-des" >Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!</p>
        
        <div>
        <p className="red">.btn-circle</p>
        <button className="icons"><BsFacebook/></button>
        <button className="green"><AiOutlineCheck/></button>
        <button className="blue"><AiOutlineInfo/></button>
        <button className="yellow"><AiOutlineWarning/></button>
        <button className="red-clr"><AiFillDelete/></button>
        </div>
        <div>
        <p className="red">.btn-circle .btn-sm</p>
        <button className="icons-sm"><BsFacebook/></button>
        <button className="green-sm"><AiOutlineCheck/></button>
        <button className="blue-sm"><AiOutlineInfo/></button>
        <button className="yellow-sm"><AiOutlineWarning/></button>
        <button className="red-clr-sm"><AiFillDelete/></button>
        </div>
        <div>
        <p className="red">.btn-circle .btn-lg</p>
        <button className="icons-lg"><BsFacebook/></button>
        <button className="green-lg"><AiOutlineCheck/></button>
        <button className="blue-lg"><AiOutlineInfo/></button>
        <button className="yellow-lg"><AiOutlineWarning/></button>
        <button className="red-clr-lg"><AiFillDelete/></button>
        </div>
        
    </div>
    <div className="brand-btn">
     <h3 className="heading">Brand Buttons</h3>
     <p>Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.</p>

  <p>You can create more custom buttons by adding a new color variable in the _variables.scss file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file.

</p>
<button className="google-btn"><AiOutlineGoogle/> .btn-google</button>
<button className="fb-btn"><AiFillFacebook/> .btn-facebook</button>
    </div>

  <div className="split-btn">
    <h3 className="heading">Split Buttons With Icon</h3>
   <p>Works with any button colors, 
    just use the .btn-icon-split class and the markup in the examples below. 
    The examples below also use the .text-white-50 helper class on the icons for additional styling,
     but it is not required.</p>
     <button className="split-blue"><span className="btn-style"><BsFlagFill/></span>Split Button Primary</button>
     <button className="split-green"><span className="btn-style"><AiOutlineCheck/></span>Split Button Success</button>
     <button className="split-sky"><span className="btn-style"><AiOutlineInfo/></span>Split Button Info</button>
     <button className="split-yellow"><span className="btn-style"><AiOutlineWarning/></span>Split Button Warning</button>
     <button className="split-red"><span className="btn-style"><AiFillDelete/></span>Split Button Danger</button>
     <button className="split-grey"><span className="btn-style"><AiOutlineArrowRight/></span>Split Button Secondary</button>
    <button className="split-white"><span className="btn-style"><AiOutlineArrowRight/></span>Split Button light</button>
    
    <p>Also works with small and large button classes!</p>
  
  <button className="small"><span className="btn-style"><BsFlagFill/></span>Split Button Small</button>
  <button className="large"><span className="btn-style"><BsFlagFill/></span>Split Button Large</button>
  
  </div>
    

    </div>
      
       
   
    </BaseApp>
  );
}

export default Button;