import React from "react"
import Footer from "./footer"
export default function ListFooter() {
    return(
        <div className="container-fluid pt-5 pb-5">
            <h1 class="text-center text-white">PROMOTION</h1>
            <div className="container bg-light pt-5 pb-5">
                <div className="row">
                    <Footer />
                    <Footer />
                    <Footer />
                </div>
            </div>
        </div>
    )
}