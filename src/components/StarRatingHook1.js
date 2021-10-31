import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";
import EmojiRating from 'react-emoji-rating'

const StarRatingHook1=()=>{
    const path="/assets/images/";
    const [description,setDescription]=useState("No Rating Given");
    const [imageName,setimageName]=useState("");
    const ratingChanged=(newRating)=>{
        //console.log(newRating);
        switch (newRating) {
                case 1:setDescription("Low")
                setimageName(path+'angry2.jpg')
                break;
                case 2:setDescription("Medium")
                setimageName(path+'angry1.jpg')
                break;
                case 3:setDescription("Good")
                setimageName(path+'smiley1.png')
                break;
                case 4:setDescription("Excellent")
                setimageName(path+'smiley2.png')
                break;
                default:
                   setDescription("Superb!")
                   setimageName(path+'smiley3.jpg')
                }
    }
    var imgData=''
    if(imageName!=""){
       imgData=<img src={imageName} alt="image" style={{ "height":"80px"}}/>
    }
    
    return (
        <>
        <div  class="col-sm-6" style={{border:'2px solid #ccc',margin:'10px'}}>
            <h3>UseState Hook Rating </h3>
              <div>
                        <ReactStars
                        count={5}
                        onChange={ratingChanged} 
                        size={36}
                        activeColor="#ffd700"
                        // value="1"
                        /> 

                       {imgData}

                        <h3 style={{color:'red','text-align': 'left'}}>{description}</h3>
                </div> 
                
        </div>
        </>
  
    )
};

export default StarRatingHook1;