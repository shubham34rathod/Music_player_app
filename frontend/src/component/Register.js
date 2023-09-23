import React, { useState } from 'react'
import '../css/register.css'
import axios from 'axios'
// import shopingLogo from "../images/shopingLogo.png"

function Register() {

    let [newUser, setNewUser] = useState({
        name: '',
        email: '',
        profile:'',
        password: ''
    })
    let [cnfPassword, setCnfPassword] = useState('')

    function setData(e, prop) {
        setNewUser((data) => ({
            ...data,
            [prop]: e.target.value
        }))
    }

    async function uploadProfile(value) {
        // console.log('value',value);
        let data1 = new FormData()
        data1.append('file', value)
        data1.append('upload_preset', 'Music_app')
        await axios.post(`https://api.cloudinary.com/v1_1/df78wetic/image/upload`, data1)
            .then((res) => {
                console.log(res.data.secure_url)
                setNewUser((data)=>({
                    ...data,
                    profile:res.data.secure_url
                }))
            })
            .catch((error) => console.log(error))
    }

    async function submitData() {
        console.log(newUser);
        await axios.post('http://localhost:8000/api/register', newUser)
            .then((res) => console.log(res.data))
            .catch((error) => console.log(error))
    }

    return <>
        {/* <div className="shopingLogo_2"><img src={shopingLogo} alt="logo" id="shopingLog_2" /></div> */}
        <div className="rigister_box">
            <div className="signIn">
                <h4 className='logIn_txt'>Register</h4>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Jone Doe" value={newUser.name} onChange={(e) => setData(e, "name")} />
                    <label for="floatingInput">Full name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={newUser.email} onChange={(e) => setData(e, "email")} />
                    <label for="floatingInput">Email address</label>
                </div>
                <div id="upload_profile">
                    {/* <label htmlFor="">Select Song</label><br /> */}
                    <label htmlFor="album_pic" className='fileupload_lable'><i class="bi bi-cloud-arrow-up"></i> Upload profile</label><br />
                    <input type="file" id="album_pic" accept='image/*' onChange={(e) => uploadProfile(e.target.files[0])} />
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={newUser.password} onChange={(e) => setData(e, "password")} />
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating ">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={cnfPassword} onChange={(e) => setCnfPassword(e.target.value)} />
                    <label for="floatingPassword">Confirm password</label>
                </div>
                <div>
                    <input class="btn btn-success" id="submitBtn" type="submit" value="Submit" onClick={submitData}></input>
                </div>
                <br />
                <a href="#" style={{ marginLeft: '85px' }}>Have an account? login account</a>
            </div>
        </div>
    </>
}

export default Register;