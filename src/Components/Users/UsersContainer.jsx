import SearchInputBase from "../Inputs/SearchInput";
import DataTable from "./Tables/Table"
import "./styles/userContainer.css"
import { ReactComponent as PlusIcon } from "../../Assets/Icons/plus-svgrepo-com.svg";
import { UserButton } from "../UI/Buttons/Button";
import BasicModal from "../UI/Modals/Modal";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { getUsers } from "../../APIs/UsersApis";
import { useNavigate } from "react-router-dom";

export const UsersContainer = ( ) =>{
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [users, setUsers] = useState([])

    const fetchUsers = async () =>{
      const response = await getUsers()
      let fullUsers = [ ...response.data]
      const updatedUsers = JSON.parse(localStorage.getItem('items'))
      if(updatedUsers)fullUsers=updatedUsers
      const usersLocal = JSON.parse(localStorage.getItem('new'))
      if(usersLocal){
        fullUsers.push(...usersLocal)
         localStorage.removeItem("new")
      }
      localStorage.setItem("items",JSON.stringify(fullUsers))
      setUsers(fullUsers)
      console.log(fullUsers , 'response.data')
    }
    useEffect(()=>{
      fetchUsers();
    },[])

    const handleOpenModal = (row) =>{
      setSelectedRow(row)
      setModalOpen(true);
    }
    const handleCloseModal =  () =>{
      setModalOpen(false);
      setSelectedRow(null)
    }
    const goToPage = () =>{
      navigate(`/user/${selectedRow.id}`)
    }
    const goToAddUser = () =>{
      navigate(`/add`)
    }
    const columns = [
        { id: 'name', label: 'Name' },
        { id: 'email', label: 'Email', align: 'right' },
        { id: 'phone', label: 'Phone', align: 'right' },
      ];
      
      const handleViewDetails = (row) => {
        handleOpenModal(row)
      };

    const onChange=async(e)=>{
      if(e.target.value){
        let filterdUsers=[...users]
        filterdUsers=filterdUsers.filter((val)=>val.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setUsers(filterdUsers)
      }else{
        await  fetchUsers();
      }
    }
    return(
        <>
        <div className="user-container">
            <div className="search-button-container">
              <SearchInputBase label={"Search By Name"} onChange={onChange}/>
              <UserButton text={"Add User"} onClick={()=>goToAddUser()} icon={<PlusIcon width={20} height={20}/>} />
            </div>
            <DataTable columns={columns} data={users} onViewDetails={handleViewDetails} />
            <BasicModal handleOpen={modalOpen} handleClose={handleCloseModal}>
              {selectedRow && 
              (
                <div>
                  <p><strong>Name:</strong> {selectedRow.name}</p>
                  <p><strong>Email:</strong> {selectedRow.email}</p>
                  <p><strong>Phone:</strong> {selectedRow.phone}</p>
                  <p><strong>Website:</strong> {selectedRow.website}</p>
                </div>
              )}
              <Button onClick={goToPage}>View Other Data</Button>
            </BasicModal>
        </div>
        </>
    )
}