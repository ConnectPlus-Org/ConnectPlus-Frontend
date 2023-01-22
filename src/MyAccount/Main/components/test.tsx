import React from "react";
import "../main.css"
const edit:string = require('../images/edit.svg').default

const TestBox:any = (box:any) => {
    if(box.box.end_date == null)
    return <div className="expbox">
        <div>
        <p style={{fontWeight: '700',fontSize: '1.7vw'}}>{box.box.organization_data.name}</p>
        <p style={{fontWeight: '700',fontSize: '1.2vw',color:"#E6E6EB"}}>{box.box.title}</p>
        <p style={{fontWeight: '400',fontSize: '1.2vw',color:"#EBEBF0"}}>Test date:{box.box.test_date}</p>
        <p style={{fontWeight: '400',fontSize: '1vw',color:"#EBEBF0"}}>Score: {box.box.score} </p>
        </div>
        <img className="editicon action" src={edit} />
    </div>
}

export default TestBox;