import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';

class DefaultTemPlate extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
                {/* <modal /> */}
            </div>
        );
    }
}

export default DefaultTemPlate;
