import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from '../config/firebase-config'
import { googleProvider } from "../config/firebase-config";

export const ProductDataContext = createContext()

export function ContextFunction({ children }) {
    const [newProdSec, setNewProdSec] = useState([])
    const [bestSeller, setBestSeller] = useState([])
    const [product, setProduct] = useState([])
    const [user, setUser] = useState()
    const [wishlist, setWishlist] = useState([])
    const [category, setCategory] = useState()
    const [sidebarCategory, setSidebarCategory] = useState(false)
    const [categoryQuery, setCategoryQuery] = useState('')
    const [checkTypeForCategory, setCheckTypeForCategory] = useState(false)
    const [queryForHomePageSearch, setQueryForHomePageSearch] = useState('')
    const [instockProduct, setInStockProduct] = useState([])
    const [inputPriceRange, setInputPriceRange] = useState(0)
    const [checkPriceSort, setCheckPriceSort] = useState({
        highlow: false,
        lowhigh: false
    })
    const [dataCategoryMainPage, setdataCategoryMainPage] = useState([]);
    const [chooseByRating, setChooseByRating] = useState({
        fourstar: false,
        threestar: false,
        twostar: false,
        onestar: false,
    })
    const [selectPaginationPage, setSelectedPaginationPage] = useState(1)
    const [categorySelectedSaparate, setCategorySelectedSaparate] = useState('')

    const [checkBtn, setCheckBtn] = useState({
        // btn1: false,
        // btn2: false,
    })
    const [productMainData, setProductMainData] = useState([])
    const [gst, setGst] = useState(0)

    const [heart, setHeart] = useState({
        heart1: false,
        heart10: false
    })
    const [filterDataTitle, setFilteredDataTitle] = useState([])
    const [searchTitleDataShow, setSearchTitleDataShow] = useState(false)
    const [perIdDetailSearch, setPerIdDetailSearch] = useState([])


    function changeHeart(id, heartName) {
        setHeart({ ...heart, [heartName]: !heart[heartName] })
        setWishlist([...wishlist, { id, item: 1 }])
    }

    // console.log(wishlist)

    function convertIntoNormal(id, heartName) {
        setHeart({ ...heart, [heartName]: !heart[heartName] })
        setWishlist(wishlist.filter((prod) => prod.id !== id))
    }

    // console.log(heart)

    function addToCart(id, btnName) {
        // console.log(id)
        setProduct((prev) => [...prev, { id, item: 1 }])
        setCheckBtn({ ...checkBtn, [btnName]: true })

    }
    // console.log(product)
    function addMultipleItem(id) {
        let item = product.find((prod) => prod.id === id)
        item.item += 1
        setProduct([...product])
    }

    function removeItem(id, btnName) {
        let item = product.find((prod) => prod.id === id)
        if (item.item) {
            item.item -= 1
            setProduct([...product])
        }

        if (item.item === 0) {
            setProduct(product.filter((item) => item.item !== 0))
            setCheckBtn({ ...checkBtn, [btnName]: false })
        }
    }

    function deleteItem(id, heartName) {
        let copyArr = [...wishlist]
        copyArr = copyArr.filter((item) => item.id !== id)
        setHeart({ ...heart, [heartName]: !heart[heartName] })
        setWishlist(copyArr)
    }

    function createEmailPassSignup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function creataGoogleSignIn() {
        return signInWithPopup(auth, googleProvider)
    }

    function userLogin(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function userLogout() {
        return signOut(auth)
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);

    return (
        <ProductDataContext.Provider value={{ addToCart, addMultipleItem, removeItem, checkBtn, product, changeHeart, heart, convertIntoNormal, wishlist, createEmailPassSignup, creataGoogleSignIn, userLogin, user, userLogout, setNewProdSec, newProdSec, setBestSeller, bestSeller, deleteItem, setCategory, category, setSidebarCategory, sidebarCategory, setCategoryQuery, categoryQuery, setCheckTypeForCategory, checkTypeForCategory, setQueryForHomePageSearch, setInStockProduct, instockProduct, setInputPriceRange, inputPriceRange, checkPriceSort, setCheckPriceSort, dataCategoryMainPage, setdataCategoryMainPage, chooseByRating, setChooseByRating, selectPaginationPage, setSelectedPaginationPage, queryForHomePageSearch, productMainData, setProductMainData, gst, setGst, filterDataTitle, setFilteredDataTitle, searchTitleDataShow, setSearchTitleDataShow, perIdDetailSearch, setPerIdDetailSearch }}>
            {children}
        </ProductDataContext.Provider>
    )
}