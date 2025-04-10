import { useParams } from "react-router-dom";
import { AddUserForm } from "../Components/Users/Forms/AddUserForm"

export const AddUser = () => {
    const { id } = useParams();
    console.log(id , 'iddd')
    return(
        <>
            <AddUserForm id={id}/>
        </>
    )
}