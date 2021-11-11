import { useState, useEffect } from "react";
import axios from 'axios';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })
    const [errors, setErrors] = useState({});
    const[isSubmitting, setIsSubmitting] = useState(false)

   
    const handleChange = e => {
    const { name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    }
    function signupPostData(userData) {
        axios({
          method: "POST",
          url: "http://localhost:5000/",
          data: userData,
        }).then((response) => {
          if (response.data.status === "success") {
            alert("sign up success");
            
          } else if (response.data.status === "fail") {
            alert("sign up unsuccesful");
          }
        });
      }
    function signinPostData(userData) {
        axios({
          method: "POST",
          url: "http://localhost:5000/login/",
          data: userData,
        }).then((response) => {
          if (response.data.status === "success") {
            alert("Logged in");
            
          } else if (response.data.status === "fail") {
            alert("Login unsuccesful");
          }
        });
      }
    const handleSubmitsignup = e => {
        e.preventDefault();
        signupPostData(values)
        setErrors(validate(values));
        setIsSubmitting(true);
    }
    const handleSubmitlogin = e => {
        e.preventDefault();
        signinPostData(values)
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 &&
        isSubmitting) {
            callback()
        }
    }, [errors]);
 
    return {handleChange, values, handleSubmitlogin, handleSubmitsignup, errors}
};

export default useForm;

