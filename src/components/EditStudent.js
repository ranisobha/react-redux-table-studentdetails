import React,{useState,useEffect} from 'react'
import { Link,useParams,useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { toast } from "react-toastify";
function EditStudent() {

    const [iD,setID] = useState("")
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [mobile,setMobile] = useState("")
const navigate = useNavigate();
    const dispatch = useDispatch()
    const {id} = useParams();
    const lists = useSelector(state => state)
        const currentContact = lists.find(
            (contact) => contact.id === parseInt(id)
          );
   

    useEffect(()=>{
        if(currentContact){
            setID(currentContact.id)
        setName(currentContact.name)
        setEmail(currentContact.email)
        setAddress(currentContact.address)
        setMobile(currentContact.mobile)
        }
    },[currentContact])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const checkEmailexits=lists.filter((list) => list.id !== parseInt(id) &&
        list.email === email );

        const checkMobileexits=lists.filter((list) => list.id !== parseInt(id) &&
        list.mobile === mobile)

        if(!iD || !name || !address || !mobile|| !email){
            return toast.warning("please enter fill the fields")
        }
        if(checkEmailexits.length > 0){
            return toast.error("This email is already exits! ")
        }
        if(checkMobileexits.length > 0){
            return toast.error("This mobile number already exits!")
        }
        const data =
            {
                id:currentContact.id,
                name,
                address,
                email,
                mobile
            }
            dispatch({type: "UPDATE_STUDENT",payload:data})
            toast.success("Student details succesfully updated")
            navigate('/')
        

    }
    return (
        <div>  
        
            {currentContact ? ( 
                <>
                <div className="container">
                <h5 className="display-6 my-2 text-center">Edit Student</h5>
                 <div className="row">
                     <div className="col-md-6 shadow  mx-auto p-5"> 
                     <form onSubmit={handleSubmit}>
                     <div className="form-group m-3">
                             <input type="number" 
                             placeholder="Please enter roll number..." value={iD} onChange={(e)=>setID(e.target.value)} className="form-control" />
                             </div>
                         <div className="form-group m-3">
                             <input type="text" placeholder="Please enter name" value={name} onChange={(e)=>setName(e.target.value)}
                             className="form-control" />
                             </div>
                             <div className="form-group m-3">
                             <input type="text" placeholder="Please enter address" 
                             value={address} onChange={(e)=>setAddress(e.target.value)}
                              className="form-control"/>
                             </div>
                             <div className="form-group m-3">
                             <input type="number" placeholder="Please enter mobile" 
                              value={mobile} onChange={(e)=>setMobile(e.target.value)}
                                className="form-control"/>
                             </div>
                             <div className="form-group m-3">
                             <input type="email" placeholder=" Please enter email" 
                             value={email} onChange={(e)=>setEmail(e.target.value)} 
                              className="form-control"/>
                             </div>
                             <div className="form-group mt-3">
                             <input type="submit" className="btn  btn-dark" value="Update Student"  />&nbsp;&nbsp;
                             
                             <Link to="/" className="btn  btn-danger" mr-3  >Cancel Student</Link>
                             </div>
                     </form>
                     </div>
                 </div>
                  </div>
                  </>
            ):( <h5 className="display-6 my-2 text-center"> Student  Roll No is not exits!{id} </h5>)}
       
           
    </div>
    )
}

export default EditStudent
