import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { toast } from 'react-toastify';
function Home() {
  const lists = useSelector(state => state)
  const dispatch = useDispatch();

  const deleteStudent=(id)=>{
    dispatch({type:"DELETE_STUDENT",payload:id})
    toast.success("student details deleted successfully!")
  }
    return (
        <div className="container">
          <h1>Students Records Detail List</h1>
            <div className="row">
                <div className="col-md-12 my-5 text-right">
                    <Link to="/add" className="btn btn-success text-white">Add student</Link>
                   </div>
                   <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-info text-white">
              <tr>
                <th scope="col">Roll No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">PhoneNumber</th>
                <th scope="col">Address</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {lists.length > 0 ? (
                lists.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.mobile}</td>
                    <td>{contact.address}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-sm btn-primary m-2"
                      >
                        Edit
                      </Link> 
                      <button
                        type="button"
                        onClick={()=>deleteStudent(contact.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
            </div>
        </div>
    )
}

export default Home
