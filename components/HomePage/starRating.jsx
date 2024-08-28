import React from 'react'

function StarRating() {
    return new Array(5).fill(null).map((_, idx) => {
        return (
            <i class="fa-solid fa-star"></i>
        )
    })
}

export default StarRating