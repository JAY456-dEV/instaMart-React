import React, { useContext, useEffect, useState } from 'react'
import { products } from '../../../ProductData'
import { ProductDataContext } from '../../context/context'
import useFetch from '../../customHooks/useFetch'
import InStocksimmer from '../../simmer/inStocksimmer'

function InStockProd() {

    const { heart, changeHeart, convertIntoNormal, setInStockProduct, instockProduct } = useContext(ProductDataContext)

    const item = products.slice(9, 15)

    const { loading, apiData } = useFetch(`https://dummyjson.com/products?limit=150`)

    useEffect(() => {
        if (apiData && apiData.products && apiData.products.length) {
            setInStockProduct(apiData.products.slice(9, 15))
        }
    }, [apiData])

    return (
        <>
            <section className="category-section">
                <h4 className="cate-prod">Category Products</h4>
                <p className="main-para">Do not miss the current offers until the end of March.</p>
                <div className="container">
                    <div className="cate-product">
                        <div className="cate-main">
                            <div className="left-cate">
                                <p className="bg-text">Only This Weak</p>
                                <h4>Make Your Grocery Shopping Easy With Us</h4>
                                <p className="para-cate">Feed your family the best</p>
                                <a href="">Shop Now</a>
                            </div>

                            <div className="right-cate left-cate">
                                <p className="bg-text">Only This Weak</p>
                                <h4>Get your everyday needs here with us</h4>
                                <p className="para-cate ">A different kind of grocery store</p>
                                <div className="btn">
                                    <a href="">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="prod-section-detial">
                        <div className="prod-main-sec">
                            {
                                !loading ? instockProduct.map((item, idx) => {
                                    return (
                                        <div className={`prod-first prod-first-${idx + 1}`} key={item.id} id={`stockLine${item.id}`}>
                                            <img src={item.thumbnail} alt="" />

                                            {
                                                heart[`heart${item.id}`] ? <i className="fa-solid fa-heart" style={{ color: "red" }} onClick={() => convertIntoNormal(item.id, `heart${item.id}`)}></i> : <i className="fa-regular fa-heart" onClick={() => changeHeart(item.id, `heart${item.id}`)}></i>
                                            }

                                            <p>{item.title}
                                            </p>
                                            <div className="star-2">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <h4 className="price">₹{(item.price * 81).toFixed(2)} <span>$1.99</span></h4>
                                            <i className="fa-solid fa-cart-shopping" style={{ backgroundColor: item.stock > 0 ? 'green' : 'red' }}></i><span className="stock" style={{ color: item.stock > 0 ? 'green' : 'red' }}>{item.stock > 0 ? 'INSTOCK' : 'OUTOFSTOCK'}</span>
                                        </div>
                                    )
                                }) : <div className='simmer-instock'>
                                    <InStocksimmer />
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className="banner">
                    <img src="./Img/image (43).png" alt="" />
                </div>
            </section >
        </>
    )
}

export default InStockProd