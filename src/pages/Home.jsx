import React from "react";
import './Home.css'
const Home=()=>
{
  return(
    <div className="start">
        <div className="left">
            <div className="topBar">
                <div className="topBarLeft">
                   <label className="lable">Language</label>
                   <input type="text"/>
                </div>
                <div className="topBarRight">
                      <button className="runbtn">Run</button>
                      <button className="clrbtn">Clear</button>
                      <button className="cmtbtn">AddComments</button>
                      <button className="gitbtn">AddGithub</button>
                </div>
            </div>
            <h1>Input Field</h1>
        </div> 
        <div className="right">
            <div className="top">

            </div>
            <div className="bottom">

            </div>
        </div>
    </div>
  )
}

export default Home;