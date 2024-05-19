import React, { useState, useRef } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../../firesbase";

const LoginPopup = ({ setShowLogin }) => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [isSignInForm, setSigInForm] = useState(null);
  const [message, setErrorMessage] = useState(null);

  const [currState, setCurrState] = useState("Sign Up");
  const handleSubmit = () => {
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="login-popup">
      <form
        className="login-popup-container"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            setSigInForm(true)(<></>)
          ) : (
            <>
              <input type="text" placeholder="Your Name" ref={name} />
              {setSigInForm(false)};
            </>
          )}
          <input type="email" placeholder="Your Email" ref={email} />
          <input type="password" placeholder="Password" ref={password} />
        </div>
        <button id="btn" onClick={handleSubmit}>
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
