import React from "react";
import "../main.css"

const CourseBox:any = (box:any) => {
    if(box.box.organisation_data == null)
    var org_name= ""
    else 
    org_name = box.box.organisation_data.name
    return <div className="expBox">
        <div>
        <p style={{fontWeight: '700',fontSize: '1.7vw'}}>{box.box.course_name}</p>
        <p style={{fontWeight: '700',fontSize: '1.2vw',color:"#E6E6EB"}}>{org_name} </p>
        <p style={{fontWeight: '400',fontSize: '1.2vw',color:"#EBEBF0"}}>Number-{box.box.course_number}</p>
        </div>
    </div>
}

export default CourseBox;