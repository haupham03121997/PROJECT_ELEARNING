import React , {Component} from "react";
import HeaderAdmin from "../PagesAdmin/HeaderAdmin";
import MenuAdmin from "../PagesAdmin/MenuAdmin";
import FooterAdmin from "../PagesAdmin/FooterAdmin";

class AdminTemplate extends Component {
    render() {
        return (
            <div className="hold-transition sidebar-mini">
            <HeaderAdmin />
            <MenuAdmin />
            {this.props.children}
            <FooterAdmin />
          </div>
        );
    }
}

export default AdminTemplate;
