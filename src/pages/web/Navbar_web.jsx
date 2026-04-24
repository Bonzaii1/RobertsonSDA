import React from 'react'

export const Navbar_web = ({ isSticky, listItems, dropdownItems, isOpen, setIsOpen, updateState }) => {
    return (
        <div className={`w-full flex justify-between bg-white text-black sticky top-0 z-5 px-8 py-2 transition-shadow duration-300 ${isSticky ? 'shadow-[0_4px_20px_rgba(0,0,0,0.75)]' : ''}`}>
            <div className='flex items-center py-5 text-lg font-bold tracking-wide'>Logo</div>

            <div className='flex items-stretch gap-5'>
                {listItems.map((item) => (
                    <div
                        className='relative flex items-center px-4 text-xl font-medium text-black/80 hover:text-primary hover:bg-white/10 rounded transition-colors cursor-pointer'
                        onMouseOver={() => updateState(item)}
                        onMouseLeave={() => setIsOpen(prev => ({ ...prev, [item]: false }))}
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

            <button className='my-auto text-sm font-semibold bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-colors'>
                Join Us
            </button>
        </div>
    )
}
