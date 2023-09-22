import { useState } from 'react'
import '../css/addSong.css'
import Navbar from './Navbar'
import Select from 'react-dropdown-select'
import AddArtist from './AddArtist'
import { useNavigate } from 'react-router-dom'

function AddSong() {

    let navigate=useNavigate()

    let [options, setOptions] = useState([
        { value: 'jone doe', id: "jone doe" },
        { value: 'jone doe', id: "jone doe" },
        { value: 'jone doe', id: "jone doe" },
        { value: 'alexi wolcof', id: "alexi wolcof" },
        { value: 'alexi wolcof', id: "alexi wolcof" },
        { value: 'alexi wolcof', id: "alexi wolcof" }
    ])

    let [toggleCloseBtn, setToggle] = useState(false)

    function handleToggle() {
        console.log('toggle called');
        console.log(toggleCloseBtn);
        (toggleCloseBtn) ? setToggle(false) : setToggle(true)
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
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="relese">Realeased Date</label><br />
                        <input type="date" />
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
                            >
                            </Select>
                        </div>
                        <button className='add_artist' onClick={handleToggle}><i class="bi bi-plus"></i> Add Artist</button>
                    </div>
                    <div>
                        <label htmlFor="">Song Poster</label><br />
                        <label htmlFor="album_pic" className='fileupload_lable'><i class="bi bi-cloud-arrow-up"></i> Upload image</label><br />
                        <input type="file" id="album_pic" accept='image/*' />
                    </div>
                    <div>
                        <label htmlFor="">Select Song</label><br />
                        <label htmlFor="album_pic" className='fileupload_lable'><i class="bi bi-cloud-arrow-up"></i> Upload song</label><br />
                        <input type="file" id="album_pic" accept='audio/*' />
                    </div>
                    <div>
                        <button style={{ backgroundColor: '#0059ff', color: 'white' }}>Submit</button>
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