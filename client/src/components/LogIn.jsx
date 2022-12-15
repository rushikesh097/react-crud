import { useState } from "react";
import axios from "axios";
import "./LogIn.css";

const LogIn = (props) => {
    const [user, setUser] = useState({
      email: "",
      password: "",
    });

    const [msg, setMsg] = useState("");

    const checkValidity = (e) => {
      e.preventDefault();
      if (user.password !== "") {
        axios
          .post(`http://localhost:3001/user/validateuser`, {
            email: user.email,
            password: user.password,
          })
          .then((response) => {
            console.log(response.data);
            if (response.data === "") {
              setMsg("Invalid email or password!");
              return;
            }
            props.setIsLogIn(false)
          })
          .catch((err) => {
            console.log(err);
            setMsg(err.message);
          });
        return;
      }
      setMsg("Invalid email or password!");
    };

    const handleChange = (e) => {
      e.preventDefault();
      setMsg("");
      console.log(user);
      setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

  return (
    <div class="form-outer">
      <form>
        <h1>Login</h1>
        <label for="">
          Email:
          <input type="email" name="email" id="" onChange={handleChange}/>
        </label>
        <label for="">
          Password:
          <input type="password" name="password" id="" onChange={handleChange}/>
        </label>
        <p>{msg}</p>
        <div class="form-bottom">
          <input type="button" value="Sign In" onClick={(e)=>checkValidity(e)}/>
          <span>forgot password?</span>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
