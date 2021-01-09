import React from 'react'
import Footer from "../Footer";
import Header from "../../Pages/ShopCart/header";
export default function TempalteShopping(props) {
    return (
        <div>
            <Header />
             {props.children}
            <Footer/>
        </div>
    )
}
