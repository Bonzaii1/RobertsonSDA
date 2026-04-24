import React, { useState, useEffect } from 'react'
import { Home_web } from './web/Home_web.jsx'
import { Home_mobile } from './mobile/Home_mobile.jsx'

export const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    const event_items = [
        { title: "Event 1", date: "April 19, 2026", description: "Event description here.", image: "/church_background.jpg" },
        { title: "Event 2", date: "April 26, 2026", description: "Event description here.", image: "/church_background.jpg" },
        { title: "Event 3", date: "May 3, 2026", description: "Event description here.", image: "/church_background.jpg" },
        { title: "Event 4", date: "May 10, 2026", description: "Event description here.", image: "/church_background.jpg" },
        { title: "Event 5", date: "May 17, 2026", description: "Event description here.", image: "/church_background.jpg" },
    ]

    const card_items = [
        {
            title: "Card Title One",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor ipsum unde eligendi dolores nulla deserunt omnis libero perferendis vel qui quasi possimus autem.",
            image: "/church_background.jpg",
        },
        {
            title: "Card Title Two",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor ipsum unde eligendi dolores nulla deserunt omnis libero perferendis vel qui quasi possimus autem.",
            image: "/church_background.jpg",
        },
        {
            title: "Card Title Three",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor ipsum unde eligendi dolores nulla deserunt omnis libero perferendis vel qui quasi possimus autem.",
            image: "/church_background.jpg",
        },
    ]

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return isMobile
        ? <Home_mobile card_items={card_items} event_items={event_items} />
        : <Home_web card_items={card_items} event_items={event_items} />
}
