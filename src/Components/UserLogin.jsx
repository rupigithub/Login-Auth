import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";




function UserLogin(){
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');
    // const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let error = useSelector((state) => state.error);

    const handleInput = async(e) =>{
        e.preventDefault();
        // localStorage.setItem('userName', userName);
        const api = 'https://dummyjson.com/auth/login';
        const body = {
            "username" : userName,
            "password" : password
        };
        // const fetchApi = async()=>{
            try {
                const response = await axios.post(api,body);
                console.log(response);
                 if(response.status === 200){
                    // setLoading(true);
                    
                  localStorage.setItem('loading','true');
                //   localStorage.setItem('user',JSON.stringify(response.data));
                  dispatch({type:'SET-DATA', payload:response.data});
                  navigate('/profile');
                 }
                 
              } catch (error) {
                dispatch({type:'ERROR', payload:'An error occurred. Please try again.'});
               }
        // };

        // fetchApi();
        
        }

    
        console.log(userName);
        console.log(password);
    
    return(
        <div id="sign-in-box">
      <p>Welcome back!</p>
      <h2>Sign in to your account</h2>

      <form id="form">
        <label>Your email</label>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) =>{
            setUserName(e.target.value);
            // error = ''; //prob stat: how to chnage error if enter info again in form
          } }
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            // error = '';
          }}
        />
      </form>

      <button onClick={handleInput}>CONTINUE</button>
      
      <p className="forget-password">Forget your password?</p>

      {error && (
        <p className="error" style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
    )
}

export default UserLogin;