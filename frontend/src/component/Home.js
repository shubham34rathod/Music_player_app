import '../css/home.css'
import Navbar from './Navbar'
import tmpImg from '../images/jawan-1693838039.jpeg'
import { useNavigate } from 'react-router-dom'
import PlaySong from './PlaySong'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import {setPlayingSong} from './redux/slice/userSlice.js'

function Home() {

    let navigate = useNavigate()
    let dispatch=useDispatch()
    let logInStatus=useSelector((state)=>state.user.login)
    

    let [topSong, setTopSong] = useState([])
    let [topSong_2, setTopSong_2] = useState([])
    let [searchStr,setSearchStr]=useState('')
    let [topArtist,setTopArtist]=useState([])
    let newTop=[]
    // console.log('str',searchStr);

    let map=new Map()

    useEffect(() => {
        async function fetchSongs() {
            await axios.get(`http://localhost:8000/api/getSongs`)
                .then((res) => {
                    // console.log(res.data);
                    setTopSong(res.data)
                })
                .catch((error) => console.log(error))

                await axios.get(`http://localhost:8000/api/getAllSongs`)
                .then((res) => {
                    // console.log(res.data);
                    setTopSong_2(res.data)
                })
                .catch((error) => console.log(error))

                await axios.get(`http://localhost:8000/api/getTopArtist`)
                .then((res) => {
                    // console.log('top',res.data);
                    setTopArtist(res.data)
                })
                .catch((error) => console.log(error))
        }
        fetchSongs()
        
    }, [topSong])

    
    for(let x=0;x<topArtist.length;x++)
    {
        // console.log(x);
        if(map.has(topArtist[x].name))
        {
            // console.log('map value',topArtist[x].artist[0].name);
            continue;
        }
        else
        {
            // console.log(topArtist[x].artist[0].name);
            map.set(topArtist[x].artist[0].name,{dob:topArtist[x].artist[0].dob,bio:topArtist[x].artist[0].bio})
        }
    }
    // console.log(map.entries());
    for(let x of map.entries())
    {
        newTop.push(x)
    }
    console.log(newTop);

    return <>
        <Navbar fn={setSearchStr}></Navbar>
        <div className="container_box1">
            <div className="top_headings">
                <h4>All songs</h4>
                <button onClick={() =>(logInStatus)? navigate('/addSong'):alert('please login')}><i class="bi bi-plus"></i> Add New Song</button>
            </div>
            <div className="Top_10_songs">
                {topSong_2.filter((song)=>song.name.toLowerCase().includes(searchStr)).map((data, i) => <>
                    <div className="cart_box" onClick={()=>dispatch(setPlayingSong(data))}>
                        <div className="song_img" style={{ backgroundImage: tmpImg }}>
                            <img src={data.poster} alt="" />
                        </div>
                        <div className="songInfo">
                            <p style={{ fontSize: '18px' }}><b>{data.name}</b></p>
                            <p style={{ color: 'rgb(183, 183, 183)' }}>{(data.artist.length >= 1) ? data.artist[0].name : ''}</p>
                            {/* {console.log('data is',data.artist)} */}
                            <p style={{ color: 'rgb(183, 183, 183)' }}>{data.release_date}</p>
                        </div>
                        <div className="ratingBox">
                            {[...Array(5)].map((star, i) => {
                                let starPos = i + 1
                                return <>
                                    <i class="bi bi-star-fill" key={i} style={{ color: (starPos <= data.rating) ? 'orange' : 'white' }}></i>
                                </>
                            })}
                        </div>
                    </div>
                </>)}
            </div>
            
            <div className="top_headings">
                <h4>Top 10 songs</h4>
                <button onClick={() =>(logInStatus)? navigate('/addSong'):alert('please login')}><i class="bi bi-plus"></i> Add New Song</button>
            </div>
            <div className="Top_10_songs">
                {topSong.map((data, i) => <>
                    <div className="cart_box" onClick={()=>dispatch(setPlayingSong(data))}>
                        <div className="song_img" style={{ backgroundImage: tmpImg }}>
                            <img src={data.poster} alt="" />
                        </div>
                        <div className="songInfo">
                            <p style={{ fontSize: '18px' }}><b>{data.name}</b></p>
                            <p style={{ color: 'rgb(183, 183, 183)' }}>{(data.artist.length >= 1) ? data.artist[0].name : ''}</p>
                            {/* {console.log('data is',data.artist)} */}
                            <p style={{ color: 'rgb(183, 183, 183)' }}>{data.release_date}</p>
                        </div>
                        <div className="ratingBox">
                            {[...Array(5)].map((star, i) => {
                                let starPos = i + 1
                                return <>
                                    <i class="bi bi-star-fill" key={i} style={{ color: (starPos <= data.rating) ? 'orange' : 'white' }}></i>
                                </>
                            })}
                        </div>
                    </div>
                </>)}
            </div>
            <div className="top_10_artist">
                <h4>Top Artists</h4>
                <div className="artist_box">
                    <table>
                        <thead>
                            <tr>
                                <th>Artist</th>
                                <th>Born IN</th>
                                <th>Songs</th>
                            </tr>
                        </thead>
                        <tbody>                          
                            {newTop.map((data)=><>
                                <tr>
                                <td className='artistName'>{data[0]}</td>
                                <td className='bornIn'>{data[1].dob}</td>
                                <td className='artist_songs'>{data[1].bio}</td>
                            </tr>
                            </>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="play_box">
                <PlaySong></PlaySong>
            </div>
        </div>
    </>
}

export default Home