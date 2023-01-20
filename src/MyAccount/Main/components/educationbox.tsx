import React from "react";
import "../main.css"

const EducationBox:any = (box:any) => {
    return <div className="expbox">
        <img src={box.box.school_data.logo} alt="logo"/>
        <div>
        <p style={{fontWeight: '700',fontSize: '1.7vw',color:"F5F5FA"}}>{box.box.school_data.name}</p>
        <p style={{fontWeight: '700',fontSize: '1.2vw',color:"#E6E6EB"}}>{box.box.degree} - {box.box.field_of_study} </p>
        <p style={{fontWeight: '400',fontSize: '1.2vw',color:"#EBEBF0"}}>{box.box.start_date}  - {box.box.end_date} </p>
        <p style={{fontWeight: '400',fontSize: '1vw',color:"#EBEBF0"}}>Grade - {box.box.grade} </p>
        </div>
    </div>
}

export default EducationBox;