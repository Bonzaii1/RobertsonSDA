import React from 'react'
import { Navbar } from './Navbar.jsx'

export const Home = () => {

    return (
        <>
            <div className='w-full h-full'>
                <Navbar />
                <div className='flex justify-end text-white w-full bg-[url("../../public/church_background.jpg")] bg-cover bg-top-left bg-fixed relative'>
                    <div className='absolute inset-0 bg-linear-to-r from-transparent from-40% to-gray-900' />
                    <div className='relative z-10 mx-24 my-12 p-12 text-right'>
                        <h1 className='font-bold text-4xl'>Robertson SDA</h1>
                        <br />
                        <h3 className='font-bold text-2xl'>Saturday Service Times</h3>
                        <h3 className='text-xl'>Sabbath School: <span className='font-bold'>9:15 AM</span></h3>
                        <h3 className='text-xl'>Divine Service: <span className='font-bold'>11:00 AM</span></h3>
                        <br /><br />

                        <button className=' text-xs font-semibold bg-primary p-2 px-8'>Our Services</button>
                        <br />
                        <br />
                        <div className='text-sm space-y-1'>
                            Our location <br /> 123 Main st <br /> <span className='font-bold'>Contact us: +1 (333) 333-333</span>
                        </div>
                    </div>


                </div>


            </div>
        </>
    )
}
