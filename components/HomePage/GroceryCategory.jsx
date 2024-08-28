import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProductDataContext } from '../../context/context'
import useCategory from '../../customHooks/useCategory'
import CategoryRound from '../../simmer/categoryRound'

function GroceryCategory() {

    // const { loading, apiData } = useFetch(`https://dummyjson.com/products?limit=150`)
    const { setCategory, category } = useContext(ProductDataContext)

    // useEffect(() => {
    //     if (apiData && apiData.products && apiData.products.length) {
    //         setCategory([...new Set(apiData.products.map((item) => item.category))])
    //     }
    // }, [apiData])

    const { loading, allCategory } = useCategory(`https://dummyjson.com/products?limit=150`, 6)


    return (
        <>
            <Link className='viewallcate' to='/allcategory'>View All Category →</Link>
            <section className="food-main">
                <div className="container">
                    <div className="food-categories">
                        <div className="food">
                            {
                                !loading ? allCategory && allCategory.length && allCategory.map((cate, idx) => {
                                    if (idx < 6) {
                                        return (
                                            <Link to={`/category/${cate}`} className="circle" key={idx}>
                                                <img src={`./Img/category${idx}.jpg`} alt="" />
                                                <h3 className='category'>{cate}</h3>
                                            </Link>
                                        )
                                    }
                                }) : <CategoryRound />
                            }

                            {/* <Link to='/category/babyandpregnancy' className="circle">
                                <img src="./Img/babyShop.png" alt="" />
                                <h3>Baby & Pregnancy</h3>
                            </Link>

                            <Link to='/category/drinks' className="circle">
                                <img src="./Img/Drinks.png" alt="" />
                                <h3>Beverages</h3>
                            </Link>

                            <Link to='/category/biscits' className="circle">
                                <img src="./Img/Biscut Snacks.png" alt="" />
                                <h3>Biscuits & Snacks</h3>
                            </Link>

                            <Link to='/category/breadsandbakery' className="circle">
                                <img src="./Img/Bread Bakery.png" alt="" />
                                <h3>Breads & Bakery</h3>
                            </Link>

                            <Link to='/category/breacksfastanddairy' className="circle">
                                <img src="./Img/Bread Bakery.png" alt="" />
                                <h3>Breaksfast & Dairy</h3>
                            </Link>

                            <Link to='/category/frozenfoods' className="circle">
                                <img src="./Img/Amul.png" alt="" />
                                <h3>Frozen Foods</h3>
                            </Link>

                            <Link to='/category/groceryandstaples' className="circle">
                                <img src="./Img/Frozen Food.png" alt="" />
                                <h3>Grocery & Staples</h3>
                            </Link> */}

                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default GroceryCategory