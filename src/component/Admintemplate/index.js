import React , {Component} from "react";
import HeaderAdmin1 from "../PagesAdmin/HeaderAdmin1";
import MenuAdmin1 from "../PagesAdmin/MenuAdmin1";
import FooterAdmin1 from "../PagesAdmin/FooterAdmin1";

class AdminTemplate1 extends Component {
    render() {
        return (
            <div className="">
            {/* <HeaderAdmin1/>
            <MenuAdmin1 />
            {this.props.children}
            <FooterAdmin1 /> */}
          </div>
        );
    }
}

export default AdminTemplate1;
