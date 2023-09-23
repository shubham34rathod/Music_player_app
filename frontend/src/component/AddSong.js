import { useState } from 'react'
import '../css/addSong.css'
import Navbar from './Navbar'
import Select from 'react-dropdown-select'
import AddArtist from './AddArtist'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddSong() {

    let navigate=useNavigate()

    let [songData,setSongData]=useState({
        name:'',
        release_date:'',
        artist:[],
        poster:'',
        song:'',
    })

    let [artistNames,setArtistNames]=useState([])

    async function uploadToCloud(value,prop)
    {
       if(prop==='poster')
       {
        console.log('poster');
        let data1 = new FormData()
        data1.append('file', value)
        data1.append('upload_preset', 'Music_app')
        await axios.post(`https://api.cloudinary.com/v1_1/df78wetic/image/upload`, data1)
            .then((res) => {
                console.log(res.data.secure_url)
                setSongData((data)=>({
                    ...data,
                    poster:res.data.secure_url
                }))
            })
            .catch((error) => console.log(error))
       }
       if(prop==='song')
       {
        console.log('songs');
        let data1 = new FormData()
        data1.append('file', value)
        data1.append('upload_preset', 'Music_app')
        await axios.post(`https://api.cloudinary.com/v1_1/df78wetic/upload`, data1)
            .then((res) => {
                console.log(res.data.secure_url)
                setSongData((data)=>({
                    ...data,
                    song:res.data.secure_url
                }))
            })
            .catch((error) => console.log(error))
       }
    }

    let [options, setOptions] = useState([
        { value: 'jone doe', id: "jone doe" },
        { value: 'jone weak', id: "jone weak" },
        { value: 'jone cena', id: "jone cena" },
        { value: 'alexi 1', id: "alexi 1" },
        { value: 'alexi 2', id: "alexi 2" },
        { value: 'alexi 3', id: "alexi 3" }
    ])

    let [toggleCloseBtn, setToggle] = useState(false)

    function handleToggle() {
        console.log('toggle called');
        console.log(toggleCloseBtn);
        (toggleCloseBtn) ? setToggle(false) : setToggle(true)
    }

    function handleSongData(e,prop)
    {
        setSongData((data)=>({
            ...data,
            [prop]:e.target.value
        }))
    }

    function handleArtist(value)
    {
        // console.log(value);
        setArtistNames(value)
    }

    async function handleSubmit()
    {
        songData.artist=artistNames
        console.log(songData);

        await axios.post(`http://localhost:8000/api/addSong`,songData)
        .then((res)=>console.log(res.data))
        .catch((error)=>console.log(error))
    }

    return <>
        <Navbar></Navbar>
        <div className="addSong_box">
            <i class="bi bi-arrow-left" style={{fontSize:'20px'}} onClick={()=>navigate('/')}></i>
            <h4>Adding a new song</h4>
            <div className="form_box">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="name">Song Name</label><br />
                        <input type="text" placeholder='song name' value={songData.name} onChange={(e)=>handleSongData(e,'name')}/>
                    </div>
                    <div>
                        <label htmlFor="relese">Realeased Date</label><br />
                        <input type="date" value={songData.release_date} onChange={(e)=>handleSongData(e,'release_date')}/>
                    </div>
                    <div className='artistSelect_box'>
                        <div style={{ width: '85%' }}>
                            <label htmlFor="value">Artists</label>
                            <Select
                                name="Select"
                                options={options}
                                labelField="id"
                                valueField="value"
                                multi
                                searchable="true"
                                color='#0059ff;'
                                style={{ color: 'black', backgroundColor: 'white', width: '78%', borderRadius: '8px' }}
                                onChange={(value)=>handleArtist(value)}
                            >
                            </Select>
                        </div>
                        <button className='add_artist' onClick={handleToggle}><i class="bi bi-plus"></i> Add Artist</button>
                    </div>
                    <div>
                        <label htmlFor="">Song Poster</label><br />
                        <label htmlFor="album_pic" className='fileupload_lable'><i class="bi bi-cloud-arrow-up"></i> Upload image</label><br />
                        <input type="file" id="album_pic" accept='image/*' onChange={(e)=>uploadToCloud(e.target.files[0],'poster')}/>
                    </div>
                    <div>
                        <label htmlFor="">Select Song</label><br />
                        <label htmlFor="song" className='fileupload_lable'><i class="bi bi-cloud-arrow-up"></i> Upload song</label><br />
                        <input type="file" id="song" accept='audio/*' onChange={(e)=>uploadToCloud(e.target.files[0],'song')}/>
                    </div>
                    <div>
                        <button style={{ backgroundColor: '#0059ff', color: 'white' }} onClick={handleSubmit}>Submit</button>
                        <button>Cancel</button>
                    </div>
                </form>
            </div>
            {toggleCloseBtn &&
                <div className="add_artist_box">
                    <AddArtist fn={handleToggle}></AddArtist>
                </div>
            }
        </div>
    </>
}

export default AddSong