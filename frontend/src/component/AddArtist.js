import '../css/addArtist.css'
import {useState} from 'react'
import axios from 'axios'

function AddArtist({fn}) {

    let [artistInfo,setInfo]=useState({
        name:"",
        dob:"",
        bio:""
    })

    function handleInfo(e,prop)
    {
        setInfo((data)=>({
            ...data,
            [prop]:e.target.value
        }))
    }

    async function handleSubmit()
    {
        await axios.post(`http://localhost:8000/api/newArtist`,artistInfo)
        .then((res)=>console.log(res.data))
        .catch((error)=>console.log(error))
        // console.log(artistInfo);
    }

    return <>
        <div className="new_artist">
            <div className="top_side">
                <p>Add Artist</p>
                <i class="bi bi-x-circle" onClick={fn}></i>
            </div>
            <hr />
            <form>
                <div>
                    <label htmlFor="artist_name">Artist Name</label><br />
                    <input type="text" placeholder='Artist Name' value={artistInfo.name} onChange={(e)=>handleInfo(e,'name')}/>
                </div>
                <div>
                    <label htmlFor="dob">Date of Birth</label><br />
                    <input type="date" placeholder='Date of Birth' value={artistInfo.dob} onChange={(e)=>handleInfo(e,'dob')}/><br />
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea name="bio" id="" cols="50" rows="5" placeholder='Bio' value={artistInfo.bio} onChange={(e)=>handleInfo(e,'bio')}></textarea><br />
                </div>
            </form>
            <div className="btn_square">
                <button onClick={fn}>Cancel</button><br />
                <button style={{backgroundColor:'#0059ff',color:'white'}} onClick={handleSubmit}>Add</button>
            </div>
        </div>
    </>
}
export default AddArtist