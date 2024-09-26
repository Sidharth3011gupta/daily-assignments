import React from "react";
 const UserCard=(props1)=>{
    return (
        <div className=" ml-96 w-2/5
        border border-white">
            <h3 >NAME:{props1.name}</h3>
            <p >USERNAME:{props1.username}
            </p>
        </div>
    )
    };

    export default UserCard;
