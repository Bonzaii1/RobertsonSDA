import React from 'react'

export const Dropdown = ({ isOpen }) => {

    let items = ["Item 1", "Item 2", "Item 3"]

    return (
        <div className={`absolute w-48 bg-blue-900 text-white top-full ${isOpen ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
            {
                items.map((item) => (
                    <div className='p-3 text-sm border-b border-gray-300' key={item}>{item}</div>
                ))
            }
        </div>
    )
}
