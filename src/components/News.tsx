import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function News() {
    const newsData = [
        {
            title: "BGMI 2025: New Map 'Eagle's Domain' Released",
            description:
                "Experience the thrilling new terrain with elevated landscapes and hidden loot. Perfect for snipers and strategists.",
            image: "https://via.placeholder.com/600x400?text=Eagle+Domain+Map",
            link: "#",
        },
        {
            title: "Esports Scene Revamped: BGMI 2025 Tournaments Announced",
            description:
                "Krafton reveals the official 2025 Esports schedule, featuring a $10M prize pool for global tournaments.",
            image: "https://via.placeholder.com/600x400?text=Esports+2025",
            link: "#",
        },
        {
            title: "Exciting Updates: New Skins, Vehicles, and Emotes",
            description:
                "Level up your game with stunning new skins, enhanced vehicles, and dance emotes to taunt your opponents.",
            image: "https://via.placeholder.com/600x400?text=Skins+Update",
            link: "#",
        },
    ];

    return (
        <section className="relative min-h-screen py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Heading Section */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-5xl font-extrabold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent"
                >
                    BGMI 2025 News & Updates
                </motion.h2>
                <p className="mt-4 text-center text-gray-400 text-lg max-w-3xl mx-auto">
                    Stay updated with the latest features, maps, and tournaments that keep BGMI at the top of the Battle Royale genre.
                </p>

                {/* News Grid */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((news, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative rounded-xl border-0 shadow-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
                        >
                            {/* Background Image */}
                            <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-64 object-cover"
                            />
                            {/* Content Overlay */}
                            <div className="absolute inset-0 bg-gray-900 backdrop-blur-lg border border-gray border-spacing-1 hover:border-orange-500 flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-bold text-white mb-3">{news.title}</h3>
                                <p className="text-gray-300 text-sm mb-4">{news.description}</p>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-red-600 text-white hover:bg-red-700 px-6 py-3"
                                    as="a"
                                    href={news.link}
                                >
                                    Read More
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block   shadow-sm  shadow-slate-600  rounded-full"
                    >
                        <Button
                            size="lg"
                            className="text-lg px-12 py-4 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-black font-bold hover:shadow-slate-900 bg-white rounded-full hover:shadow-lg"
                        >
                            Join the Action Now
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
