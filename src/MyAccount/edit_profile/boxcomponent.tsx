import "./edit_profile.css"

const boxcomponent:any= (box:any)=>{ 
    return(
        
        <div onClick={()=>{(sessionStorage.setItem("companyid",box.box.id) ); sessionStorage.setItem("compname",box.box.name)}} className="flexelement">
            <img style={{ width: "2.5vw", height: "2.5vw", marginRight:"1vw"}} src={box.box.logo} alt="" />
           <span> {box.box.name} </span>
        </div>
    )
}

export default boxcomponent;