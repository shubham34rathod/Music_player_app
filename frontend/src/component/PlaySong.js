import '../css/playSong.css'
import tmpImg from '../images/jawan-1693838039.jpeg'
import tmpAudo from '../audio/public_Senorita.mp3'
import {FaStar} from 'react-icons/fa'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
// import { UseSelector } from 'react-redux/es/hooks/useSelector'

function PlaySong() {
    
    let [rating,setRating]=useState(null)
    let [hover,setHover]=useState(null)

    let songData=useSelector((state)=>state.user.currentSong)
    // console.log('abc',songData);

    async function handleRating(value)
    {
        console.log(value,'is');
        await axios.post(`http://localhost:8000/api/updateRating/${songData._id}`,{rating:value})
        .then((res)=>console.log(res.data))
        .catch((error)=>console.log(error))
        
    }

    return <>
        {(songData)? <>
        <div className="track_box">
            <h4>Music.com</h4>
            <div className="track_img">
                <img src={songData.poster} alt="" />
            </div>
            <p className="trackName">{songData.name}</p>
            <audio src={songData.song} controls></audio>
            <div className="rate_box">
                {[...Array(5)].map((star,i)=>{
                    let ratingValue=i+1
                    return <>
                    <label>
                        <input type="radio" name='rating' value={ratingValue} onClick={()=>{setRating(ratingValue); handleRating(ratingValue)}}/>
                        <FaStar className='star' size={20} color={ratingValue<=rating? "#ffc107":"#e4e5e9"}
                        style={{marginRight:'5px'}}
                        // onMouseEnter={()=>setHover(ratingValue)}
                        // onMouseLeave={()=>setHover(null)}
                        >
                        </FaStar>
                    </label>
                    </>
                    
                })}
            </div>
        </div>
        </>
        :
        <div className="track_box"></div>
    }
       
    </>
}

export default PlaySong