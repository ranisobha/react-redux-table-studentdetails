import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
function AddStudent() {
    const [id,setID] = useState("")
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [mobile,setMobile] = useState("")
    const lists = useSelector(state => state)
    const dispatch=useDispatch();
    const navigate = useNavigate()
    console.log(lists)

    const handleSubmit = (e)=>{
        e.preventDefault();

        const checkContactEmailExists = lists.filter((list) =>
      list.email === email ? list : null
    );
    const checkContactPhoneExists = lists.filter((list) =>
      list.mobile === mobile ? list : null
    );

    if (!id || !address || !email || !name || !mobile) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkContactEmailExists.length > 0) {
      return toast.error("This email already exists!!");
    }
    if (checkContactPhoneExists.length > 0) {
      return toast.error("This phone number already exists!!");
    }
        const data =
            {
                id:lists[lists.length -1].id +1,
                name,
                address,
                email,
                mobile
            }
            dispatch({type: "ADD_STUDENT",payload:data})
            toast.success("Student details succesfully")
            navigate('/')
        
    }
    return (
        <div className="container">
            <h5 className="display-6 my-2 text-center">Add Student</h5>
            <div className="row">
                <div className="col-md-6 shadow  mx-auto p-5"> 
                <form onSubmit={handleSubmit}>
                <div className="form-group m-3">
                        <input type="text" placeholder="Please enter roll number..."
                        value={id} onChange={(e)=>setID(e.target.value)} className="form-control" />
                        </div>
                    <div className="form-group m-3">
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Please enter name..." className="form-control" />
                        </div>
                        <div className="form-group m-3">
                        <input type="text" placeholder="Please enter address..." 
                        value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control"/>
                        </div>
                        <div className="form-group m-3">
                        <input type="number" placeholder="Please enter mobile..." 
                        value={mobile} onChange={(e)=>setMobile(e.target.value)} className="form-control"/>
                        </div>
                        <div className="form-group m-3">
                        <input type="email" placeholder=" Please enter email..." value={email} onChange={(e)=>setEmail(e.target.value)}   className="form-control"/>
                        </div>
                        <div className="form-group mt-3">
                        <input type="submit" className="btn btn-block btn-success" value="Add Student"  />
                        </div>
                </form>
                </div>
            </div>
            
        </div>
    )
}

export default AddStudent
