import React from 'react';
import {Route} from 'react-router-dom';
// import DefaultTemplate from '../DefaultTemplate'
// import CustomTemplate from "../CustomTemplate"
import RouterTemplate from "../RouterTaiKhoan"

const RouterTaiKhoan = (props)=>{
    const {component : Component, ...rest} = props;
    // console.log('render');
    return(
        <Route {...rest} render={routerProps =>{
            return(
                    <RouterTemplate>
                        <Component  {...routerProps}/>
                    </RouterTemplate>
            )
        }}/>
       
    )
}
export default  RouterTaiKhoan ;