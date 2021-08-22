import React from "react"
import Laptop from "./laptop"
export default function ListLaptop() {
    return(
      <div class="container-fluid pt-5 pb-5 bg-light text-dark">
        <h1 class="text-center">BEST LAPTOP</h1>
        <div class="row">
            <Laptop />
            <Laptop />
            <Laptop />
            <Laptop />
        </div>
      </div>
    )
}