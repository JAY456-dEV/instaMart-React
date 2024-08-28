import React, { useContext } from 'react'
import { ProductDataContext } from '../../context/context'

function PaymentItemCard({ props, quntity }) {
    const { title, thumbnail, price, description, id } = props
    const { removeItem, addMultipleItem } = useContext(ProductDataContext)

    return (
        <>
            <div className='main-perCard-payment'>
                <div className='img-paymeny-order'>
                    <img src={thumbnail} alt="" />
                </div>

                <div className='desc-payment'>
                    <p className='desc-payment-title'>{title}</p>
                    <p className='desc-payment-desc'>{description.slice(0, 70)}</p>
                </div>

                <div>
                    <div className='cartPlusMinus payment-order-btn'>
                        <i className="fa-sharp fa-solid fa-minus minusCart" onClick={() => removeItem(id, `btn${id}`)}></i>
                        <div className='itemCount'>{quntity}</div>
                        <i className="fa-sharp fa-solid fa-plus plusCart" onClick={() => addMultipleItem(id)}></i>
                    </div>
                </div>

                <div>
                    <p>₹{(price * 81).toFixed(2)}</p>
                </div>
            </div>
        </>
    )
}

export default PaymentItemCard