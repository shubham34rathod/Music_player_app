import React from 'react'
import '../css/login.css'
// import shopingLogo from "../images/shopingLogo.png"

function Login() {
    return <>
        {/* <div className="shopingLogo"><img src={shopingLogo} alt="logo" id="shopingLog" /></div> */}
        <div className="logIn_box">
            <div className="signIn">
                <h4 className='logIn_txt'>Login</h4>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Email</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="abc@gmail.com" />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">password</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="******" />
                </div>
                <div>
                    <input class="btn btn-success" id="submitBtn" type="submit" value="Submit"></input>
                </div>
                <br />
                <a href="#">don't have a account? create account</a>
            </div>
        </div>

    </>
}

export default Login