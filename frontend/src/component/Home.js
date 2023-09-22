import '../css/home.css'
import Navbar from './Navbar'
import tmpImg from '../images/jawan-1693838039.jpeg'
import { useNavigate } from 'react-router-dom'
import PlaySong from './PlaySong'

function Home() {

    let navigate=useNavigate()

    return <>
        <Navbar></Navbar>
        <div className="container_box1">
            <div className="top_headings">
                <h4>Top 10 songs</h4>
                <button onClick={()=>navigate('/addSong')}><i class="bi bi-plus"></i> Add New Song</button>
            </div>
            <div className="Top_10_songs">
                <div className="cart_box">
                    <div className="song_img" style={{ backgroundImage: tmpImg }}>
                        <img src={tmpImg} alt="" />
                    </div>
                    <div className="songInfo">
                        <p style={{ fontSize: '18px' }}><b>Song name</b></p>
                        <p style={{ color: 'rgb(183, 183, 183)' }}>Artist name</p>
                        <p style={{ color: 'rgb(183, 183, 183)' }}>Relesed on 21 Nov 2023</p>
                    </div>
                    <div className="ratingBox">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </div>
                </div>
                <div className="cart_box"></div>
                <div className="cart_box"></div>
                <div className="cart_box"></div>
                <div className="cart_box"></div>
                <div className="cart_box"></div>
            </div>
            <div className="top_10_artist">
                <h4>Top 10 Artists</h4>
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
                            <tr>
                                <td className='artistName'>Jone Doe</td>
                                <td className='bornIn'>26th Nov 1975</td>
                                <td className='artist_songs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, recusandae?</td>
                            </tr>
                            <tr>
                                <td className='artistName'>Jone Doe</td>
                                <td className='bornIn'>26th Nov 1975</td>
                                <td className='artist_songs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, recusandae?</td>
                            </tr>
                            <tr>
                                <td className='artistName'>Jone Doe</td>
                                <td className='bornIn'>26th Nov 1975</td>
                                <td className='artist_songs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, recusandae?</td>
                            </tr>
                            <tr>
                                <td className='artistName'>Jone Doe</td>
                                <td className='bornIn'>26th Nov 1975</td>
                                <td className='artist_songs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, recusandae?</td>
                            </tr>
                            <tr>
                                <td className='artistName'>Jone Doe</td>
                                <td className='bornIn'>26th Nov 1975</td>
                                <td className='artist_songs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, recusandae?</td>
                            </tr>
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