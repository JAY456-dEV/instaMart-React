import React, { useContext, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { ProductDataContext } from '../context/context'

function SearchPage() {

    const { setSearchTitleDataShow, setPerIdDetailSearch, perIdDetailSearch, product, checkBtn, addToCart, addMultipleItem, removeItem } = useContext(ProductDataContext)
    const param = useParams()
    const [loading, setLoading] = useState(false)
    console.log(param)

    async function fetchDataById() {
        setLoading(true)
        const response = await fetch(`https://dummyjson.com/products/${param.title}`)
        const data = await response.json()
        if (data) {
            setPerIdDetailSearch(data)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchDataById()
    }, [])

    useEffect(() => {
        setSearchTitleDataShow(false)
    }, [])

    console.log(perIdDetailSearch)

    if (loading) {
        return <div>Loading....</div>
    }

    return (
        <>
            <div className='search-main-page'>
                <div className='search-img'>
                    <img src={perIdDetailSearch.thumbnail} alt="" />
                </div>

                <div className='product-detail-search'>
                    <h2>{perIdDetailSearch.title}</h2>
                    <p className='desc-search'>{perIdDetailSearch.description}</p>
                    <div className='price-sec-search'>
                        <h1>₹{(perIdDetailSearch.price * 81).toFixed(2)}</h1>
                        <p>({`${perIdDetailSearch.discountPercentage}`}% Off)</p>
                    </div>

                    <div className='rating-stock-search'>
                        <div className="star-rating">
                            <div className="stars-outer" >
                                <div className="stars-inner" style={{ width: `${(perIdDetailSearch.rating / 5) * 100}px` }}></div>
                            </div>
                        </div>
                        <div className='instock-search'>
                            <p>inStock</p>
                        </div>
                    </div>

                    <div className='main-logo'>
                        <div className='common-logoSearch'>
                            <img src="../img/searchdeliverylogo.png" alt="" />
                            <p>Free Delivery</p>
                        </div>

                        <div className='common-logoSearch'>
                            <img src="../img/freedelivery.png" alt="" />
                            <p>Free Delivery</p>
                        </div>

                        <div className='common-logoSearch'>
                            <img src="../img/securetransaction.png" alt="" />
                            <p>Secure Transaction</p>
                        </div>
                    </div>

                    <div className='btn-detailsearch'>
                        {
                            checkBtn[`btn${perIdDetailSearch.id}`] ? <div className="buttons">
                                <i className="fa-solid fa-minus bi bi-dash-lg" onClick={() => removeItem(perIdDetailSearch.id, `btn${perIdDetailSearch.id}`)}></i>
                                <div className="quantity">{product.map((prod) => prod.id === perIdDetailSearch.id ? prod.item : '')}</div>
                                <i className="fa-solid fa-plus bi bi-plus-lg" onClick={() => addMultipleItem(perIdDetailSearch.id)}></i>
                            </div> : <button className='best-seller-btn' onClick={() => addToCart(perIdDetailSearch.id, `btn${perIdDetailSearch.id}`)}>Add To Cart</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchPage