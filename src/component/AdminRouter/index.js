import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from "react-router-dom"
import AdminTemplate from '../Admintemplate';
const AdminRouter = (props) => {
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
                    <AdminTemplate>
                        <Component {...routerProps} />
                    </AdminTemplate>
                )
            }} />
        
          
    )
}
export default AdminRouter;
