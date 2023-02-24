import { useState } from "react";
import { useNavigate } from "react-router";
import "../styles/SignIn.css";

export default function SignInComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailErrorS, setEmailError] = useState("");
  const [passwordErrorS, setPasswordError] = useState("");

  const navigate = useNavigate();

  const homePage = () => {
    navigate("/home");
  };

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setEmailError("Email can't be empty");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value === "") {
      setPasswordError("Password can't be empty");
    } else if (e.target.value.length < 8) {
      console.log(password.length);
      setPasswordError("Password should be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleRememberMeInputChange = (e) => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    let emailError = "";
    let passwordError = "";

    if (!email) {
      emailError = "Email can't be empty";
    }

    if (!password) {
      passwordError = "Password can't be empty";
    } else if (password.length < 8) {
      console.log(password.length);
      passwordError = "Password should be at least 8 characters";
    }

    if (emailError || passwordError) {
      setEmailError(emailError);
      setPasswordError(passwordError);
      console.log("emailErrorS", emailErrorS);
      console.log("passwordErrorS", passwordErrorS);
      alert(
        JSON.stringify({ emailError: emailError, passwordError: passwordError })
      );
      e.preventDefault();
    } else {
      homePage();
    }
  };

  return (
    <div div className="app">
      <div className="formContainer">
        <h1 className="formTitle">Sign In</h1>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="email">Email: </label>
          <input
            className="formInput"
            type={"email"}
            value={email}
            onChange={handleEmailInputChange}
          />
          {emailErrorS ? <b className="errorMessage">{emailErrorS}</b> : <></>}

          <label htmlFor="password">Password: </label>
          <input
            className="formInput"
            type={"password"}
            value={password}
            onChange={handlePasswordInputChange}
          />
          {passwordErrorS ? (
            <b className="errorMessage">{passwordErrorS}</b>
          ) : (
            <></>
          )}

          <label htmlFor="checkbox">Remember me: </label>
          <input
            type="checkbox"
            value={rememberMe}
            onChange={handleRememberMeInputChange}
          />

          <input type="submit" value="Submit" className="formButton" />
        </form>
      </div>
    </div>
  );
}
