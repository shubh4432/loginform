import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import FormSignin from './FormSingin';
import {Link} from 'react-router-dom'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <h1 > Nature Vincere -</h1>
          <h3 className='form-content-left-content'>Online team management</h3>
          <img src="img/img-5.svg" alt="pubg photo" className="form-img-5"/>
          <img src="img/img-6.svg" alt="pubg photo" className="form-img-6"/>
          <img src="img/img-7.svg" alt="pubg photo" className="form-img-7"/>
          <img src="img/img-8.svg" alt="pubg photo" className="form-img-8"/>
          <img src="img/img-9.svg" alt="pubg photo" className="form-img-9"/>

          <p className='paragraph'>I have an account! <Link id="" to="/signin"> Click here </Link></p>
         </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}

      </div>
    </>
  );
};

export default Form;