import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ParallaxSection } from '../animations/ParallaxSection';

const gameModes = [
  {
    title: "Classic Mode",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2940",
    description: "The traditional battle royale experience with up to 100 players."
  },
  {
    title: "Team Deathmatch",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=2947",
    description: "Fast-paced 4v4 arena combat with instant respawns."
  },
  {
    title: "Arcade Mode",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=2940",
    description: "Quick matches with special rules and limited weapons."
  }
];

export function GameModes() {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <ParallaxSection>
          <ScrollReveal>
            <h2 className="text-5xl font-bold text-center text-white mb-16">
              Game Modes
            </h2>
          </ScrollReveal>
        </ParallaxSection>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {gameModes.map((mode, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <ScrollReveal delay={index * 0.2}>
                  <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800 overflow-hidden hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={mode.image}
                        alt={mode.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {mode.title}
                      </h3>
                      <p className="text-gray-400">{mode.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}