import "../edit_profile/edit_profile.css"

const boxcomponent:any= (box:any)=>{ 
    return(
        
        <div onClick={()=>{(sessionStorage.setItem("schoolid",box.box.id) ); sessionStorage.setItem("schoolname",box.box.name)}} className="flexelement">
            <img style={{ width: "3vw", height: "auto", marginRight:"1vw"}} src={box.box.logo} alt="" />
            {box.box.name}
        </div>
    )
}

export default boxcomponent;