import React, { useEffect, useState } from 'react'
import { Navbar_web } from './web/Navbar_web.jsx'
import { Navbar_mobile } from './mobile/Navbar_mobile.jsx'

export const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    const listItems = ["About", "Connect", "Ministries", "Zoom Groups"]
    const dropdownItems = {
        "About": ["About 1", "About 2", "About 3"],
        "Connect": ["Item 1", "Item 2", "Item 3"],
        "Ministries": ["Item 1", "Item 2", "Item 3"],
        "Zoom Groups": ["Item 1", "Item 2", "Item 3"]
    }

    const [isOpen, setIsOpen] = useState({
        "About": false, "Connect": false, "Ministries": false, "Zoom Groups": false
    })

    function updateState(item) {
        setIsOpen(Object.keys(isOpen).reduce((acc, key) => ({ ...acc, [key]: key === item }), {}))
    }

    function toggleMobileItem(item) {
        setIsOpen(prev => ({ ...prev, [item]: !prev[item] }))
    }

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 10)
        const handleResize = () => setIsMobile(window.innerWidth < 768)

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const props = {
        isSticky, listItems, dropdownItems,
        isOpen, setIsOpen, updateState,
        toggleMobileItem, isMobileOpen, setIsMobileOpen
    }

    return isMobile
        ? <Navbar_mobile {...props} />
        : <Navbar_web {...props} />
}
