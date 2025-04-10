import { Button } from "@mui/material"
import "./userButton.css"

export const UserButton = ({text, color, size, onClick, variant, icon, classes}) =>{
return(
    <>
        <Button onClick={onClick} className={`${classes} user-button`} variant={variant? variant :"contained"} size={size? size : "medium"} startIcon={icon}>{text}</Button>
    </>
)
}