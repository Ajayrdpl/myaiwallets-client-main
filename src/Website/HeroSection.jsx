import React from 'react'
import check from "../assets/landing/check.png"
import Button from '../components/Landing/Button'
import { AuthRoutes } from '../constants/Routes'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center text-center py-10 md:py-20 gap-14'>
        <div className='flex flex-col gap-4'>
          <h1 className='md:text-7xl text-lg uppercase text-white'>REVOLUTIONIZING  </h1>
          <h1 className='md:text-7xl text-lg uppercase text-white'>REWARDS & FOREX</h1>
          <h1 className='text-bg_color text-xl md:text-7xl tracking-widest font-bold'>MY AI WALLET</h1>
        </div>


        <div className='flex flex-row gap-4'>
          <Button title="CONTACT US" className={"rounded-lg border px-6 py-3 w-40 md:text-sm text-xs"} />
          <Link to={AuthRoutes.LOGIN}>
            <Button title="Login" className='rounded-lg px-6 py-3 bg-bg_color text-white' />
          </Link>
        </div>
        <div className='px-5 md:px-0'>
          <img src={check} alt="" className='md:h-36' />
        </div>
      </div>

    </>

  )
}

export default HeroSection