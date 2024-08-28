import React from 'react'

function InStocksimmer() {
    return new Array(6).fill(null).map((_, idx) => {
        return (
            <div className={`instocksimmer`}>
                <p></p>
                <div className="star-2"></div>
                <h4 className="price"> <span></span></h4>
            </div>
        )
    })


}

export default InStocksimmer