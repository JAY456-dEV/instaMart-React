import React, { useContext, useEffect } from 'react'
import PaymentItemCard from './PaymentItemCard'
import { ProductDataContext } from '../../context/context'
import useFetch from '../../customHooks/useFetch'

function PaymentUserFillForm() {

    const { product, productMainData, setProductMainData, setGst, gst } = useContext(ProductDataContext)
    const { loading, apiData } = useFetch(`https://dummyjson.com/products`)

    useEffect(() => {
        if (apiData && apiData.products && apiData.products.length) {
            setProductMainData(apiData.products)
        }
    }, [apiData])

    return (
        <>
            <div>
                <h1 className='checkout'>CheckOut</h1>
            </div>
            <div className='main-UserAddress'>
                <div>
                    <form action="">
                        <div>
                            <h2>Billing details</h2>
                            <hr />
                            <div className='user-main-name'>
                                <div className='firstname name-common'>
                                    <label htmlFor="">First Name</label>
                                    <input type="text" />
                                </div>

                                <div className='lastname name-common'>
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className='company-info-payment'>
                                <label htmlFor="">Company Name</label>
                                <select name="" id="">
                                    <option value="">India</option>
                                </select>
                            </div>

                            <div className='street-address-payment'>
                                <label htmlFor="">Street Address</label>
                                <input type="text" placeholder='House number street name' />
                                <input type="text" placeholder='Apartment,suit,unit,etc' />
                            </div>

                            <div className='town-city-payment'>
                                <label htmlFor="">Town / City</label>
                                <input type="text" />
                            </div>
                            <button className='order-btn'>Place Order</button>
                        </div>
                    </form>
                </div>

                <div className='payment-page-orders'>
                    <div className='shopping-items-payment'>
                        <p>Item</p>
                        <p>Description</p>
                        <p>Quantity</p>
                        <p>Price</p>
                    </div>

                    <div className='main-card'>
                        {
                            product.map((item) => {
                                let findProduct = productMainData.find((prod) => prod.id === item.id)
                                return <PaymentItemCard props={findProduct} quntity={item.item} />
                            })
                        }
                    </div>
                    <hr className='line-payment' />
                </div>
            </div>
            <div className='total-price-payment'>
                <div className='gst-total common-payment-summary'>
                    <p>SubTotal </p>
                    <p>₹{
                        product.length > 0 && product.map((prod) => {
                            const show = apiData && apiData.products && apiData.products.length && apiData.products.find((item) => item.id == prod.id)
                            return show && (show.price * 81) * prod.item
                        }).reduce((acc, curr) => {
                            return acc + curr
                        })
                    }</p>
                </div>

                <div className='gst-payment common-payment-summary'>
                    <p>GST</p>
                    <p>{setGst(500)}</p>
                </div>
                <hr className='total-line' />

                <div className='payment-total'>
                    <p>Total</p>
                    <p>₹{
                        product.length > 0 && product.map((prod) => {
                            const show = apiData && apiData.products && apiData.products.length && apiData.products.find((item) => item.id == prod.id)
                            return show && (show.price * 81) * prod.item
                        }).reduce((acc, curr) => {
                            return acc + curr
                        })
                    } </p>
                </div>
            </div>
        </>
    )
}

export default PaymentUserFillForm