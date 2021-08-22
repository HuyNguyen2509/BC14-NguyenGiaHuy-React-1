import React from "react"
import Header from "./header"
import Carousel from "./carousel"
import ListPhone from "./ListPhone"
import ListFooter from "./ListFooter"
import ListLaptop from "./ListLaptop"
import "./index.css"
export default function Index(){
    return(
        <div className="bg-dark">
            <Header />
            <Carousel />
            <ListPhone />
            <ListLaptop />
            <ListFooter />
        </div>
    )
}