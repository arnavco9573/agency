import { Carousel } from 'flowbite-react'
import React from 'react'
import asset1 from "../assets/asset1.png"

const Home = () => {
    return (
        <div className='bg-neutralSilver' id='home'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>

                <Carousel className='w-full max-w-[1480px] m-auto'>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
                        <div>
                            <img src={asset1} alt="" className='xl:w-[22rem] sm:w-[10rem] md:w-[15rem]' />
                        </div>
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='lg:text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lessons and insights <span className='text-brandPrimary leading-snug'>from 8 years</span></h1>
                            <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary md:mx-auto'>Register</button>

                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
                        <div>
                            <img src={asset1} alt="" className='xl:w-[22rem] sm:w-[10rem] md:w-[15rem]' />
                        </div>
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='lg:text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lets's Learn and Earn <span className='text-brandPrimary leading-snug'>in 4 Months</span></h1>
                            <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary md:mx-auto'>Register</button>

                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
                        <div>
                            <img src={asset1} alt="" className='xl:w-[22rem] sm:w-[10rem] md:w-[15rem]' />
                        </div>
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='lg:text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lessons and insights <span className='text-brandPrimary leading-snug'>from 8 years</span></h1>
                            <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary md:mx-auto'>Register</button>

                        </div>
                    </div>
                </Carousel>


            </div>
        </div>
    )
}

export default Home