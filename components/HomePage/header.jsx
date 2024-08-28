import React, { useContext, useEffect, useState } from 'react'
import { ProductDataContext } from '../../context/context'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import WishlishtCart from './wishlishtCart'
import ShopCart from './ShopCart'
import useFetch from '../../customHooks/useFetch'


function Header() {

    const { product, wishlist, user, checkTypeForCategory, setCheckTypeForCategory, setCategoryQuery, setQueryForHomePageSearch, queryForHomePageSearch, filterDataTitle, setFilteredDataTitle, categoryQuery, searchTitleDataShow, setSearchTitleDataShow } = useContext(ProductDataContext)
    const [clickedCart, setClickedCart] = useState(false)
    const [clickedWishlist, setClickedWishlist] = useState(false)
    const navigate = useNavigate()

    clickedCart || clickedWishlist ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

    function handleProfile(e) {
        e.preventDefault()
        navigate('/userprofile')
    }

    const parmas = useLocation()
    // console.log(parmas)
    useEffect(() => {
        if (parmas.pathname == '/allcategory') {
            setCheckTypeForCategory(true)
        } else {
            setCheckTypeForCategory(false)
        }
    }, [parmas])

    function handleSearchHomePage(e) {
        e.preventDefault()
        setCheckTypeForCategory(false)
        handleNameSearchFetch()
    }


    const [dd, setDD] = useState(47)
    const [hh, setHH] = useState(6)
    const [mm, setMM] = useState(32)
    const [ss, setSS] = useState(54)

    useEffect(() => {
        let intervalId = setInterval(() => {
            if (ss !== 0) {
                setSS(prev => prev - 1)
            } else if (ss == 0 && mm !== 0) {
                setSS(59)
                setMM(prev => prev - 1)
            } else if (mm == 0 && hh !== 0) {
                setMM(59)
                setHH(prev => prev - 1)
            } else if (hh == 0 && dd !== 0) {
                setDD(prev => prev - 1)
                setHH(24)
            } else {
                setDD(47)
            }
        }, 1000)

        return (() => {
            clearInterval(intervalId)
        })
    }, [dd, hh, mm, ss])

    const [timerId, setTimerId] = useState()
    const { loading, apiData } = useFetch('https://dummyjson.com/products?limit=150')

    useEffect(() => {
        let intervalId
        intervalId = setTimeout(() => {
            if (apiData && apiData.products && apiData.products.length) {
                let show = apiData.products.filter((itemName) => itemName.title.toLowerCase().includes(queryForHomePageSearch.toLowerCase()))
                setFilteredDataTitle(show)
                setSearchTitleDataShow(true)
            }
        }, 500)
        setTimerId(intervalId)

        return () => {
            clearInterval(timerId);
            clearInterval(intervalId)
        };
    }, [queryForHomePageSearch])

    function handleClickedSearch(title, id) {
        setQueryForHomePageSearch(title)
        setSearchTitleDataShow(false)
        navigate(`/searchPage/${id}`)
    }

    return (
        <>
            {
                user && <nav>
                    <div className="offer-section">
                        <div className="offer-detail">
                            <p>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</p>
                        </div>

                        <div className="offer-time">
                            <p>Until the end of the sale:</p>
                            <h5>{dd} <span>days</span></h5>
                            <h5>{hh} <span>hours</span></h5>
                            <h5>{mm} <span>minute</span></h5>
                            <h5>{ss} <span>second</span></h5>
                        </div>
                    </div>

                    <div className="header-main">
                        <div className="store-detail">
                            <div className="acc-detail">
                                <a href="">
                                    <p className="three-p">About Us</p>
                                </a>
                                <a href="">
                                    <Link to={user ? './userprofile' : '/signup'} className="three-p">My Account</Link>
                                </a>
                                <a href="">
                                    <p className="three-p">Wishlist</p>
                                </a>
                                <p className="last-p">We deliver to you every day from <span>7:00 to 23:00</span></p>
                            </div>
                            <div className="acc-right">
                                <select name="language" id="language" className="lang-op">
                                    <option value="">English</option>
                                    <option value="">Hindi</option>
                                    <option value="">Gujrati</option>
                                </select>
                                <select name="currency" id="" className="curr-op">
                                    <option value="">USD</option>
                                    <option value="">RUPEE</option>
                                    <option value="">EURO</option>
                                </select>
                                <p>Order Tracking</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </nav>
            }
            <header>
                <div className="header">
                    <div className="header-content">
                        <div className="logo">
                            <img src="https://i.ibb.co/87Wjzzm/logo3.png" alt="" />
                            <div className="categories">
                                <i className="fa-solid fa-bars"></i>
                                <p>Categories</p>
                            </div>
                            <form>
                                <input className="search" type="search" placeholder="Search for products, categories or brands..." value={checkTypeForCategory ? categoryQuery : queryForHomePageSearch} onChange={(e) => checkTypeForCategory ? setCategoryQuery(e.target.value) : setQueryForHomePageSearch(e.target.value)} />
                            </form>
                            {searchTitleDataShow && <div className='showFilteredSearch'>
                                {filterDataTitle.map((title) => {
                                    return (
                                        <div className='searchTitle' onClick={() => handleClickedSearch(title.title, title.id)}>
                                            <p>{title.title}</p>
                                        </div>
                                    )
                                })
                                }
                            </div>
                            }
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>

                        <div className="cart-login">
                            <div className='userProfile-main' onClick={user && handleProfile}>
                                <img src={user?.photoURL || './img/noProfile.jpg'} alt="" className='userProfile' />
                                <Link to={!user && '/signup'} >{user ? user?.displayName : 'SignUp'}</Link>
                            </div>
                            {
                                user && <>
                                    <i className="fa-solid fa zero">{
                                        wishlist.map((prod) => {
                                            return prod.item
                                        }).reduce((acc, curr) => {
                                            return acc + curr
                                        }, 0)
                                    }</i>
                                    <i className="fa-solid fa-heart"></i>

                                    <div onClick={() => setClickedWishlist(true)} style={{ cursor: 'pointer' }}>
                                        <p>Wishlist</p>
                                    </div>

                                    <i className="fa-solid fa zero-2">{
                                        product.map((prod) => {
                                            return prod.item
                                        }).reduce((acc, curr) => {
                                            return acc + curr
                                        }, 0)
                                    }
                                    </i>
                                    <i className="fa-solid fa-cart-shopping"></i>

                                    <div onClick={() => setClickedCart(true)} style={{ cursor: 'pointer' }}>
                                        <p>Your Cart</p>
                                    </div>
                                </>
                            }

                        </div>
                    </div>
                </div>
                <hr />
                {user && <div className="head-menu">
                    <div className="menu-start">
                        <NavLink className={({ isActive }) => isActive ? 'activeNav' : ''}>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'activeNav' : ''} to='/allcategory'>Shop</NavLink>
                        <a href="">Fruits & Vegetables</a>
                        <a href="">Beverages</a>
                        <a href="">Blog</a>
                        <a href="">Contact</a>
                    </div>

                    <div className="trend-pro">
                        <a href="">Trending Products</a>
                        <a href="" className="almost">Almost Finished</a>
                    </div>
                </div>}
            </header >


            {clickedWishlist ? <WishlishtCart setClickedWishlist={setClickedWishlist} /> : null
            }
            {clickedCart ? <ShopCart setClickedCart={setClickedCart} /> : null}
        </>

    )
}

export default Header
