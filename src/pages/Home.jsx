import React from 'react'
import { Navbar } from './Navbar.jsx'
import { Footer } from '../components/Footer.jsx'

export const Home = () => {
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

    return (
        <div className='w-full h-full z-0'>
            <Navbar />

            {/* Hero */}
            <div className='flex justify-end text-white w-full bg-[url("/church_background.png")] bg-cover bg-center relative py-14 animate-fadeInBase'>
                <div className='absolute inset-0 bg-linear-to-r from-transparent from-40% to-gray-900' />
                <div className='relative mx-4 my-6 p-6 md:mx-24 md:my-16 md:p-12 text-right flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-xs font-semibold uppercase tracking-widest text-white/60'>Houston, TX</p>
                        <h1 className='font-bold text-3xl md:text-5xl leading-tight'>Robertson SDA</h1>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xs font-semibold uppercase tracking-widest text-white/60 mb-2'>Saturday Services</p>
                        <p className='text-lg'>Sabbath School — <span className='font-bold'>9:15 AM</span></p>
                        <p className='text-lg'>Divine Service — <span className='font-bold'>11:00 AM</span></p>
                    </div>
                    <div className='flex flex-col gap-1 items-end'>
                        <button className='text-xs font-semibold bg-primary px-8 py-2.5 rounded-full hover:bg-primary/90 transition-colors'>Our Services</button>
                    </div>
                    <div className='flex flex-col gap-0.5 text-sm text-white/70'>
                        <p>123 Main St, Houston TX</p>
                        <p>+1 (333) 333-3333</p>
                    </div>
                </div>
            </div>

            {/* Welcome */}
            <div className='bg-[url("/wavy.png")] bg-cover bg-top-left'>
                <div className='flex flex-col items-center py-12 md:py-20 px-6'>
                    <div className='max-w-2xl text-center flex flex-col gap-5'>
                        <p className='text-xs font-semibold uppercase tracking-widest text-primary'>Welcome</p>
                        <h1 className='text-2xl md:text-4xl font-bold leading-tight'>Robertson Seventh-day Adventist Church</h1>
                        <p className='text-gray-700 leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolor ipsum unde eligendi dolores nulla deserunt omnis libero perferendis vel qui quasi possimus autem, quisquam nemo doloribus fugit commodi molestiae.</p>
                        <p className='text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dignissimos ipsam animi sed, deleniti odio labore mollitia quis hic esse ipsum ex? Doloremque iure laborum saepe labore ullam.</p>
                        <p className='font-semibold text-gray-800'>We're glad you're here.</p>
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className='bg-white'>
                <div className='flex flex-col items-center p-8 md:p-12'>
                    <h1 className='text-3xl md:text-4xl font-bold p-4'>Our Services</h1>
                    <br />
                    <div className='mx-4 md:mx-32 p-4 text-center'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo est, assumenda eligendi perspiciatis sed ea enim exercitationem veritatis voluptatem blanditiis, dolore maxime similique, molestiae deleniti! Doloremque quo dolore distinctio molestias?</p><br />
                        <button className='bg-black text-white p-3 px-8'>Watch Live</button>
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className='bg-gray-100 py-16'>
                <div className='max-w-6xl mx-auto flex flex-col gap-12 px-8'>
                    {card_items.map((item, idx) => (
                        <div key={idx} className={`flex flex-col md:flex-row items-stretch gap-4 md:gap-10 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className='w-full md:w-100 shrink-0'>
                                <img src={item.image} alt={item.title} className='w-full h-56 md:h-full object-cover rounded shadow' />
                            </div>
                            <div className='flex flex-col justify-center bg-white p-8 md:p-22 flex-1'>
                                <h2 className='px-3 text-2xl md:text-3xl font-bold mb-2'>{item.title}</h2>
                                <p className='px-3 text-gray-600 leading-relaxed text-sm'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Church Visions */}
            <div className='py-8 w-full bg-linear-to-r/srgb from-blue-800 to-green-800'>
                <div className='w-full h-full flex flex-col items-center p-8'>
                    <h3 className='text-white font-bold m-4 p-3 text-2xl md:text-4xl'>Page Reference Here</h3>
                    <button className='bg-primary text-white m-4 p-3 px-14'>Button to page</button>
                </div>
            </div>

            {/* Events */}
            <div className='w-full bg-gray-100 py-16'>
                <div className='max-w-6xl mx-auto px-8 flex flex-col gap-10'>
                    <h1 className='text-black text-2xl font-semibold text-center'>Events</h1>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                        {event_items.map((event, idx) => (
                            <div key={idx} className='bg-white rounded shadow overflow-hidden flex flex-col'>
                                <img src={event.image} alt={event.title} className='w-full h-54 object-cover' />
                                <div className='p-4 flex flex-col gap-1 flex-1'>
                                    <h2 className='font-bold text-sm'>{event.title}</h2>
                                    <p className='text-xs text-primary font-semibold'>{event.date}</p>
                                    <p className='text-xs text-gray-600 mt-1'>{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Location */}
            <div className='w-full bg-white py-16'>
                <div className='max-w-4xl mx-auto px-8 flex flex-col gap-8'>
                    <div className='flex flex-col md:flex-row gap-8 md:gap-10 items-stretch'>
                        <div className='flex-1'>
                            <iframe
                                src="https://maps.google.com/maps?q=4318+Robertson+St,+Houston,+TX+77009&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '320px' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className='flex-1 flex flex-col gap-6 justify-center'>
                            <div>
                                <h2 className='font-bold text-lg mb-1'>Robertson SDA Church</h2>
                                <p className='text-gray-600 text-sm'>123 Main St</p>
                                <p className='text-gray-600 text-sm'>City, State 00000</p>
                            </div>
                            <div>
                                <h2 className='font-bold text-sm mb-1'>Service Times</h2>
                                <p className='text-gray-600 text-sm'>Sabbath School: <span className='font-semibold'>9:15 AM</span></p>
                                <p className='text-gray-600 text-sm'>Divine Service: <span className='font-semibold'>11:00 AM</span></p>
                            </div>
                            <div>
                                <h2 className='font-bold text-sm mb-1'>Contact</h2>
                                <p className='text-gray-600 text-sm'>Phone: +1 (333) 333-3333</p>
                                <p className='text-gray-600 text-sm'>Email: info@robertsonsda.org</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
