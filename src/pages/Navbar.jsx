import React, { useEffect } from 'react'
import { useState } from 'react'

export const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false)
    const listItems = ["About", "Connect", "Ministries", "Zoom Groups"]
    const dropdownItems = {
        "About": ["About 1", "About 2", "About 3"],
        "Connect": ["Item 1", "Item 2", "Item 3"],
        "Ministries": ["Item 1", "Item 2", "Item 3"],
        "Zoom Groups": ["Item 1", "Item 2", "Item 3"]
    }

    const [isOpen, setIsOpen] = useState({ "About": false, "Connect": false, "Ministries": false, "Zoom Groups": false })

    function updateState(item) {
        setIsOpen(Object.keys(isOpen).reduce((acc, key) => ({ ...acc, [key]: key === item }), {}));
    }


    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={`w-full flex justify-between bg-primary text-white sticky top-0 z-5 px-8 transition-shadow duration-300 ${isSticky ? 'shadow-[0_4px_20px_rgba(0,0,0,0.75)]' : ''}`}>
            <div className='flex items-center py-5 text-lg font-bold tracking-wide'>Logo</div>
            <div className='flex items-stretch gap-1'>
                {listItems.map((item) => (
                    <div
                        className='relative flex items-center px-4 text-md font-medium text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer'
                        onMouseOver={() => updateState(item)}
                        onMouseLeave={() => setIsOpen({ ...isOpen, [item]: false })}
                        key={item}
                    >
                        {item}
                        {isOpen[item] && (
                            <div className='absolute left-0 top-full w-64 bg-white text-gray-700 rounded shadow-lg overflow-hidden animate-fadeIn'>
                                {dropdownItems[item].map((dropItem) => (
                                    <div className='px-4 py-4 text-sm hover:bg-gray-50 hover:text-primary cursor-pointer transition-colors' key={dropItem}>
                                        {dropItem}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <button className='my-auto text-sm font-semibold bg-white text-primary px-5 py-2 rounded-full hover:bg-white/90 transition-colors'>
                Join Us
            </button>
        </div>
    )
}
