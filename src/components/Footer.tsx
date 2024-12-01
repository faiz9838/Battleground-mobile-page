import { motion } from 'framer-motion';
import logo from "../assets/Battleground-India-Logo-PNG.png";

export function Footer() {
    return (
        <footer className="bg-black/90 backdrop-blur-sm text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-4">
                        <img src={logo} alt="BGMI Logo" className="h-12" />
                        <span className="text-gray-400">&copy; {new Date().getFullYear()} BGMI. All rights reserved.</span>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                        <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                            Contact Us
                        </a>
                    </div>

                    {/* Social Media Section */}
                    <div className="flex space-x-4">
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook"></i>
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                            aria-label="YouTube"
                        >
                            <i className="fab fa-youtube"></i>
                        </motion.a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
