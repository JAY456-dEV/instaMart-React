import React, { useContext, useEffect, useState } from 'react'
// import { products } from '../../../ProductData'
import { ProductDataContext } from '../../context/context'
import useFetch from '../../customHooks/useFetch'

function NewProdSec() {

    const { addToCart, addMultipleItem, removeItem, checkBtn, product, changeHeart, convertIntoNormal, heart, setNewProdSec, newProdSec } = useContext(ProductDataContext)

    const { loading, apiData } = useFetch(`https://dummyjson.com/products`)

    useEffect(() => {
        if (apiData && apiData.products && apiData.products.length) {
            setNewProdSec(apiData.products.slice(0, 6))
        }
    }, [apiData])


    return newProdSec && newProdSec.length && (
        <>
            <section className="product-shop">
                <h4 className="cate-prod">Editor's Pick</h4>
                <p className="main-para">New products with updated stocks.</p>
                <div className="container">
                    <div className="prod-sec">
                        <div className="box1 box single-prod">
                            <div className="border-box"></div>
                            <img src={newProdSec[0].thumbnail} alt="100 Percent Apple Juice" />

                            {
                                heart.heart1 ? <i className="fa-solid fa-heart" style={{ color: "red" }} onClick={() => convertIntoNormal(newProdSec[0].id, `heart1`)}></i> : <i className="fa-regular fa-heart" onClick={() => changeHeart(newProdSec[0].id, 'heart1')}></i>
                            }

                            <div className="star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>

                            <h4>{newProdSec[0].title}</h4>

                            <p>{newProdSec[0].description}</p>

                            <h4 className="price">₹{(newProdSec[0].price * 81).toFixed(2)} <span>₹1.99</span></h4>
                            <hr />
                            <p>This Product Is About Run OUT</p>
                            <div className="bar"></div>
                            <p>Available Only: 23</p>
                            {
                                checkBtn.btn1 ? <div className="buttons">
                                    <i className="fa-solid fa-minus bi bi-dash-lg" onClick={() => removeItem(newProdSec[0].id, 'btn1')}></i>
                                    <div className="quantity">{product.map((prod) => prod.id === newProdSec[0].id ? prod.item : '')}</div>
                                    <i className="fa-solid fa-plus bi bi-plus-lg" onClick={() => addMultipleItem(newProdSec[0].id)}></i>
                                </div> : <button className='endTime' onClick={() => addToCart(newProdSec[0].id, 'btn1')}>Add To Cart</button>
                            }

                        </div>

                        <div className="box1 box">
                            <div className="box2 box-first">
                                <img src={newProdSec[1].thumbnail} alt="Great Value Rising Crust Pizza" />
                                <i className="fa-regular fa-heart"></i>
                                <div className="prodect-detial">
                                    <h4>{newProdSec[1].title}</h4>

                                    {
                                        heart.heart2 ? <i class="fa-solid fa-heart" style={{ color: "red" }} onClick={() => convertIntoNormal(newProdSec[1].id, `heart2`)}></i> : <i className="fa-regular fa-heart" onClick={() => changeHeart(newProdSec[1].id, 'heart2')}></i>
                                    }

                                    <div className="star-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <h4 className="price">₹{(newProdSec[1].price * 81).toFixed(2)} <span>₹1.99</span></h4>

                                    {
                                        checkBtn.btn2 ? <div className="buttons">
                                            <i className="fa-solid fa-minus bi bi-dash-lg" onClick={() => removeItem(newProdSec[1].id, 'btn2')}></i>
                                            <div className="quantity">{product.map((prod) => prod.id === newProdSec[1].id ? prod.item : '')}</div>
                                            <i className="fa-solid fa-plus bi bi-plus-lg" onClick={() => addMultipleItem(newProdSec[1].id)} ></i>
                                        </div> : <button className='endTime' onClick={() => addToCart(newProdSec[1].id, 'btn2')}>Add To Cart</button>
                                    }
                                </div>
                            </div>
                            <hr style={{ width: '100%', marginRight: '90px' }} />
                            <div className="box2 box-first box-second">
                                <img src={newProdSec[2].thumbnail} alt="Simply Orange Juice" />
                                <i className="fa-regular fa-heart"></i>
                                <div className="prodect-detial">
                                    <h4>{newProdSec[2].title}</h4>

                                    {
                                        heart.heart3 ? <i class="fa-solid fa-heart" style={{ color: "red" }} onClick={() => convertIntoNormal(newProdSec[2].id, `heart3`)}></i> : <i className="fa-regular fa-heart" onClick={() => changeHeart(newProdSec[2].id, 'heart3')}></i>
                                    }

                                    <div className="star-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <h4 className="price">₹{(newProdSec[2].price * 81).toFixed(2)} <span>₹1.99</span></h4>
                                    {
                                        checkBtn.btn3 ? <div className="buttons">
                                            <i className="fa-solid fa-minus bi bi-dash-lg" onClick={() => removeItem(newProdSec[2].id, 'btn3')}></i>
                                            <div className="quantity">{product.map((prod) => prod.id === newProdSec[2].id ? prod.item : '')}</div>
                                            <i className="fa-solid fa-plus bi bi-plus-lg" onClick={() => addMultipleItem(newProdSec[2].id)}></i>
                                        </div> : <button className='endTime' onClick={() => addToCart(newProdSec[2].id, 'btn3')}>Add To Cart</button>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="box1 last-prod box" style={{ marginLeft: '90px' }}>
                            <div className="border-box"></div>
                            <img src={newProdSec[3].thumbnail} alt="100 Percent Apple Juice" />

                            {
                                heart.heart4 ? <i class="fa-solid fa-heart" style={{ color: "red" }} onClick={() => convertIntoNormal(newProdSec[3].id, `heart4`)}></i> : <i className="fa-regular fa-heart" onClick={() => changeHeart(newProdSec[3].id, 'heart4')}></i>
                            }

                            <div className="star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>

                            <h4>{newProdSec[3].title}</h4>

                            <p>{newProdSec[3].description}</p>

                            <h4 className="price">₹{(newProdSec[3].price * 81).toFixed(2)} <span>₹1.99</span></h4>
                            <hr />
                            <p>This Product Is About Run OUT</p>
                            <div className="bar"></div>
                            <p>Available Only: 23</p>
                            {
                                checkBtn.btn4 ? <div className="buttons">
                                    <i className="fa-solid fa-minus bi bi-dash-lg" onClick={() => removeItem(newProdSec[3].id, 'btn4')} ></i>
                                    <div className="quantity">{product.map((prod) => prod.id === newProdSec[3].id ? prod.item : '')}</div>
                                    <i className="fa-solid fa-plus bi bi-plus-lg" onClick={() => addMultipleItem(newProdSec[3].id)}></i>
                                </div> : <button className='endTime' onClick={() => addToCart(newProdSec[3].id, 'btn4')}>Add To Cart</button>
                            }
                        </div>

                        <div className="box1 box">
                            <div className="box2 box-first last-prod-first">
                                <img src={newProdSec[4].thumbnail} alt="Cantaloupe Melon" style={{ objectFit: 'contain' }} />
                                <div className="prodect-detial">
                                    <h4>{newProdSec[4].title}</h4>

                                    {
                                        heart.heart5 ? <i class="fa-solid fa-heart" style={{ color: "red" }} onClick={() => convertIntoNormal(newProdSec[4].id, `heart5`)}></i> : <i className="fa-regular fa-heart" onClick={() => changeHeart(newProdSec[4].id, 'heart5')}></i>
                                    }

                                    <div className="star-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <h4 className="price">₹{(newProdSec[4].price * 81).toFixed(2)} <span>₹1.99</span></h4>
                                    {
                                        checkBtn.btn5 ? <div className="buttons">
                                            <i className="fa-solid fa-minus bi bi-dash-lg" onClick={() => removeItem(newProdSec[4].id, 'btn5')} ></i>
                                            <div className="quantity">{product.map((prod) => prod.id === newProdSec[4].id ? prod.item : '')}</div>
                                            <i className="fa-solid fa-plus bi bi-plus-lg" onClick={() => addMultipleItem(newProdSec[4].id)}></i>
                                        </div> : <button className='endtime2' onClick={() => addToCart(newProdSec[4].id, 'btn5')}>Add To Cart</button>
                                    }
                                </div>
                            </div>
                            <hr style={{ width: '115%' }} />
                            <div className="box2 box-first last-prod-sec">
                                <img src={newProdSec[5].thumbnail} alt="Angel Soft Toilet Paper" />
                                <div className="prodect-detial prodect-detail-4">
                                    <h4>{newProdSec[5].title}</h4>

                                    {
                                        heart.heart6 ? <i class="fa-solid fa-heart" style={{ color: "red" }} onClick={() => convertIntoNormal(newProdSec[5].id, `heart6`)}></i> : <i className="fa-regular fa-heart" onClick={() => changeHeart(newProdSec[5].id, 'heart6')}></i>
                                    }

                                    <div className="star-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <h4 className="price">₹{(newProdSec[5].price * 81).toFixed(2)} <span>₹1.99</span></h4>
                                    {
                                        checkBtn.btn6 ? <div className="buttons">
                                            <i className="fa-solid fa-minus bi bi-dash-lg" onClick={() => removeItem(newProdSec[5].id, 'btn6')}></i>
                                            <div className="quantity">{product.map((prod) => prod.id === newProdSec[5].id ? prod.item : '')}</div>
                                            <i className="fa-solid fa-plus bi bi-plus-lg" onClick={() => addMultipleItem(newProdSec[5].id)}></i>
                                        </div> : <button className='endTime' onClick={() => addToCart(newProdSec[5].id, 'btn6')}>Add To Cart</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewProdSec
