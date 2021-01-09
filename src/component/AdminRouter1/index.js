import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from "react-router-dom"
// import AdminTemplate1 from '../Admintemplate1';
import AdminTemplate1 from "../Admintemplate1";
const AdminRouter1 = (props) => {
    const { component: Component, ...rest } = props;

    const { credential } = useSelector((state => state.UserReducer));
    if (!Object.keys(credential).length) {
        return <Redirect to="/" />
    }
    // console.log("Isadasdasdasasdas");

    return (
        <Route 
             {...rest}
            render={routerProps => {
                return (
                       <AdminTemplate1>
                           <Component {...routerProps}/>
                       </AdminTemplate1>
                )
            }} />
        
          
    )
}
export default AdminRouter1;
