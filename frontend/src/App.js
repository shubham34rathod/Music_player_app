import Home from "./component/Home";
import Navbar from "./component/Navbar";
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import AddSong from "./component/AddSong";
import Login from "./component/Login";
import Register from "./component/Register";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PlaySong from "./component/PlaySong";


function App() {
    return <>
        {/* <Home></Home> */}
        {/* <AddSong></AddSong> */}
        {/* <Login></Login> */}
        {/* <Register></Register> */}

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/addSong" element={<AddSong></AddSong>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/playSong" element={<PlaySong></PlaySong>}></Route>
            </Routes>
        </BrowserRouter>


    </>
}

export default App;
