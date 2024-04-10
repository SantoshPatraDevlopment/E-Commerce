import React, { useEffect, useState } from 'react'
import Topber from '../Component/Topber'
import Navber from '../Component/Navber'
import Carousel from '../Component/Carousel'
import FeaturedProduct from '../Component/FeaturedProduct'
// import { GetAllCategoryCallAPI } from '../Utility/GetAllCategoryCallAPI'
import Footer from '../Component/Footer'



export function Home() {
  // var [arrCategories, setArrCategories] = useState([])
  // var [selectedcategory, setSelectedcategory] = useState('Select Categories')
  // api ko ek bar call kar n kliye useeffect babar kori (na hole infinite loop start ho jaye ga)
  
  // useEffect(() => {
  //     var p = GetAllCategoryCallAPI();
  //     p.then((data) => {
  //         setArrCategories(data);
  //     })
  // }, [])
  return ( 
    <>
      <Topber />
      <Navber />
      <Carousel/>
      <FeaturedProduct />
      {/* <FeaturedSingleProduct/> */}
     <Footer/>
    </>

  )
}

export default Home
