import React from 'react';
import {Route} from 'react-router-dom';
import DefaultTemplate from '../DefaultTemplate'

const UserRouter = (props)=>{
    const {component : Component, ...rest} = props;
    // console.log('render');
    return(
        <Route {...rest} render={routerProps =>{
            return(
                    <DefaultTemplate>
                        <Component  {...routerProps}/>
                    </DefaultTemplate>
            )
        }}/>
       
    )
}
export default UserRouter;