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


    return (
        <>
            <div className='w-full h-full z-0'>
                {/* Navbar */}
                <Navbar />

                {/* Church Background Hero */}
                <div className='flex justify-end text-white w-full bg-[url("../../public/church_background.jpg")] bg-cover bg-top-left relative'>
                    <div className='absolute inset-0 bg-linear-to-r from-transparent from-40% to-gray-900' />
                    <div className='relative mx-24 my-16 p-12 text-right flex flex-col gap-6'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xs font-semibold uppercase tracking-widest text-white/60'>Houston, TX</p>
                            <h1 className='font-bold text-5xl leading-tight'>Robertson SDA</h1>
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

                {/* Welcome Message */}

                <div className='bg-[url("/wavy.png")] bg-cover bg-top-left'>
                    <div className='flex flex-col items-center py-20 px-6'>
                        <div className='max-w-2xl text-center flex flex-col gap-5'>
                            <p className='text-xs font-semibold uppercase tracking-widest text-primary'>Welcome</p>
                            <h1 className='text-4xl font-bold leading-tight'>Robertson Seventh-day Adventist Church</h1>
                            <p className='text-gray-500 leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolor ipsum unde eligendi dolores nulla deserunt omnis libero perferendis vel qui quasi possimus autem, quisquam nemo doloribus fugit commodi molestiae.</p>
                            <p className='text-gray-500 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dignissimos ipsam animi sed, deleniti odio labore mollitia quis hic esse ipsum ex? Doloremque iure laborum saepe labore ullam.</p>
                            <p className='font-semibold text-gray-800'>We're glad you're here.</p>
                        </div>
                    </div>
                </div>


                {/* Services */}

                <div className='bg-white'>
                    <div className='flex flex-col items-center p-12'>
                        <h1 className='text-3xl font-bold p-4'>Our Services</h1>
                        <br />
                        <div className='p-4 text-center'>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo est, assumenda eligendi perspiciatis sed ea enim exercitationem veritatis voluptatem blanditiis, dolore maxime similique, molestiae deleniti! Doloremque quo dolore distinctio molestias?</p><br />
                            <button className='bg-black text-white p-3 px-6'>Watch Live</button>
                        </div>
                    </div>
                </div>

                {/* Card Sections */}

                <div className='bg-gray-100 py-16'>
                    <div className='max-w-4xl mx-auto flex flex-col gap-12 px-18'>
                        {card_items.map((item, idx) => {
                            const imgEl = (
                                <div className='w-60 shrink-0'>
                                    <img src={item.image} alt={item.title} className='w-full h-full object-cover rounded shadow' />
                                </div>
                            )
                            const textEl = (
                                <div className='flex flex-col justify-center bg-white p-15 flex-1'>
                                    <h2 className='text-xl font-bold mb-2'>{item.title}</h2>
                                    <p className='text-gray-600 leading-relaxed text-sm'>{item.description}</p>
                                </div>
                            )
                            return (
                                <div key={idx} className='flex items-stretch gap-10'>
                                    {idx % 2 === 0 ? <>{imgEl}{textEl}</> : <>{textEl}{imgEl}</>}
                                </div>
                            )
                        })}
                    </div>
                </div>


                {/* Church Visions */}

                <div className='w-full h-25 bg-linear-to-r/srgb from-indigo-500 to-teal-400'>
                    <div className='w-full h-full flex justify-center p-8'>
                        <h3 className='text-white font-bold text-xl'>Our Church Vision Page</h3>
                    </div>
                </div>


                {/* Upcoming events*/}

                <div className='w-full bg-gray-100 py-16'>
                    <div className='max-w-4xl mx-auto px-8 flex flex-col gap-10'>
                        <h1 className='text-black text-2xl font-semibold text-center'>Events</h1>
                        <div className='grid grid-cols-4 gap-6'>
                            {event_items.map((event, idx) => (
                                <div key={idx} className='bg-white rounded shadow overflow-hidden flex flex-col'>
                                    <img src={event.image} alt={event.title} className='w-full h-36 object-cover' />
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
                        <div className='flex gap-10 items-stretch'>
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

                {/* Footer */}

                <Footer />

            </div>
        </>
    )
}
