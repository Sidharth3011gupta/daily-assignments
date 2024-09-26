import React from "react";
 const PostCard=(props)=>{
    return (
        <div className=" ml-40 w-3/4
        border border-white">
            
            <h3 >TITLE:{props.title}</h3>
            <p >BODY:{props.body}
            </p>
             </div>
    )
    };

    export default PostCard;
