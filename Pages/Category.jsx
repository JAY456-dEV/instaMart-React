import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryCard from '../components/HomePage/CategoryCard'
import useFetch from '../customHooks/useFetch'
import CategorySimmer from '../simmer/categorySimmer'

function Category() {
  const params = useParams()

  const [category, setCategory] = useState([])

  const { loading, apiData } = useFetch(`https://dummyjson.com/products?limit=150`)
  // console.log(params)

  useEffect(() => {
    if (apiData && apiData.products && apiData.products.length) {
      let item = apiData.products.filter((products) => {
        return products.category == params.type
      })
      setCategory(item)
    }
  }, [params, apiData])


  return (
    <>
    <section className='main-section' >
      {
        !loading ? category && category.length && category.map((item) => {
          return (
            <CategoryCard item={item} />
          )
        }) : <CategorySimmer />
      }
    </section>
    </>
  )
}

export default Category