import moment from "moment"
import "./styles/home.css"
import { useEffect, useState } from "react";
import { UserButton } from "../UI/Buttons/Button";
import { useNavigate } from "react-router-dom";

export const HomeContainer = () =>{
    const navigate = useNavigate()
    const [currentTime, setCurrentTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentTime(moment().format('MMMM Do YYYY, h:mm:ss a'))
        }, 1000)
    })
    const goToUsers = () => {
        navigate(`/users`)
    }
    return(
        <>
        <div className="home-container">
            <h1 className="main-content-home">
                    Hello Guys and welcome in Users Dashboard Here where you can Add Users, Update them or delete them 
            </h1>
            <UserButton onClick={goToUsers} text="Show Users"/>
            <h2 className="main-content-home">{currentTime}</h2>
        </div>
        </>
    )
}