import '../css/addArtist.css'

function AddArtist({fn}) {
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
                    <input type="text" placeholder='Artist Name' />
                </div>
                <div>
                    <label htmlFor="dob">Date of Birth</label><br />
                    <input type="date" placeholder='Date of Birth' /><br />
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea name="bio" id="" cols="50" rows="5" placeholder='Bio'></textarea><br />
                </div>
            </form>
            <div className="btn_square">
                <button onClick={fn}>Cancel</button><br />
                <button style={{backgroundColor:'#0059ff',color:'white'}}>Add</button>
            </div>
        </div>
    </>
}
export default AddArtist