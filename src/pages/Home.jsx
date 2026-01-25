import React from 'react'
import { Navbar } from './Navbar.jsx'

export const Home = () => {

    return (
        <>
            <div className='w-full h-full'>
                <Navbar />
                <div className='flex justify-center text-white w-full h-225 bg-[url("../../public/church_background.jpg")] bg-cover bg-top-left bg-fixed'>
                    Content
                </div>


            </div>
        </>
    )
}
