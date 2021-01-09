import React from 'react'
import Footer from "../Footer";
export default function CustomTemplate(props) {
    return (
        <div>
            {props.children}
            <Footer/>
        </div>
    )
}

