import React, { useContext } from 'react'
import { ProductDataContext } from '../../context/context'
import StarRating from './starRating'

function CategoryCard({ item }) {
    const { id, thumbnail, title, price, rating, availabilityStatus } = item

    const { addToCart, addMultipleItem, removeItem, checkBtn, product } = useContext(ProductDataContext)
    return (
        <div className='category-card'>
            <img src={thumbnail} alt="" width='190px' style={{ borderRadius: '5px' }} />
            <p className='availabilityStatus'>{availabilityStatus}</p>
            <p>{title}</p>

            <div className="star-rating">
                <div className="stars-outer">
                    <div className="stars-inner" style={{ width: `${(rating / 5) * 100}px` }}></div>
                </div>
            </div>

            <div className='priceTags'>
                <p>₹{(price * 81).toFixed(2) || 'none'}</p>
                {checkBtn[`btn${id}`] ? <div className="buttons">
                    <i className="fa-solid fa-minus bi bi-dash-lg" onClick={() => removeItem(id, `btn${id}`)}></i>
                    <div className="quantity">{product.map((prod) => prod.id === id ? prod.item : '')}</div>
                    <i className="fa-solid fa-plus bi bi-plus-lg" onClick={() => addMultipleItem(id)}></i>
                </div> : <button className='cartBtn' onClick={() => addToCart(id, `btn${id}`)}>ADD</button>}
            </div>
        </div >
    )
}

export default CategoryCard