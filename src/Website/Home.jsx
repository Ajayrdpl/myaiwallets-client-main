import React from 'react'
import TopNav from '../components/Landing/TopNav'
import Navbar from '../components/Landing/Navbar'
import HeroSection from './HeroSection'
import JoinSection from './JoinSection'
import CrudoInvestment from './CrudoInvestment'
import YoutubeSlider from './YoutubeSlider'
import FeaturedOn from './FeaturedOn'
import SeamlessEntrySection from './SeamlessEntrySection'
import CrudoTokenSection from './CrudoTokenSection'
import BlockchainEfficiencySection from './BlockchainEfficiencySection'
import ImageSlider from './ImageSlider'
import ReferToEarnSection from './ReferToEarnSection'
import Leaderboard from '../components/Landing/Leaderboard'
import Phenomena from '../components/Landing/phenomena'
import Ecosystem from '../components/Landing/Ecosystem'
import Tokenomics from '../components/Landing/Tokenomics'
import RoadMap from '../components/Landing/RoadMap'
import Signup from '../components/Landing/Signup'
import Faq from '../components/Landing/Faq'
import Footer from '../components/Landing/Footer'
import Button from '../components/Landing/Button'
import bgImg from "../assets/landing/bg.jpg";


const Home = () => {
  return (
    <>
      <div className='text-white white_color text-sm' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', height: 'screen' }}>
        <TopNav />
        <Navbar />
        <HeroSection />
        <JoinSection />
        <CrudoInvestment />
        {/* <YoutubeSlider /> */}
        <FeaturedOn />
        <SeamlessEntrySection />
        <CrudoTokenSection />
        <BlockchainEfficiencySection />
        {/* <ImageSlider /> */}
        <ReferToEarnSection />
        <Leaderboard />
        <Phenomena />
        <Ecosystem />
        <Tokenomics />
        <RoadMap />
        <Signup />
        <Faq />
        <Footer />
      </div>
      {/* <div className='fixed top-1/2 right-[-6.7%] text-white'>
        <div className=' rotate-90 space-x-2'>
          <Button title="Refer To Earn" className={'border rounded-b-lg p-4 hover:bg-bg_color1 '} />
          <Button title="How to Buy" className={'bg-bg_color1 p-4 rounded-b-lg'} />
        </div>
      </div> */}
    </>

  )
}

export default Home