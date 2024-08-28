import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { ProductDataContext } from '../../context/context'
import { createPortal } from 'react-dom'
import useFetch from '../../customHooks/useFetch'
import CartSimmer from '../../simmer/cartsimmer'
import useOutsideClick from '../../customHooks/useOutsideClick'
import { loadStripe } from '@stripe/stripe-js';


export default function ShopCart({ setClickedCart }) {

    const { product, addMultipleItem, removeItem, user } = useContext(ProductDataContext)
    const { loading, apiData } = useFetch(`https://dummyjson.com/products?limit=150`)

    const refDiv = useRef()
    useOutsideClick(refDiv, () => setClickedCart(false))

    const [allProduct, setAllProduct] = useState([])
    async function makePayment() {
        const stripe = await loadStripe('pk_test_51PiUIsJznSsG3SK4WSbB56HsmpfHmGPN44jGzIOdpKVIC0F8ldrWOlGE8YPqdZ5EbiWnwldClGXys9JTuHm9lbSo00AP9v48Vk');

        if (!allProduct) {
            console.error("No products found");
            return;
        }

        const body = JSON.stringify({
            products: allProduct
        });

        try {
            const response = await fetch("http://localhost:7000/api/create-checkout-session", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body,
            });

            if (!response.ok) {
                // Log response status and text if fetch fails
                const errorText = await response.text();
                console.error(`Fetch error: ${response.status} ${response.statusText} - ${errorText}`);
                return;
            }

            const session = await response.json();
            console.log('Checkout session:', session);

            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            });

            if (result.error) {
                console.error('Stripe error:', result.error.message);
            }
        } catch (error) {
            console.error("Error creating checkout session:", error);
        }
    }


    const memoizedAllProduct = useMemo(() => {
        if (product.length > 0 && apiData && apiData.products && apiData.products.length) {
            return product.map((prod) => {
                let items = apiData.products.find((item) => item.id == prod.id);
                return { ...items, quantity: prod.item };
            });
        }
        return [];
    }, [product, apiData]);

    useEffect(() => {
        setAllProduct(memoizedAllProduct);
    }, [memoizedAllProduct]);

    return (
        <>
            {
                createPortal(
                    <div className='main-wishlist-portal' ref={refDiv} >
                        <div className='cart-main' style={{ top: window.scrollY }}>
                            <div className='top-detail'>
                                <h2>My Cart</h2>
                                <i class="fa-solid fa-xmark cartCancel" onClick={() => setClickedCart(false)}></i>
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
                                        !loading ? product.length > 0 && product.map((prod) => {
                                            if (apiData && apiData.products && apiData.products.length) {
                                                let items = apiData.products.find((item) => item.id == prod.id)
                                                return (
                                                    <div className='cartProduct-child' key={items.id}>
                                                        <div className='prodImg'>
                                                            <img src={items.thumbnail} alt="" className='prodWidth' />
                                                        </div>

                                                        <div>
                                                            <p className='prodName'>{items.title}</p>
                                                            <p className='prodQuan'>500 ML</p>
                                                            <p className='prodPrice'>₹{(items.price * 81).toFixed(2)}</p>
                                                        </div>

                                                        <div className='cartPlusMinus'>
                                                            <i className="fa-sharp fa-solid fa-minus minusCart" onClick={() => removeItem(items.id, `btn${items.id}`)}></i>
                                                            <div className='itemCount'>{prod.item}</div>
                                                            <i className="fa-sharp fa-solid fa-plus plusCart" onClick={() => addMultipleItem(prod.id)}></i>
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
                                    {
                                        <p>₹{
                                            product.length > 0 && product.map((prod) => {
                                                const show = apiData && apiData.products && apiData.products.length && apiData.products.find((item) => item.id == prod.id)
                                                return show && (show.price * 81) * prod.item
                                            }).reduce((acc, curr) => {
                                                return acc + curr
                                            }, 0).toFixed(3)
                                        }</p>
                                    }
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
                                                const show = apiData && apiData.products && apiData.products.length && apiData.products.find((item) => item.id == prod.id)
                                                return show && (show.price * 81) * prod.item
                                            }).reduce((acc, curr) => {
                                                return acc + curr
                                            }, 0).toFixed(3)
                                        }</p>
                                        <p className='totalprice-text'>TOTAL</p>
                                    </div>
                                    <div className='loginto'>
                                        <button className='proceedLink' style={{ color: 'white' }} onClick={() => makePayment()}>{user ? 'Delivery' : 'Login'} To Proceed <i class="fa-solid fa-chevron-right"></i></button>
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
