import "../edit_profile/edit_profile.css"

const boxcomponent:any= (box:any)=>{ 
    return(
        
        <div onClick={()=>{(localStorage.setItem("schoolid",box.box.id) ); localStorage.setItem("schoolname",box.box.name)}} className="flexelement">
            <img style={{ width: "3vw", height: "auto", marginRight:"1vw"}} src={box.box.logo} alt="" />
            {box.box.name}
        </div>
    )
}

export default boxcomponent;