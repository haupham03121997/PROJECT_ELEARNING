
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from "formik";
const ModalThemUser = ({
    isOpen ,
    toggle,
    className
}) => {
 

 
const _handleSubmit = (value)=>{
 
}
  return (
    <div>

      <Modal  isOpen={isOpen} toggle={toggle} className={"modal-lg"}>
        <ModalHeader style={{color : "red"}} toggle={toggle}>Thêm người dùng</ModalHeader>
       
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maLoaiNguoiDung: "HV",
            maNhom: "GP01",
            email: "",
          }}
          // validationSchema={signupUserSchema}
          onSubmit={_handleSubmit}
          render={(formikProps) => (
            <ModalBody>
            <Form>
              <div className="row">
                <div className="col-6">
                  <div style={{height : "100px"}} className="form-group mb-0">
                    {/* <label htmlFor="">Tài khoản</label> */}
                    <Field
                      name="taiKhoan"
                      type="text"
                      className="form-control"
                      placeholder="Nhập tài khoản"
                    />
                    <ErrorMessage name="taiKhoan">
                      {(msg) => (
                        <div className="alert alert-warning">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="form-group mb-0">
                    {/* <label htmlFor="">Họ Tên</label> */}
                    <Field name="hoTen" type="text" className="form-control"  placeholder="Nhập họ tên"/>
                    <ErrorMessage name="hoTen">
                      {(msg) => (
                        <div className="alert alert-warning">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className="form-group mb-0">
                    {/* <label htmlFor="">Số điện thoại</label> */}
                    <Field name="soDT" type="text" className="form-control"  placeholder="Nhập số điện thoại"/>
                    <ErrorMessage name="soDT">
                      {(msg) => (
                        <div className="alert alert-warning">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="form-group mb-0">
                    {/* <label htmlFor="">Email</label> */}
                    <Field name="email" type="text" className="form-control"  placeholder="Nhập email"/>
                    <ErrorMessage name="email">
                      {(msg) => (
                        <div className="alert alert-warning">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group mb-0">
                    <label htmlFor="">Mật Khẩu</label>
                    <Field
                      name="matKhau"
                      type="password"
                      className="form-control"
                      placeholder="Nhập mật khẩu"
                    />
                    <ErrorMessage name="matKhau">
                      {(msg) => (
                        <div className="alert alert-warning">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="form-group mb-0">
                    <label htmlFor="">Mã loại người dùng</label>
                    <select name="maLoaiNguoiDung" className="form-control">
                      <option value="HV">HV</option>
                      <option value="GV">GV</option>
                    </select>
                  </div>
                  <div className="form-group mb-0">
                    <label htmlFor="">Mã nhóm</label>
                    <Field
                      component="select"
                      className="form-control"
                      name="maNhom"
                    >
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
                  {/* <div className="form-group mb-0">
                    <button type="submit" className="btn btn-success">
                      Thêm
                    </button>
                  </div> */}
                </div>
              </div>
            </Form>
            </ModalBody>
    
          )}
        />
     
     <ModalFooter>
          <Button color="primary" type="submit" onClick={toggle}><i className="fa fa-user-plus"></i>Thêm</Button>{' '}
          <Button color="secondary" className={"btn btn-danger"} onClick={toggle}> <i className="fa fa-times-circle"></i>Hủy</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalThemUser;