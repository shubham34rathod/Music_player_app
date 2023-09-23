import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { loginInfo } from './redux/slice/userSlice'
import '../css/login.css'
import axios from 'axios'
// import shopingLogo from "../images/shopingLogo.png"

function Login() {

    let dispatch=useDispatch()

    let [user,setUser]=useState({
        email:'',
        password:''
    })

    function setData(e,prop)
    {
        setUser((data)=>({
            ...data,
            [prop]:e.target.value
        }))
    }

    async function loginFn()
    {
        console.log(user);
        await axios.post(`http://localhost:8000/api/login`,user)
        .then((res)=>{
            console.log(res.data)
            dispatch(loginInfo(res.data))
        })
        .catch((error)=>console.log(error))
        
    }

    return <>
        {/* <div className="shopingLogo"><img src={shopingLogo} alt="logo" id="shopingLog" /></div> */}
        <div className="logIn_box">
            <div className="signIn">
                <h4 className='logIn_txt'>Login</h4>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Email</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="abc@gmail.com" value={user.email} onChange={(e)=>setData(e,"email")} />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">password</label>
                    <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="******" value={user.password} onChange={(e)=>setData(e,"password")}/>
                </div>
                <div>
                    <input class="btn btn-success" id="submitBtn" type="submit" value="Submit" onClick={loginFn}></input>
                </div>
                <br />
                <a href="#">don't have a account? create account</a>
            </div>
        </div>

    </>
}

export default Login