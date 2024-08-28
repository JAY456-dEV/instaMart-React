import React, { useContext, useEffect, useState } from 'react'
import useCategory from '../customHooks/useCategory'
import { ProductDataContext } from '../context/context'
import CategoryCard from '../components/HomePage/CategoryCard'
import CategorySimmer from '../simmer/categorySimmer'
import Pagintaion from '../components/HomePage/pagintaion'

function CategoryMainPage() {

    const { sidebarCategory, setSidebarCategory, categoryQuery, setCategoryQuery, setCheckTypeForCategory, checkTypeForCategory, setInputPriceRange, inputPriceRange, checkPriceSort, setCheckPriceSort, dataCategoryMainPage, setdataCategoryMainPage, chooseByRating, setChooseByRating, selectPaginationPage, setSelectedPaginationPage } = useContext(ProductDataContext)
    const { loading, allCategory } = useCategory(`https://dummyjson.com/products?limit=150`)

    const [loadingforData, setLoading] = useState(false);
    const [apiData, setapiData] = useState([])

    async function fetchData() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=150`);
            const data = await response.json();
            if (data && data.products && data.products.length) {
                setdataCategoryMainPage(data.products);
                setapiData(data.products)
            }
            setLoading(false);
        } catch (error) {
            console.log('Error fetching data:', error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    function handleCategorySelect(cate) {
        setCheckTypeForCategory(false)
        setCategoryQuery(cate)
    }

    function handlePriceInput(e) {
        setInputPriceRange(e.target.value)
    }

    useEffect(() => {
        let show = apiData.filter((item) => item.price * 81 < inputPriceRange)
        setdataCategoryMainPage(show)

        // if (show.length == 0) {
        //     fetchData()
        // }
    }, [inputPriceRange])

    function handleCheckSortbyCheckbox(e) {
        setCheckPriceSort((prev) => ({ ...prev, [e.target.name]: e.target.checked }))
    }

    useEffect(() => {
        if (checkPriceSort.highlow) {
            console.log(checkPriceSort);
            let show = [...apiData].sort((a, b) => b.price - a.pirce);
            let copyDataCategory = [...dataCategoryMainPage]
            copyDataCategory = [...show]
            setdataCategoryMainPage(copyDataCategory);
            setTemp(copyDataCategory)
        } else if (checkPriceSort.lowhigh) {
            let show = [...apiData].sort((a, b) => a.price - b.price);
            let copyDataCategory = [...dataCategoryMainPage]
            copyDataCategory = [...show]
            setdataCategoryMainPage(copyDataCategory);
            setTemp(copyDataCategory)
        } else {
            setdataCategoryMainPage(apiData)
            setSelectedPaginationPage(1)
        }
    }, [checkPriceSort]);

    function handleChooseRating(e) {
        setChooseByRating(prev => ({ ...prev, [e.target.name]: e.target.checked }))
    }

    const [temp, setTemp] = useState([])

    useEffect(() => {
        if (chooseByRating.fourstar == true) {
            let show = apiData.filter((item) => item.rating > 4 && item.rating < 5)
            setdataCategoryMainPage(show)
        } else if (chooseByRating.threestar == true) {
            let show = apiData.filter((item) => item.rating > 3 && item.rating < 4)
            setdataCategoryMainPage(show)
        } else if (chooseByRating.twostar == true) {
            let show = apiData.filter((item) => item.rating > 2 && item.rating < 3)
            setdataCategoryMainPage(show)
        } else if (chooseByRating.onestar == true) {
            let show = apiData.filter((item) => item.rating > 1 && item.rating < 2)
            setdataCategoryMainPage(show)
        } else {
            setdataCategoryMainPage(apiData)
        }
        console.log(chooseByRating)
    }, [chooseByRating])

    function selectPage(pageNum) {
        setSelectedPaginationPage(pageNum)
    }

    let perPage = 20

    useEffect(() => {
        let lastPageLength = selectPaginationPage * perPage
        let firsPageLength = lastPageLength - perPage

        if (checkPriceSort.highlow) {
            let copyApiData = temp && [...temp]
            copyApiData = copyApiData.slice(firsPageLength, lastPageLength)
            setdataCategoryMainPage(copyApiData)
            console.log(copyApiData)
        } else if (checkPriceSort.lowhigh) {
            let copyApiData = temp && [...temp]
            copyApiData = copyApiData.slice(firsPageLength, lastPageLength)
            setdataCategoryMainPage(copyApiData)
        } else {
            let copyApiData = [...apiData]
            copyApiData = copyApiData.slice(firsPageLength, lastPageLength)
            setdataCategoryMainPage(copyApiData)
        }
    }, [selectPaginationPage, apiData, checkPriceSort, temp])


    return (
        <>
            <div className='main-catogory-and-allproduct'>
                <div className='category-sidebar'>
                    <div className='allcategory-main'>
                        <div className='categoryall-show-toggle' onClick={() => setSidebarCategory(prev => !prev)}>
                            <p className='category-from-all' >All Categories</p>
                            <i class="fa fa-chevron-right category-all-chevron" style={{ transform: sidebarCategory ? `rotate(90deg)` : null }}></i>
                        </div>

                        {sidebarCategory && <div className='category-from-all' onClick={() => setCategoryQuery('')}>
                            <p>All Products</p>
                        </div>}
                        {
                            sidebarCategory && allCategory && allCategory.length && allCategory.map((cate) => {
                                return (
                                    <div className='category-from-all' onClick={() => handleCategorySelect(cate)}>
                                        <p>{cate}</p>
                                    </div>
                                )
                            })
                        }
                        <div className='priceRange-selection'>
                            <p>PRICE</p>
                            <div className='select-price-range'>Select Range</div>
                            <div className='pricerange'>
                                <input type="range" min={0} max={250000} value={inputPriceRange} onChange={handlePriceInput} />
                                <p>Under : {inputPriceRange}</p>
                            </div>

                            <div className='priceRange-selection-sort'>
                                <p>Sort By Price :</p>
                                <div className='highlow-sort'>
                                    <input type="checkbox" id='highlow' name='highlow' value={checkPriceSort.highlow} onChange={handleCheckSortbyCheckbox} />
                                    <label htmlFor="highlow">Higher-Lower</label>
                                </div>

                                <div className='highlow-sort'>
                                    <input type="checkbox" id='lowhigh' name='lowhigh' value={checkPriceSort.lowhigh} onChange={handleCheckSortbyCheckbox} />
                                    <label htmlFor="lowhigh" id='lowhigh'>Lower-Higher</label>
                                </div>
                            </div>

                            <div className='select-product-by'>
                                <p className='productbyrate'>Select Product By Rating : </p>
                                <div className='star-rate-select'>
                                    <input type="checkbox" id='fourstar' name='fourstar' onChange={handleChooseRating} />
                                    <label htmlFor="fourstar"> 4★ & Above</label>
                                </div>

                                <div className='star-rate-select'>
                                    <input type="checkbox" id='threestar' name='threestar' onChange={handleChooseRating} />
                                    <label htmlFor="threestar"> 3★ & Above</label>
                                </div>

                                <div className='star-rate-select'>
                                    <input type="checkbox" id='twostar' name='twostar' onChange={handleChooseRating} />
                                    <label htmlFor="twostar"> 2★ & Above</label>
                                </div>

                                <div className='star-rate-select'>
                                    <input type="checkbox" id='onestar' name='onestar' onChange={handleChooseRating} />
                                    <label htmlFor="onestar"> 1★ & Above</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='main-allProduct-from-category'>
                    <div className='main-allproduct-flex'>
                        {categoryQuery.length == 0 ?
                            !loading ? dataCategoryMainPage && dataCategoryMainPage.length && dataCategoryMainPage.filter((item) => (checkTypeForCategory ? item.title.toLowerCase() : item.category).includes(categoryQuery.toLowerCase())).map((item) => {
                                return (
                                    <CategoryCard item={item} key={item.id} />
                                )
                            }) : <CategorySimmer length={9} />
                            :
                            !loading ? apiData && apiData.length && apiData.filter((item) => (checkTypeForCategory ? item.title.toLowerCase() : item.category).includes(categoryQuery.toLowerCase())).map((item) => {
                                return (
                                    <CategoryCard item={item} key={item.id} />
                                )
                            }) : <CategorySimmer length={9} />
                        }
                    </div>
                    <div >
                        <Pagintaion length={checkPriceSort.highlow || checkPriceSort.lowhigh ? temp && temp.length : apiData && apiData.length} perPage={perPage} selectPage={selectPage} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryMainPage