import React from 'react';
import { motion } from 'framer-motion';

export function StylishVideoSection() {
    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
            },
        },
    };

    const videoContainerVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
            },
        },
    };

    return (
        <section className="relative h-[150vh] bg-gradient-to-b from-gray-900 via-black to-gray-800 overflow-hidden p-16">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 -z-10"
            >
                <div
                    style={{
                        backgroundImage: `url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg")`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        height: "100vh"
                    }}
                    className="absolute inset-0 opacity-30"
                ></div>
            </motion.div>

            <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center ">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={titleVariants}
                    className="text-7xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
                >
                    <span className='text-white'>India Ki</span> Heartbeat
                </motion.h1>

                {/* <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={titleVariants}
                    className="text-gray-300 text-lg text-center mb-10"
                >
                    Watch the latest highlights and updates from India’s most exciting community.
                </motion.p> */}

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={videoContainerVariants}
                    className="relative  overflow-hidden shadow-lg shadow-slate-900  border-gray-700 mx-auto"
                    style={{ width: "95%", height: "150vh" }}
                >
                    <iframe
                        src="https://www.youtube.com/embed/5NfkxxxndRc?autoplay=1&mute=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen allowTransparency
                        className="w-full h-full"
                    ></iframe>
                </motion.div>



            </div>
        </section>
    );
}
