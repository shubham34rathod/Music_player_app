import { useNavigate } from 'react-router-dom'
import '../css/navbar.css'
import tmpImg from '../images/profile_img.jpg'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleLogout } from './redux/slice/userSlice.js'

function Navbar({fn}) {

    let navigate = useNavigate()
    let dispatch = useDispatch()
    let userData = useSelector((state) => state.user.user)
    let logInStatus = useSelector((state) => state.user.login)
    // console.log('user', userData);

    let [toggleLogout, setLogout] = useState(false)

    function handleLogoutBtn() {
        (toggleLogout) ? setLogout(false) : setLogout(true)
    }
    function handleLogoutBtn_2() {
        (toggleLogout) ? setLogout(false) : setLogout(true)
    }

    return <>
        <div className="Navbar">
            <h4>Music.com</h4>
            <input type="text" placeholder="search" onChange={(e)=>console.log(fn(e.target.value))}/>
            <div className="topIcons">
                {(logInStatus) ? <>
                    <i class="bi bi-house-door" onClick={() => navigate('/')}></i>
                    <div className="profile_pic">
                        <img src={tmpImg} alt="" />
                    </div>
                    {/* <p>{userData.name}</p> */}
                    <i class="bi bi-three-dots-vertical" onClick={handleLogoutBtn}></i>
                </>
                    :
                    <i class="bi bi-three-dots-vertical" onClick={handleLogoutBtn_2} id='logOut_effect'></i>
                }

            </div>
          
            {(logInStatus) ? toggleLogout && <>
                <div className="logout_box" onClick={() => dispatch(handleLogout())}>
                    <p>Logout</p>
                </div>
                </>
                :
                toggleLogout &&
                <div className="logout_box_2" onClick={() => navigate('/login')}>
                    <p>Login</p>
                </div>
            }

           
        </div>
    </>
}

export default Navbar