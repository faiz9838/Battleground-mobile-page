import { Shield, Users, Map, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from './animations/ScrollReveal';
import { ParallaxSection } from './animations/ParallaxSection';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: 'India Specific',
    description: 'Customized for Indian gamers with local servers and exclusive events.',
  },
  {
    icon: <Users className="h-8 w-8 text-green-500" />,
    title: 'Massive Multiplayer',
    description: 'Battle with up to 100 players in intense matches.',
  },
  {
    icon: <Map className="h-8 w-8 text-yellow-500" />,
    title: 'Multiple Maps',
    description: 'Diverse battlegrounds from urban cities to dense forests.',
  },
  {
    icon: <Trophy className="h-8 w-8 text-purple-500" />,
    title: 'Tournaments',
    description: 'Regular tournaments with exciting prizes and rewards.',
  },
];

export function Features() {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <ParallaxSection>
          <ScrollReveal>
            <h2 className="text-5xl font-bold text-center text-white mb-16">
              Game Features
            </h2>
          </ScrollReveal>
        </ParallaxSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.2}
            >
              <Card className="bg-gray-900 backdrop-blur-lg border-gray-800 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}