import React, {useState} from "react";
import axios from "axios";

const Login = props => {
  const initialState = {
    credentials: {
      username: "",
      password: ""
    }
  }
  const [loginInfo, setLoginInfo] = useState(initialState)

  const handleChange = e => {
    setLoginInfo({
            credentials: {
              ...loginInfo.credentials,
              [e.target.name]: e.target.value   
            }           
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    // make a POST requeset to the server
    // the server will authenticate the user based on their credentials
    // if they auth, the server will return a token
    axios
      .post("http://localhost:5000/api/login", loginInfo.credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  return (
      <div>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            value={loginInfo.credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={loginInfo.credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  
}

export default Login;