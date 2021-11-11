import React, {useState} from 'react'
import useForm from './useForm'
import validate from './validatesInfo'
import './Form.css'
import axios from 'axios';



const FormSignin = ({submitForm}) => {
    const {handleChange, values, handleSubmitlogin, errors } = useForm(submitForm,validate)
    
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
    
      function PostData(userData) {
        axios({
          method: "POST",
          url: "/login",
          data: userData,
        }).then((response) => {
          if (response.data.status === "success") {
            alert("Logged in");
            this.resetForm();
          } else if (response.data.status === "fail") {
            alert("Login unsuccesful");
          }
        });
      }
    
    return (
      <div className="parent-container">
        <div className="content-right-2">
        <form className="form-2" onSubmit={handleSubmitlogin}>
        <h1 style={{color: "black", fontSize:30}}> Sign In </h1>
        <h1 style={{color: "lightgrey", fontWeight:0.2}} >Welcome, we missed you!</h1>
        <div className="form-inputs">
              <label  style={{color: "black"}} htmlFor="email"
              className="form-label">
              Email
              </label>
              <input 
              id='email'
              type="email" 
               name='email' 
               className="form-input" 
               placeholder="Enter your email"
               value={values.email}
               onChange={handleChange}
               />
               {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
            <label  style={{color: "black"}} htmlFor="password"
            className="form-label">
            Password
            </label>
            <input 
            id='password'
             type="password" 
             name='password' 
             className="form-input" 
             placeholder="Enter your password"
             value={values.password}
             onChange={handleChange}
             />
             {errors.password && <p>{errors.password}</p>}
          </div>
          <button className="form-input-btn-signin"
          type="submit" onSubmit={handleSubmitlogin}>SignIn</button>
          </form>
        </div>
        <div className='form-content-left'>
        <h1 > Nature Vincere -</h1>
        <h3 className='form-content-left-content'>Online team management</h3>
        <img src="img/img-5.svg" alt="pubg photo" className="form-img-5"/>
        <img src="img/img-6.svg" alt="pubg photo" className="form-img-6"/>
        <img src="img/img-7.svg" alt="pubg photo" className="form-img-7"/>
        <img src="img/img-8.svg" alt="pubg photo" className="form-img-8"/>
        <img src="img/img-9.svg" alt="pubg photo" className="form-img-9"/>

        <p className='paragraph'>I have an account! <a href="#"> Click here </a></p>
       </div>
        
        </div>
    )
}


export default FormSignin
