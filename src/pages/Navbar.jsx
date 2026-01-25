import React from 'react'
import { useState } from 'react'
import { Dropdown } from '../components/Dropdown.jsx'

export const Navbar = () => {

    let listItems = ["About", "Connect", "Ministries", "Zoom Groups"]

    const [isOpen, setIsOpen] = useState({ "About": false, "Connect": false, "Ministries": false, "Zoom Groups": false })

    function updateState(item) {
        setIsOpen(Object.keys(isOpen).reduce((acc, key) => ({ ...acc, [key]: key === item }), {}));
    }


    return (
        <div className='w-full flex justify-between bg-blue-500 text-white sticky top-0'>
            <div className='p-6'>Logo</div>
            <div className='flex'>
                {
                    listItems.map((item) => (
                        <div className='flex items-center p-6 h-full text-white hover:cursor-pointer' onMouseOver={() => updateState(item)} onMouseOut={() => setIsOpen({ ...isOpen, [item]: false })} key={item}>
                            {item}
                            {isOpen[item] && <Dropdown isOpen={isOpen[item]} />}


                        </div>
                    ))
                }
            </div>
            {/* <div>Menu Items</div> */}
            <div className='p-6'>CTA Button</div>
        </div>
    )
}
