import React from "react";
import "../main.css"

const CourseBox:any = (box:any) => {
    return <div className="expbox">
        <div>
        <p style={{fontWeight: '700',fontSize: '1.7vw'}}>{box.box.course_name}</p>
        <p style={{fontWeight: '700',fontSize: '1.2vw',color:"#E6E6EB"}}>{box.box.organization_data.name}</p>
        <p style={{fontWeight: '400',fontSize: '1.2vw',color:"#EBEBF0"}}>Number-{box.box.course_number}</p>
        </div>
    </div>
}

export default CourseBox;