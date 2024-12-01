import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from "../assets/Battleground-India-Logo-PNG.png"
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src={logo}
              alt="BGMI Logo"
              className="h-12"
            />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-red-500 transition-colors">
              Home
            </a>
            <a href="#" className="text-white hover:text-red-500 transition-colors">
              News
            </a>
            <a href="#" className="text-white hover:text-red-500 transition-colors">
              Events
            </a>
            <a href="#" className="text-white hover:text-red-500 transition-colors">
              Support
            </a>
            <Button className="bg-red-600 hover:bg-red-700">IOS Download</Button>
            <Button className="bg-red-600 hover:bg-red-700">AOS Download</Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-white hover:text-red-500 transition-colors">
                  Home
                </a>
                <a href="#" className="text-white hover:text-red-500 transition-colors">
                  News
                </a>
                <a href="#" className="text-white hover:text-red-500 transition-colors">
                  Events
                </a>
                <a href="#" className="text-white hover:text-red-500 transition-colors">
                  Support
                </a>
                <Button className="bg-red-600 hover:bg-red-700 w-full">
                  Play Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}