import { useParams } from "react-router-dom";
import { UserDetailsContainer } from "../Components/Users/UserDetails";

export const UserDetails = ( ) =>{
    const { id } = useParams(); 
    return(
        <>
            <UserDetailsContainer id={id} />
        </>
    )
}