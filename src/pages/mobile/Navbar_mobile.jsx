import React from 'react'

export const Navbar_mobile = ({ isSticky, listItems, dropdownItems, isOpen, isMobileOpen, setIsMobileOpen, toggleMobileItem }) => {
    return (
        <div className={`w-full flex justify-between bg-white text-black sticky top-0 z-5 px-8 py-2 transition-shadow duration-300 ${isSticky ? 'shadow-[0_4px_20px_rgba(0,0,0,0.75)]' : ''}`}>
            <div className='flex items-center py-5 text-lg font-bold tracking-wide'>Logo</div>

            <button
                className='my-auto flex flex-col gap-1.5 p-2'
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label='Toggle menu'
            >
                <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            <div className={`absolute top-full left-0 w-full z-10 grid transition-all duration-300 ease-in-out ${isMobileOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
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
