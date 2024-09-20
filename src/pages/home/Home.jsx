import React from 'react'
import Banner from '../../components/Banner'
import Catagories from './Catagories'
import SpecialDishes from './SpecialDishes'
import Testimonials from './Testimonials'
import OurServices from './OurServices'
import ParallaxLandingPage from './parallaxLandingPage'
import Learnmore_Become_Affiliate from './Learnmore_Become_Affiliate'
import Best_Sellers from './Best_Sellers'

const Home = () => {
  return (
    <div>
       <Banner/>
       <Catagories/>
       {/* <Best_Sellers/> */}
       {/* <SpecialDishes/> */}
       <Learnmore_Become_Affiliate/>
       {/* <Testimonials/> */}
       <OurServices/>
       {/* <ParallaxLandingPage/> */}
    
    </div>
  )
}

export default Home