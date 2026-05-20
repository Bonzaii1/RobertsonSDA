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
            title: "Escuela Sabatica",
            description: <>Nuestra Escuela sabatica se toma en el Sanctuario para los Adultos y en los salones de clases para los niños.<br /> <br />El programa comienza a las 9:30</>,
            image: "/sabbath_school.png",
        },
        {
            title: "Culto Divino",
            description: "Nuestro Culto divino estara en el sanctuario justo despues de Escuela Sabatica a partir de las 10:30",
            image: "/culto_divino.png",
        },
        {
            title: "Thrive Ministries",
            description: "Our English Program will take place in our upstairs Thrive room starting at 10:45",
            image: "/young_adult.png",
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
