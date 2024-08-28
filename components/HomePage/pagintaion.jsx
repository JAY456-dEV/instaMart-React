import React, { useEffect, useState } from 'react'

function Pagintaion({ length, perPage, selectPage }) {
    console.log(length)
    const [totalPagination, setTotalPagination] = useState([]);

    useEffect(() => {
        const pages = [];
        for (let index = 1; index <= Math.ceil(length / perPage); index++) {
            pages.push(index);
        }
        setTotalPagination(pages);
    }, [length, perPage]);

    return (
        <div className='pagination-count'>
            {
                totalPagination && totalPagination.map((pages, idx) => {
                    return (
                        <div className='pages-per' onClick={() => selectPage(pages)} key={idx}>
                            <p>{pages}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Pagintaion