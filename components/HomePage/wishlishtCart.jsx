import React, { useContext } from 'react'
import { ProductDataContext } from '../../context/context'
import { createPortal } from 'react-dom'
import CartSimmer from '../../simmer/cartsimmer'
import useFetch from '../../customHooks/useFetch'


function WishlishtCart({ setClickedWishlist }) {

    const { product, wishlist, deleteItem, user } = useContext(ProductDataContext)

    const { loading, apiData } = useFetch(`https://dummyjson.com/products?limit=100`)
    return (
        <>
            {
                createPortal(
                    <div className='main-wishlist-portal'>
                        <div className='cart-main' style={{ top: window.scrollY }}>
                            <div className='top-detail'>
                                <h2>My Cart</h2>
                                <i class="fa-solid fa-xmark cartCancel" onClick={() => setClickedWishlist(false)}></i>
                            </div>

                            <div className='addedItemCart'>
                                <div className='deliveryTime'>
                                    <div className='stopwatch'>
                                        <img src="../Img/stopwatch.png" alt="" style={{ width: '30px' }} />
                                    </div>
                                    <div className='deliveryDetail'>
                                        <p>Delivery in 16 minute</p>
                                        <p>Shipment of 1 item</p>
                                    </div>
                                </div>

                                <div className='cartProducts'>
                                    {
                                        !loading ? wishlist.map((prod) => {
                                            if (apiData && apiData.products && apiData.products.length) {
                                                const item = apiData.products.find((item) => item.id === prod.id) // ye hamra total product wala data hai
                                                return (
                                                    <div className='cartProduct-child' key={item.id}>
                                                        <div className='prodImg'>
                                                            <img src={item.thumbnail} alt="" className='prodWidth' />
                                                        </div>

                                                        <div>
                                                            <p className='prodName'>{item.title}</p>
                                                            <p className='prodQuan'>500 ML</p>
                                                            <p className='prodPrice'>₹{item.price}</p>
                                                        </div>

                                                        <div>
                                                            <button className='cartPlusMinus whislist-remove' onClick={() => deleteItem(item.id, `heart${item.id}`)}>Remove</button>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        }) : <CartSimmer />
                                    }
                                </div>
                            </div>

                            <div className='billDetail-main'>
                                <p className='billDetail'>Bill Details</p>
                                <div className='itemTotal'>
                                    <i class="fa-solid fa-money-bill"></i>
                                    <p>Items total</p>
                                </div>

                                <div className='deliveryCharge'>
                                    <i class="fa-solid fa-motorcycle"></i>
                                    <p>Delivery Charge</p>
                                </div>

                                <div className='grandTotal'>
                                    <p>Grand Total</p>
                                    <p>₹{
                                        product.map((prod) => {
                                            let show = apiData && apiData.length && apiData.find((item) => item.id === prod.id)
                                            return show.price * prod.item
                                        }).reduce((acc, curr) => {
                                            return acc + curr
                                        }, 0)
                                    }</p>
                                </div>
                            </div>

                            <div className='Cancellation-Policy'>
                                <h3>Cancellation Policy</h3>
                                <p>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
                            </div>

                            <div className='btnToProceed'>
                                <button className='totalBill-btn'>
                                    <div className='infoPrice'>
                                        <p>₹{
                                        product.map((prod) => {
                                            let show = apiData && apiData.length && apiData.find((item) => item.id === prod.id)
                                            return show.price * prod.item
                                        }).reduce((acc, curr) => {
                                            return acc + curr
                                        }, 0)
                                    }</p>
                                        <p className='totalprice-text'>TOTAL</p>
                                    </div>
                                    <div className='loginto'>
                                        <p>{user ? 'Go To Cart' : 'Login To Proceed '}<i class="fa-solid fa-chevron-right"></i></p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.querySelector('#portal')
                )
            }
        </>
    )
}

export default WishlishtCart
