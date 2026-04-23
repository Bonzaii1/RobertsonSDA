import React, { useEffect } from 'react'
import { useState } from 'react'

export const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
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

    function toggleMobileItem(item) {
        setIsOpen(prev => ({ ...prev, [item]: !prev[item] }));
    }


    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={`w-full flex justify-between bg-white text-black sticky top-0 z-5 px-8 py-2 transition-shadow duration-300 ${isSticky ? 'shadow-[0_4px_20px_rgba(0,0,0,0.75)]' : ''}`}>
            <div className='flex items-center py-5 text-lg font-bold tracking-wide'>Logo</div>

            {/* Desktop nav */}
            <div className='hidden md:flex items-stretch gap-5'>
                {listItems.map((item) => (
                    <div
                        className='relative flex items-center px-4 text-xl font-medium text-black/80 hover:text-primary hover:bg-white/10 rounded transition-colors cursor-pointer'
                        onMouseOver={() => updateState(item)}
                        onMouseLeave={() => setIsOpen({ ...isOpen, [item]: false })}
                        key={item}
                    >
                        {item}
                        {isOpen[item] && (
                            <div className='absolute left-0 top-full w-64 my-2 bg-white text-gray-700 rounded shadow-lg overflow-hidden animate-fadeIn'>
                                {dropdownItems[item].map((dropItem) => (
                                    <div className='px-4 py-4 text-sm hover:bg-gray-50 hover:text-primary cursor-pointer transition-colors border-b border-gray-300 last:border-b-0' key={dropItem}>
                                        {dropItem}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Desktop CTA */}
            <button className='hidden md:block my-auto text-sm font-semibold bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-colors'>
                Join Us
            </button>

            {/* Hamburger button */}
            <button
                className='md:hidden my-auto flex flex-col gap-1.5 p-2'
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label='Toggle menu'
            >
                <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* Mobile menu */}
            <div className={`md:hidden absolute top-full left-0 w-full z-10 grid transition-all duration-300 ease-in-out ${isMobileOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className='overflow-hidden'>
                    <div className='bg-white shadow-lg border-t border-gray-100 flex flex-col'>
                        {listItems.map((item) => (
                            <div key={item}>
                                <div
                                    className='flex justify-between items-center px-6 py-4 border-b border-gray-100 font-medium text-black/80 hover:text-primary hover:bg-gray-50 cursor-pointer transition-colors'
                                    onClick={() => toggleMobileItem(item)}
                                >
                                    {item}
                                    <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen[item] ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                                    </svg>
                                </div>
                                <div className={`grid transition-all duration-300 ease-in-out ${isOpen[item] ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                    <div className='overflow-hidden'>
                                        <div className='bg-gray-50 border-b border-gray-100'>
                                            {dropdownItems[item].map((dropItem) => (
                                                <div key={dropItem} className='px-10 py-3 text-sm text-gray-600 hover:text-primary cursor-pointer border-b border-gray-200 last:border-b-0 transition-colors'>
                                                    {dropItem}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='px-6 py-4'>
                            <button className='w-full text-sm font-semibold bg-primary text-white py-2.5 rounded-full hover:bg-primary/90 transition-colors'>
                                Join Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
