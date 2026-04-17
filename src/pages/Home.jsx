import React from 'react'
import { Navbar } from './Navbar.jsx'

export const Home = () => {

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
                    <div className='relative mx-24 my-12 p-12 text-right'>
                        <h1 className='font-bold text-4xl'>Robertson SDA</h1>
                        <br />
                        <h3 className='font-bold text-2xl'>Saturday Service Times</h3>
                        <h3 className='text-xl'>Sabbath School: <span className='font-bold'>9:15 AM</span></h3>
                        <h3 className='text-xl'>Divine Service: <span className='font-bold'>11:00 AM</span></h3>
                        <br /><br />

                        <button className=' text-xs font-semibold bg-primary p-2 px-8'>Our Services</button>
                        <br />
                        <br />
                        <div className='text-sm space-y-1'>
                            Our location <br /> 123 Main st <br /> <span className='font-bold'>Contact us: +1 (333) 333-333</span>
                        </div>
                    </div>
                </div>

                {/* Welcome Message */}

                <div className='bg-[url("/wavy-bg.webp")] bg-cover bg-top-left'>
                    <div className='flex flex-col items-center p-12'>
                        <h1 className='text-3xl font-bold p-4'>Welcome Message</h1>
                        <br />
                        <div className='p-4'>
                            <p>Welcome to the Robertson SDA Church</p><br />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolor ipsum unde eligendi dolores nulla deserunt omnis libero perferendis vel qui quasi possimus autem, quisquam nemo doloribus fugit commodi molestiae.
                            </p><br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dignissimos ipsam animi sed, deleniti odio labore mollitia quis hic esse ipsum ex? Doloremque iure laborum saepe labore ullam. Molestias, doloribus.</p>
                            <br />
                            <p className='font-bold'>Welcome!</p>
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

                <div className='w-full h-50 bg-white'>

                </div>

            </div>
        </>
    )
}
