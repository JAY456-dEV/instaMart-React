import React from 'react'

function CategoryRound() {
    return new Array(6).fill(null).map((_, idx) => {
        return <>
            <div className="circle simmer-card-circle" key={idx}>
                <img src='' alt="" />
                <h3 className='category simmer-card-circle-text'></h3>
            </div >
        </>
    })
}

export default CategoryRound