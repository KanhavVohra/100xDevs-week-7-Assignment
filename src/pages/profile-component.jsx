import Navbar from "../components/navbar"


function Profile() {
    return (
        <div>
            <Navbar/>
            <div className="card">
        
            <div className="name-div">
                <img className="profile-pic" src="https://via.placeholder.com//150" alt="" />
                <h3>Rita Correia <strong>32</strong></h3>
                <h4>London</h4>
            </div>
            <hr />
            <div className="stats-div">
                <div className="Followers">
                <h3>80K</h3>
                <h4>Followers</h4>
                </div>

                <div className="Likes">
                    <h3>803K</h3>
                    <h4>Likes</h4>
                </div>

                <div className="Photos">
                    <h3>1.4K</h3>
                    <h4>Photos</h4>
                </div>
            </div>           
            </div>
        </div>
      
    )
}

export default Profile

//https://github.com/JojoDuke/Profile-Card-Design