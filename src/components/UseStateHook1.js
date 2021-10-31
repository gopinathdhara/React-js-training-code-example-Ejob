import React,{useState} from 'react'
const UseStateHook1=()=>{
    const [uname,setName]=useState("Sudip")
    const [uage,setAge]=useState(24)
    const [uemail,setEmail]=useState("sudip@gmail.com")
    const [uloc,setLoc]=useState("")
    const [ugender,setGender]=useState("")
    const [unameResult,setNameResult]=useState("")
    const [uageResult,setAgeResult]=useState(0)
    const [uemailResult,setEmailResult]=useState("")
    const [ulocResult,setLocResult]=useState("")
    const [ugenderResult,setGenderResult]=useState("")

    //##update state onchange ####
    const stateUpdate=(e)=>{
        if(e.target.name=="uname"){
            setName(e.target.value)
        }
        if(e.target.name=="uage"){
            setAge(e.target.value)
        }
        if(e.target.name=="uemail"){
            setEmail(e.target.value)
        }
        if(e.target.name=="uloc"){
            setLoc(e.target.value)
        }
        if(e.target.name=="ugender"){
            setGender(e.target.value)
        }
    }
    //########
    const showResult=()=>{
        setNameResult(uname);
        setAgeResult(uage)
        setEmailResult(uemail)
        setLocResult(uloc)
        setGenderResult(ugender)
    }

    return(
        <>
        <div class="col-sm-4" >
            <h3>Use state hook functional component</h3>
            <p>
                <input type="radio" name="ugender" value="Male" onChange={stateUpdate}/>Male
                <input type="radio" name="ugender" value="Female" onChange={stateUpdate}/>Female
                             
            </p>
            <p><input type="text" name="uname" value={uname}  onChange={stateUpdate} class="form-control"/></p>
            <p><input type="number" name="uage" value={uage}  onChange={stateUpdate} class="form-control"/></p>
            <p><input type="text" name="uemail" value={uemail}  onChange={stateUpdate} class="form-control"/></p>
           
            <p>
                <label> Location: </label> 
                    <select class="form-control" name="uloc" id="uloc" onChange={stateUpdate}>
                    <option value="">Select</option>
                    <option value="kolkata">kolkata</option>
                    <option value="howrah">howrah</option>
                    <option value="noida">noida</option>
                    <option value="bangalore">bangalore</option>
                    </select>
            </p>
             <p><input type="submit" value="Register"  class="btn btn-success" onClick={showResult}/></p>
            <div style={{border:'2px solid #ccc'}}>
                <p>Gender : {ugenderResult}</p>
                <p>Name : {unameResult}</p>
                <p>Age : {uageResult}</p>
                <p>Email : {uemailResult}</p>
                <p>Location : {ulocResult}</p>
                
            </div>
        </div>
        </>
    )
}
export default UseStateHook1;