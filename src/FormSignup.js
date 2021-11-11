import React , {useState} from 'react'
import useForm from './useForm'
import validate from './validatesInfo'
import axios from 'axios';
import './Form.css';

const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSubmitsignup, errors } = useForm(submitForm,validate)
    const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    });
     

    const handleName =(e) => {
       setUser({...user,
      name: e.target.value,
      })
    }
    const handleEmail =(e) => {
      setUser({...user,
     email: e.target.value,
     })
   }
   const handlePassword =(e) => {
      setUser({...user,
     password: e.target.value,
     })
   }
   const handlePasswordConfirm =(e) => {
      setUser({...user,
     passwordConfirm: e.target.value,
     })
   }

   

   
    return (
       <div className="form-content-right">
        <form className="form" onSubmit={handleSubmitsignup}>
            <h1 style={{color: "black", fontSize:30}}> Sign Up </h1>
            <h1 style={{color: "lightgrey", fontWeight:0.2}} >Do you have an account ?</h1>
            <div className="form-inputs">
              <label style={{color: "black"}} htmlFor="username"
              className="form-label">
              Username
              </label>
              <input 
              id='name'
               type="text" 
               name='name'    
               className="form-input" 
               placeholder="Enter your username"
               value={values.name}
               onChange={handleChange}

               />
               {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="form-inputs">
              <label style={{color: "black"}} htmlFor="email"
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
          <div className="form-inputs">
          <label style={{color: "black"}} htmlFor="password2"
          className="form-label">
          Confirm Password
          </label>
          <input 
          id='passwordConfirm'
           type="password" 
           name='passwordConfirm' 
           className="form-input" 
           placeholder="Enter your password"
           value={values.passwordConfirm}
           onChange={handleChange}
           />
           {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <button className="form-input-btn"
        type="submit" onSubmit={handleSubmitsignup}>Signup</button>
        </form>
     </div>
    )
}

export default FormSignup
