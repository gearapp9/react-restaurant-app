import React, { useContext, useState } from "react";
import { ReactComponent as GoogleLogo } from "../../assets/google-icon.svg";
import { HeaderContext } from "../../contexts/HeaderContext";
import "./sign.css";
import { FormFields } from "../../models/formFields";
import { createAuthUserEmailPass } from "../../utils/firebase/firebase-utils";
export const SignUp = () => {
  const [formFields, setFormFields] = useState<FormFields>({
    user: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitForm = async (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   try {
     const response =  await createAuthUserEmailPass(formFields.email, formFields.password);
     console.log(response);
     
   } catch (error) {
    console.log(error);
    
   }
    
  };

  const { changeHeader } = useContext(HeaderContext);
  changeHeader("sign-up");

  return (
    <section className="sign-up-page sign-page">
      <div className="container">
        <div className="sign-content">
          <form onSubmit={submitForm}> 
            <label>User</label>
            <input
              type="text"
              required
              placeholder="Enter your username"
              name="user"
              onChange={inputChnage}
            />
            {/* we set to value  so that we controle what to show */}
            <label>Email</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              name="email"
              onChange={inputChnage}
            />

            <label>Password</label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              name="password"
              onChange={inputChnage}
            />

            <label>Confirm Password</label>
            <input
              type="password"
              required
              placeholder="Confirm your Password"
              name="confirmPassword"
              onChange={inputChnage}
            />
            <button type="submit" >
              Sign up
            </button>
          </form>
          <div className="sign-in-options">or</div>
          <div className="google-sign-in">
            <GoogleLogo />
            <p>Continue with Google</p>
          </div>
          <div className="disclaimer">
            <p>
              By signing up you agree that we will use your data in how ever
              we'd like to
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
