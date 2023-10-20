import React, { useState } from 'react';
import wildfiretracker from "../assets/portfolio/wildfiretracker.png";
import virtualChat from "../assets/portfolio/virtualChat.png";
import amazonfrontend from "../assets/portfolio/front-endamazon.png";
import ecommerce from "../assets/portfolio/ecommerce.png";
import weather from "../assets/portfolio/weatherapp.png";
import socialmedia from "../assets/portfolio/socialmedia.png"

const imageStyle = {
    width: '500px',
    height: '175px',
};

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            src: wildfiretracker,
            project: "WildFire Tracker",
            description: "A web app for tracking wildfires.",
            link: "https://github.com/sunny21k/Wildfire-Tracker"
        },
        {
            id: 2,
            src: ecommerce,
            project: "E-Commerce Filter System",
            description: "An e-commerce website with a filter system.",
            link: "https://github.com/sunny21k/E-Commerce-Search-Filter-System"
        },
        {
            id: 3,
            src: virtualChat,
            project: "Virtual Chat",
            description: "A video chat application that enables real-time communication with others.",
            link: "https://github.com/sunny21k/Video-Chat"
        },
        {
            id: 4,
            src: socialmedia,
            project: "Social Media App",
            description: "Allows users to register, log in, and create posts using Google Firebase authentication.",
            link: "https://github.com/sunny21k/Post-App"
        },
        {
            id: 5,
            src: weather,
            project: "Weather App",
            description: "A simple and intuitive weather app that provides up-to-date weather information for your location.",
            link: "https://github.com/sunny21k/SimpleWeather-App"
        },
        {
            id: 6,
            src: amazonfrontend,
            project: "Front-end Amazon",
            description: "A front-end copy of Amazon.",
            link: "https://github.com/sunny21k/Front-end-Amazon"
        },
    ];

    const [hoveredId, setHoveredId] = useState(null);

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white pb-10 md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work:</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {projects.map(({ id, src, project, description, link }) => (
                        <div
                            key={id}
                            className={`shadow-md shadow-gray-600 rounded-lg transition-transform duration-200 ${hoveredId === id ? 'transform scale-105' : ''}`}
                            onMouseEnter={() => setHoveredId(id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className='relative overflow-hidden rounded-sm'>
                                <img
                                    src={src}
                                    alt=""
                                    style={imageStyle}
                                />
                                {hoveredId === id && (
                                    <div className='absolute inset-0 flex justify-center items-center bg-opacity-80 bg-black'>
                                        <p className='text-white text-center'>{description}</p>
                                    </div>
                                )}
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='ml-10'>{project}</p>
                                <button onClick={() => {window.open(link,"_blank")}} className='px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
