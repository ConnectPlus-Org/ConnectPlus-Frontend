import "../edit_profile/edit_profile.css"

const Skillcomponent:any= (box:any)=>{ 
    return(
        <div onClick={()=>{(localStorage.setItem("skillid",box.box.id) ); localStorage.setItem("skillname",box.box.type)}} className="flexelement">
            {box.box.type}
        </div>
    )
}

export default Skillcomponent;