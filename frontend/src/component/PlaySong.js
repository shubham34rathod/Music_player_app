import '../css/playSong.css'
import tmpImg from '../images/jawan-1693838039.jpeg'
import tmpAudo from '../audio/public_Senorita.mp3'

function PlaySong()
{
    return <>
        <div className="track_box">
            <div className="track_img">
                <img src={tmpImg} alt="" />
            </div>
            <p className="trackName">Jawan</p>
            <audio src={tmpAudo} controls></audio>
        </div>
    </>
}

export default PlaySong