import React, { useContext, useEffect } from 'react'
import { ProductDataContext } from '../../context/context'
import useFetch from '../../customHooks/useFetch'

function BestSellers() {
    const { addToCart, addMultipleItem, removeItem, checkBtn, product, changeHeart, heart, convertIntoNormal, setBestSeller, bestSeller } = useContext(ProductDataContext)

    const { loading, apiData } = useFetch(`https://dummyjson.com/products?limit=100`)

    useEffect(() => {
        if (apiData && apiData.products && apiData.products.length) {
            setBestSeller(apiData.products.slice(30, 39))
        }
    }, [apiData])


    return bestSeller && bestSeller.length && (
        <>
            <section className="seller-main">
                <h4 className="cate-prod">BEST SELLERS</h4>
                <p className="main-para">Dont miss this opportunity at a special discount just for this week.</p>
                <div className="container">
                    <div className="main-flex-cont">
                        <div className="best-seller">
                            <div className="first-list">
                                {bestSeller.map((item, index) => {
                                    return (
                                        <div className="list-item-1" key={item.id} id={`lineId${item.id}`}>
                                            <div className="item-img">
                                                <img src={item.thumbnail} alt="" />
                                                {
                                                    heart[`heart${item.id}`] ? <i class="fa-solid fa-heart" style={{ color: "red" }} onClick={() => convertIntoNormal(item.id, `heart${item.id}`)}></i> : <i className="fa-regular fa-heart fa-heart-5" onClick={() => changeHeart(item.id, `heart${item.id}`)}></i>
                                                }
                                            </div>

                                            <div className="item-detail">
                                                <p>{item.title}
                                                </p>
                                                <div className="star-rating">
                                                    <div className="stars-outer">
                                                        <div className="stars-inner" style={{ width: `${(item.rating / 5) * 100}px` }}></div>
                                                    </div>
                                                </div>
                                                <h4 className="price">₹{(item.price * 81).toFixed(2)} <span>$1.99</span></h4>
                                                {
                                                    checkBtn[`btn${item.id}`] ? <div className="buttons">
                                                        <i className="fa-solid fa-minus bi bi-dash-lg" onClick={() => removeItem(item.id, `btn${item.id}`)}></i>
                                                        <div className="quantity">{product.map((prod) => prod.id === item.id ? prod.item : '')}</div>
                                                        <i className="fa-solid fa-plus bi bi-plus-lg" onClick={() => addMultipleItem(item.id)}></i>
                                                    </div> : <button className='best-seller-btn' onClick={() => addToCart(item.id, `btn${item.id}`)}>Add To Cart</button>
                                                }
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default BestSellers