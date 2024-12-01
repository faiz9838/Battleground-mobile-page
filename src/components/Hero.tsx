import { motion } from 'framer-motion';
import { Gamepad2, BugPlay } from 'lucide-react';
import { Button } from '@/components/ui/button';


export function Hero() {
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96], // Valid easing function
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96], // Valid easing function
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.2, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source
            src="https://rr2---sn-8vq54voxpo-a3vz.googlevideo.com/videoplayback?expire=1732824504&ei=WHlIZ9SSHqGKkucPma6KyQM&ip=66.180.147.213&id=o-AHabuowjZ3nTAEh4IYWnnNsPLAlOsnlyKplfSxt7rB46&itag=313&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&bui=AQn3pFT9tUxTBmYXQRacX4eecL1GKvq47QVXSd8QjdtrOkKIYptX--bqw7sZyGWuKEbBVHOGv_uNz9QS&vprv=1&mime=video%2Fwebm&rqh=1&gir=yes&clen=1249499594&dur=885.600&lmt=1732466888122301&keepalive=yes&fexp=24350590,24350655,24350675,24350705,24350737,51326932,51335594&c=ANDROID_VR&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgBGhFNGR1Ub_BgRirItV1pqvpKMQAdzLn3s-e2v3EAMkCIGlVMNRRY3PP87o8nrQrBrmYy0Ry3-yKAkchv8kjE8aN&redirect_counter=1&rm=sn-ab5elk7e&rrc=104&req_id=ca76dd8569eda3ee&cms_redirect=yes&ipbypass=yes&met=1732802929,&mh=D0&mip=42.105.132.120&mm=31&mn=sn-8vq54voxpo-a3vz&ms=au&mt=1732802700&mv=m&mvi=2&pl=24&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRQIgGXbAiOFYLqDmo0nbrL0GEekyE6YRIia5t5j5QJCyNF8CIQDjlhEB6hTKwcgrxUh-XOT_jd9HCpBZhhLYgZ8UAilr1w%3D%3D"
          />
          autoPlay
        </video>
      </motion.div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            variants={titleVariants}
            className="text-7xl font-bold text-white mb-6 tracking-tight"
          >
            BATTLEGROUNDS
            <span className="block text-red-500">MOBILE INDIA</span>
          </motion.h1>

          <motion.p
            variants={titleVariants}
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            India's most popular battle royale game. Drop in, gear up, and battle it out to be the last one standing.
          </motion.p>

          <motion.div
            variants={buttonVariants}
            className="flex gap-4 justify-center"
          >
            {/* <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6"
            >
              <Gamepad2 className="mr-2 h-5 w-5" />
              Play Now
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              className="text-black border-white hover:bg-white/10 text-lg px-8 py-6"
            >
              {/* <BugPlay className="mr-2 h-5 w-5" /> */}
              Buy UC
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </div>
      </motion.div> */}
    </section>
  );
}
