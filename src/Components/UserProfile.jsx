import React from "react";
import { useSelector } from "react-redux";

function UserProfile(){
    const selector = useSelector((state) => state.userData);
    const loading = localStorage.getItem('loading');
    if(loading===false){
        return(
            <>
            {/* <p>{localStorage.getItem('response-error')}</p> */}
            <p>error</p>
            </>
        )
    }
    
    else{
        // const storeUser = JSON.parse(localStorage.getItem('user'));
        return(
            <div className="profile-details">
                {/* <p>{storeUser.username}</p>
                <p>{storeUser.email}</p>
                <p>{storeUser.firstName}</p>
                <p>{storeUser.lastName}</p>
                <p>{storeUser.gender}</p> */}
                {/* <p>Age</p> */}
                
                <div className="grid-container">
                <div>
                <h4>Id:</h4>
                <p>{selector.id}</p>
                <hr />
                </div>
                <div>
                <h4>UserName:</h4>
                <p>{selector.username}</p>
                <hr />
                </div>
                <div>
                <h4>Email-Id:</h4>
                <p>{selector.email}</p>
                <hr />
                </div>
                <div>
                <h4>First Name:</h4>
                <p>{selector.firstName}</p>
                <hr />
                </div>
                <div>
                <h4>last Name:</h4>
                <p>{selector.lastName}</p>
                <hr />
                </div>
                <div>
                <h4>Gender:</h4>
                <p>{selector.gender}</p>
                <hr />
                </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;