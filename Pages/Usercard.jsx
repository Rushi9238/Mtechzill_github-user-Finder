import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../Context/ThemeContext'
import {ImLocation2} from 'react-icons/im'
const Usercard = () => {
    const { userName, userFound, setUserFound } = useContext(ThemeContext)
    const [userdata,setUserdata]=useState({})
    useEffect(() => {
        if(userFound){
            fetchUserAPI()
        }
    }, [])
    const fetchUserAPI=async()=>{
        try{
            const api=await fetch(`https://api.github.com/users/${userName}`)
            const respo=await api.json()
            // console.log(respo);
            setUserdata(respo)
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <>
       <div className='container mx-auto'>
        <div className="userHeadline">
            {userName} GitHub Profile
        </div>
       {
            userdata && <div className='usercard'>
                <div className="innerDiv rounded-2xl">
                    <div className="userleftside">
                        <img className='userImg rounded-full' src={userdata && userdata.avatar_url} alt="" />
                    </div>
                    <div className="userRightSide">
                        <div className="userName">
                            {userdata && userdata.name}
                        </div>
                        <div className="userStatus">
                            <div className="userRepo usercommon">
                                Repositories: {userdata && userdata.public_repos}
                            </div>
                            <div className="userGits usercommon">
                                Public Gists: {userdata && userdata.public_gists}
                            </div>
                            <div className="userfollower usercommon">
                                    Followers:{userdata && userdata.followers}
                            </div>
                            <div className="userfollowing usercommon">
                                Following:{userdata && userdata.following}
                            </div>

                        </div>
                        <div className="userLocation">
                            <ImLocation2/> {userdata && userdata.location}
                        </div>
                        <div className="userProfile">
                            <a href={userdata && userdata.html_url} target='_blank'><button className='rounded-lg'>Profile</button></a>
                        </div>
                    </div>
                </div>
            </div>
        }
       </div>
        </>
    )
}

export default Usercard