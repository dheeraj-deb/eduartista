import React from 'react'
// import Banner from '../../components/Banner'
import Catagories from './Catagories'
import SpecialDishes from './SpecialDishes'
import Testimonials from './Testimonials'
import OurServices from './OurServices'
import ParallaxLandingPage from './parallaxLandingPage'
import Learnmore_Become_Affiliate from './Learnmore_Become_Affiliate'
import Best_Sellers from './Best_Sellers'
import Banner from '../../components/banner/Banner'
import CardSection from '../../components/cardSection/CardSection'
import SideScrollSection from '../../components/sideScrollSection/SideScrollSection'
import SubscriptionOptions from '../../components/subscriptionOptions/SubscriptionOptions'
import SocialAppSection from '../../components/socialAppSection/SocialAppSection'

const Home = () => {
  return (
    <div>
       <Banner/>
       <CardSection/>
       <SideScrollSection/>
       <SubscriptionOptions/>
       <SocialAppSection/>
       {/* <Catagories/> */}
       {/* <Best_Sellers/> */}
       {/* <SpecialDishes/> */}
       {/* <Learnmore_Become_Affiliate/> */}
       {/* <Testimonials/> */}
       {/* <OurServices/> */}
       {/* <ParallaxLandingPage/> */}
    
    </div>
  )
}

export default Home