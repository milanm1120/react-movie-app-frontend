import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa'
import '../stylesheets/StarRating.css'

const setApiRating = (ratingValue) => {
    console.log(ratingValue);
}

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
 
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

            return (
                <label>
                    <input type="radio" id='radiorating' className="rating" value={ratingValue} 
                        onClick = {() => setRating(ratingValue), setApiRating(ratingValue) }
                    />
                    <FaStar 
                        className='star' size={25} color={'white', ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        onMouseEnter = {() => setHover(ratingValue)}
                        onMouseLeave = {() => setHover(null)}
                    />
                </label>
            )
            })}
        </div>
    )
}

export default StarRating