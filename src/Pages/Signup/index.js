import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SignupAction } from '../../Action/Signup';
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';

export default function Signup() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isShowPass, setIsShowPass] = useState(false)
    const _handleSubmit = value => {

        dispatch(SignupAction(value));
        swal({
            title: "Đăng Ký",
            text: "Bạn đã đăng ký thành công",
            icon: "success",
            button: "Đóng",
        });
        history.push('/DangNhap')
    }


    const lowcaseRegex = /(?=.*[a-z])/;
    const upcaseRegex = /(?=.*[A-Z])/;
    const numbericRegex = /(?=.*[0-9])/;
    const signupUserSchema = yup.object().shape({
        taiKhoan: yup.string()
            .required("*Không được bỏ trống!")
            .min(2, "*Too short"),
        matKhau: yup.string()
            .required("*Không được bỏ trống!")
            .matches(lowcaseRegex, "*Một chữ viết thường")
            .matches(upcaseRegex, "*Một chữ viết hoa")
            .matches(numbericRegex, "*Bao gồm 1 số")
            .min(8, "*Ít nhất 8 ký tự"),
        hoTen: yup.string().required("*Không được bỏ trống!"),
        soDT: yup.string().matches(/^[0-9]+$/).required("*Không được bỏ trống!"),
        email: yup.string().required("*Không được bỏ trống!").email("*email không đúng định dạng"),
    })

    // const [value, setValues] = useState({
    //     matKhau: "",
    //     nhapLaiMatKhau: ""
    // })


    return (

        <div className="signup">
            <div className="container">
                <div className="signup__form">
                    <h1 className='text-center' >Đăng Ký</h1>

                    <Formik
                        initialValues={{
                            taiKhoan: "",
                            matKhau: "",
                            hoTen: "",
                            soDT: "",
                            maNhom: "GP01",
                            email: ""
                        }} 
                        validationSchema={signupUserSchema}
                        onSubmit={_handleSubmit}
                        render={(formikProps) => (
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="">Tài khoản:</label>
                                    <Field type="text" name="taiKhoan"
                                        onChange={formikProps.handleChange}
                                        className='form-control' placeholder='Tài khoản' />
                                    <ErrorMessage name="taiKhoan">
                                        {(msg) => <div className="alert alert-warning">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group password">
                                    <label htmlFor="">Mật khẩu:</label>
                                    <Field type={isShowPass ? "text" : "password"} name="matKhau" onChange={formikProps.handleChange} className='form-control' placeholder='Mật khẩu' />
                                    <div className="show-pass">
                                        <i onClick={() => { setIsShowPass(!isShowPass) }} class="fa fa-eye"></i>
                                    </div>
                                    <ErrorMessage name="matKhau">
                                        {(msg) => <div className="alert alert-warning">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                {/* <div className="form-group">
                                    <label htmlFor="">Nhập lại mật khẩu:</label>
                                    <Field type="password" name="matKhau" value={value.nhapLaiMatKhau} onChange={formikProps.handleChange} className='form-control' placeholder='Mật khẩu' />
                                    <ErrorMessage name="matKhau">
                                        {(msg) => <div className="alert alert-warning">{msg}</div>}
                                    </ErrorMessage>
                                </div> */}
                                <div className="form-group">
                                    <label htmlFor="">Họ tên:</label>
                                    <Field type="text" name="hoTen" onChange={formikProps.handleChange} className='form-control' placeholder='Họ tên' />
                                    <ErrorMessage name="hoTen">
                                        {(msg) => <div className="alert alert-warning">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <Field type="text" name="email" onChange={formikProps.handleChange} className='form-control' placeholder='Email' />
                                    <ErrorMessage name="email">
                                        {(msg) => <div className="alert alert-warning">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Số điện thoại:</label>
                                    <Field type="text" name="soDT" onChange={formikProps.handleChange} className='form-control' placeholder='Số điện thoại' />
                                    <ErrorMessage name="soDT">
                                        {(msg) => <div className="alert alert-warning">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Mã nhóm:</label>
                                    <Field component="select" name="maNhom" onChange={formikProps.handleChange} className='form-control'>
                                        <option value="">GP01</option>
                                        <option value="">GP02</option>
                                        <option value="">GP03</option>
                                        <option value="">GP04</option>
                                        <option value="">GP05</option>
                                        <option value="">GP06</option>
                                        <option value="">GP07</option>
                                        <option value="">GP08</option>
                                        <option value="">GP09</option>
                                        <option value="">GP10</option>
                                    </Field>
                                </div>
                                <button type='submit' className='btn btn-warning '>Đăng Ký</button>
                                <button type='submit'
                                    onClick={() => {
                                        history.push(`/DangNhap`)
                                    }}
                                    className='btn btn-warning '>Đăng Nhập</button>
                            </Form>
                        )} />
                </div>

            </div>

        </div>
    )
}
