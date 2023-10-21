import React from "react";
import "../main.css"
const edit:string = require('../images/edit.svg').default

const username = localStorage.getItem("username")
const viewusername = localStorage.getItem("viewusername")
const TestBox:any = (box:any) => {
    if(box.box.organisation == null)
    var org = " "
    else
    org =box.box.organization_data.name
    return <div className="expBox">
        <div>
        <p style={{fontWeight: '700',fontSize: '1.7vw'}}>{org}</p>
        <p style={{fontWeight: '700',fontSize: '1.2vw',color:"#E6E6EB"}}>{box.box.title}</p>
        <p style={{fontWeight: '400',fontSize: '1.2vw',color:"#EBEBF0"}}>Test date:{box.box.test_date}</p>
        <p style={{fontWeight: '400',fontSize: '1vw',color:"#EBEBF0"}}>Score: {box.box.score} </p>
        </div>
        {(username===viewusername)?<img  className="editicon action" src={edit} />:null}
    </div>
}

export default TestBox;