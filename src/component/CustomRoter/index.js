import React from 'react';
import {Route} from 'react-router-dom';
// import DefaultTemplate from '../DefaultTemplate'
import CustomTemplate from "../CustomTemplate"
const CustomRouter = (props)=>{
    console.log("Custom props" , props);
    const {component : Component, ...rest} = props;
    // console.log('render');
    return(
        <Route {...rest} render={routerProps =>{
            return(
                    <CustomTemplate>
                        <Component  {...routerProps}/>
                    </CustomTemplate>
            )
        }}/>
       
    )
}
export default  CustomRouter ;