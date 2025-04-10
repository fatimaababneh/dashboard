import { useNavigate } from "react-router-dom";
import { addUser, editUser, getUserById } from "../../../APIs/UsersApis";
import "./addUserForm.css"
import {useEffect, useState} from 'react'

export const AddUserForm =({id, })=> {
  const navigate = useNavigate()
  console.log(id , 'id in form')
  const [getUser, setGetUser] = useState()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    username: '',
  });
  const fetchUsers = async () =>{
        const fullUsers = [ ...JSON.parse(localStorage.getItem('items')) ]
        console.log(fullUsers.find((val)=>val.id == id), 'hhh')
        setGetUser(fullUsers.find((val)=>val.id == id))
  }
  useEffect(()=>{
      fetchUsers()
  },[])

  useEffect(()=> {
  if(getUser){
    setFormData({
      name : getUser.name || "",
      email : getUser.email || "",
      phone : getUser.phone || "",
      company : getUser.company || "",
      website : getUser.website || "",
      username : getUser.username || "",
    })
  }},[getUser])

  const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(formData, 'formData')

    try {
    if(!id){
      let {data} =  await addUser(formData);
      let existingData= JSON.parse(localStorage.getItem('items'));
      localStorage.setItem('new', JSON.stringify([{...data,id:existingData.length+1}]));
    }else{
      if(id<=10){
      await editUser(id,formData)
      }
      let userItems = JSON.parse(localStorage.getItem('items'))
      const newUsers = userItems.map((val)=>{
        if(val.id==id) return {...val,...formData,id}
        else return val
      })
      console.log(newUsers, formData, 'userItems')
      localStorage.setItem('items', JSON.stringify(newUsers));
    }
    } catch (error) {
      console.log({error})
    }
    navigate(`/users`)
  }

  return (
    <div className='form-container'>
      <form className="form-box" onSubmit={handleSubmit}>
      <h2>{id ? 'Edit User' : 'Add User'}</h2>

      <label>Name</label>
      <input name="name" value={formData.name} onChange={handleChange} required />

      <label>Email</label>
      <input name="email" value={formData.email} onChange={handleChange} required />

      <label>Phone</label>
      <input name="phone" value={formData.phone} onChange={handleChange} required />

      <label>Username</label>
      <input name="username" value={formData.username} onChange={handleChange} required />

      <label>Company</label>
      <input name="company" value={ formData?.company?.name || formData?.company} onChange={handleChange} required />

      <label>Website</label>
      <input name="website" value={formData.website} onChange={handleChange} required />

      <button type="submit" className="submit-btn" >
          {id ? 'Update' : 'Add'} User
      </button>
      </form>
    </div>
  );
}
