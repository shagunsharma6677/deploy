import { AuthContext } from "../Auth-Router/AuthContext"
import React from "react"
import "./Button.css"
export default function Button({ shape, cardD }) {
    const { handleBuy,buyItem } = React.useContext(AuthContext)
    // console.log("clicked",cardD)
    return <>
        <div onClick={() =>{ 
            handleBuy(cardD)
            console.log("clicked") }} style={{ padding: shape === true ? "padding: 6px 20px" : "12px 44px" }} className="cards-buy">
            <a href="#">Buy</a>
        </div>
    </>
}