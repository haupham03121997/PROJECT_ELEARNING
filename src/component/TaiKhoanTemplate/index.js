import React, { Component } from 'react'
import Footer from '../Footer'

class CustomTemplate extends Component {
    render() {
        return (
            <div>
                {this.props.children}
               
            </div>
        )
    }
}
export default  CustomTemplate;
