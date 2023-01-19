import "../edit_profile/edit_profile.css"

const Skillcomponent:any= (box:any)=>{ 
    return(
        <div onClick={()=>{(sessionStorage.setItem("skillid",box.box.id) ); sessionStorage.setItem("skillname",box.box.type)}} className="flexelement">
            {box.box.type}
        </div>
    )
}

export default Skillcomponent;