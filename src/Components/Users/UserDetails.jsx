import { useEffect, useState } from "react";
import "./styles/userDetails.css"
import { UserButton } from "../UI/Buttons/Button";
import { useNavigate } from "react-router-dom";

export const UserDetailsContainer = ({id}) =>{
    const navigate = useNavigate()
    const [getUser, setGetUser] = useState();
    console.log(id)
    const fetchUsers = async () =>{
            const fullUsers = [ ...JSON.parse(localStorage.getItem('items')) ]
            console.log(fullUsers.find((val)=>val.id == id), 'hhh')
            setGetUser(fullUsers.find((val)=>val.id == id))
    }
    useEffect(()=>{
        fetchUsers()
    },[])
    const goToEditUser = (id) => {
        navigate(`/edit/${id}`)
    }
    return(
        <>
        <div className="user-details">
            {getUser && 
            <div className="user-details-container">
                <span className="user-details-div">
                <h3>Name: <span style={{ fontSize: '15px', fontWeight: '600' }}>{getUser.name}</span> </h3>
                <h3>Phone: <span style={{ fontSize: '15px', fontWeight: '600' }}>{getUser.phone}</span> </h3>
                <h3>Email: <span style={{ fontSize: '15px', fontWeight: '600' }}>{getUser.email}</span> </h3>
                <h3>Website: <span style={{ fontSize: '15px', fontWeight: '600' }}>{getUser.website}</span> </h3>
                <h3>UserName: <span style={{ fontSize: '15px', fontWeight: '600' }}>{getUser.username}</span> </h3>
                <h3>Company: <span style={{ fontSize: '15px', fontWeight: '600' }}>{getUser?.company?.name}</span> </h3>
                <h3>Address: <span style={{ fontSize: '15px', fontWeight: '600' }}>{getUser?.address?.city}, {getUser?.address?.street} </span> </h3>
                </span>
            </div>}
            <UserButton text={"Edit User"} onClick={()=>goToEditUser(id)}/>
        </div>
        </>
    )
}