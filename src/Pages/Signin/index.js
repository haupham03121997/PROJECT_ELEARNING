import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Login } from '../../Action/User';
import swal from 'sweetalert';
export default function Signin() {
    const history = useHistory();
    const { credential, err } = useSelector(state => state.UserReducer);

    if (!err) {
      
    }

    const dispatch = useDispatch();
    const _hanleSubmit = value => {
        // dispatch(LOGIN(value))
        // console.log("value", value);
        dispatch(Login(value))
        // history.push(`/`)
        const check = localStorage.getItem("userLogin");
        // if(check){
        //     //  swal({
        //     //     title: "Thành Công",
        //     //     text: "Đăng nhập thành công",
        //     //     icon: "success",
        //     //     button: "Đóng",
        //     // });
        //     alert("đâsdas")

        // }
        setTimeout(() => {
            
        }, 500)

    }

    // if (!err) {
    //     // swal({
    //     //     title: "Thành Công",
    //     //     text: "Đăng nhập thành công",
    //     //     icon: "success",
    //     //     button: "Đóng",
    //     // });
    // }

    const [isShowPass, setIsShowPass] = useState(false)
    if (credential !== null) {
        if (credential.maLoaiNguoiDung === 'GV') {
            return <Redirect to="admin/user-management" />
        }
        if (credential.maLoaiNguoiDung === 'HV') {
            return <Redirect to="/" />
        }
    }
    const signinUserSchema = yup.object().shape({
        taiKhoan: yup.string().required("*Tài khoản trống"),
        matKhau: yup.string()
            .required("*Mật khẩu trống")
    })
    return (
        <div className='SignIn'>
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 my-5 border rounded">
                        <h6 className="text-center display-4 my-4">Đăng Nhập</h6>
                        <Formik
                            initialValues={{
                                taiKhoan: "",
                                matKhau: ""
                            }}
                            onSubmit={_hanleSubmit}
                            validationSchema={signinUserSchema}
                            render={(formiProps) => (

                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="">Tài Khoản</label>
                                        <Field type="text" name="taiKhoan" className='form-control' onChange={formiProps.handleChange} />
                                        <ErrorMessage name="taiKhoan">
                                            {(msg) => <div className="alert alert-warning">{msg}</div>}
                                        </ErrorMessage>
                                    </div>
                                    <div className="form-group password">
                                        <label htmlFor="">Mật Khẩu</label>
                                        <Field name="matKhau" type={isShowPass ? "text" : "password"} className='form-control '
                                            onChange={formiProps.handleChange} />
                                        <div className="show-pass">
                                            <i onClick={() => { setIsShowPass(!isShowPass) }} className="fa fa-eye"></i>
                                        </div>
                                        <ErrorMessage name="matKhau">
                                            {(msg) => <div className="alert alert-warning">{msg}</div>}
                                        </ErrorMessage>

                                    </div>
                                    {err ? <p style={{ color: 'red' }}>*Tài khoản hoặc mật khẩu không đúng!</p> : ""}
                                    <div className="mb-5 text-center">
                                        <button type="submit" className='btn btn-outline-warning mr-3'>Đăng Nhập</button>
                                        {/* <button
                                            className='btn btn-outline-warning'
                                            onClick={() => {
                                                history.push(`/DangKy`)
                                            }}
                                        >Đăng Ký</button> */}
                                    </div>

                                </Form>
                            )}
                        />


                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    )
}
