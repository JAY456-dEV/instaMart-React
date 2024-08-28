import React from 'react'

function CartSimmer() {
    return new Array(3).fill(null).map((_, idx) => {
        return <div className='cartProduct-child' key={idx}>
            <div className='prodImg'>
                <img src='' alt="" className='prodWidth' />
            </div>

            <div>
                <p className='prodName'></p>
                <p className='prodQuan'></p>
                <p className='prodPrice'></p>
            </div>

            <div className='cartPlusMinus'>
                <div className='itemCount'></div>
            </div>
        </div>
    })
}

export default CartSimmer