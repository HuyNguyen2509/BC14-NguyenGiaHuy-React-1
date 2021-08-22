import React from "react"
import Phone from "./phone"
export default function ListPhone() {
    return(
        <div className="container-fluid pt-5 pb-5">
            <h1 class="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">
            <Phone />
            <Phone />
            <Phone />
            <Phone />
        </div>
        </div>
    )
}