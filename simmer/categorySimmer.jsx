import React from 'react'

function CategorySimmer() {
    return new Array(10).fill(null).map((_, idx) => {
        return <>
            <div className='category-card' key={idx}>
                <img src='' alt="" width='190px' style={{ borderRadius: '5px' }} />
                <p></p>
                <div className='priceTags'>
                    <p></p>
                    <div className="buttons">
                        <div className="quantity"></div>
                    </div>
                    {/* <button className='cartBtn'></button> */}
                </div>
            </div>
        </>
    })
}

export default CategorySimmer 