import { useNavigate } from 'react-router-dom'
import '../css/navbar.css'
import tmpImg from '../images/profile_img.jpg'
import { useState } from 'react'

function Navbar() {

    let navigate=useNavigate()

    let [toggleLogout, setLogout] = useState(false)

    function handleLogoutBtn() {
        (toggleLogout) ? setLogout(false) : setLogout(true)
    }

    return <>
        <div className="Navbar">
            <h4>Music.com</h4>
            <input type="text" placeholder="search" />
            <div className="topIcons">
                <i class="bi bi-house-door" onClick={()=>navigate('/')}></i>
                <div className="profile_pic">
                    <img src={tmpImg} alt="" />
                </div>
                <i class="bi bi-three-dots-vertical" onClick={handleLogoutBtn}></i>
            </div>
            {toggleLogout &&
                <div className="logout_box">
                    <p>Logout</p>
                </div>
            }
        </div>
    </>
}

export default Navbar