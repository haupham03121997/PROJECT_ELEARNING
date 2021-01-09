import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import {useDispatch} from "react-redux";
import {Login , LOGINFACEBOOK} from "../../Action/User";
import "./signinFacebook.scss";
export default function SignInFacebook() {
  const dispatch = useDispatch();
  let fbContent;
  const [values, setValues] = useState({
    isLoggedIn: false,
    userId: "",
    name: "",
    email: "",
    picture: "",
  });
  const componentClicked = (res) => {
    // console.log("Click face", res);
  };
  const responseFacebook = res => {
    // console.log("res" ,res);
    if(res){
      dispatch(LOGINFACEBOOK(res))
    }
  
    
  };

  if (values.isLoggedIn) {
    fbContent = null;
  } else {
  
    fbContent = (
      <FacebookLogin
        appId="4620490364692413"
        // autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        // cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    );
  }
  // const responseFacebook = res =>{
  //     console.log("response face" , res);
  //   //   if(res){
  //   //       alert("đăng nhập bằng face bôk")
  //   //   }
  //  if(res){
  //   localStorage.setItem("userLogin", JSON.stringify(res));
  //  }
  // }
  return <div>{fbContent}</div>;
}
