import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays } from 'lucide-react';

const news = [
  {
    title: "New Season: Rise of the Phoenix",
    date: "2024-01-15",
    category: "Update",
    description: "Experience new weapons, skins, and battle pass rewards in the latest season."
  },
  {
    title: "BGMI Pro League 2024",
    date: "2024-02-01",
    category: "Tournament",
    description: "Register now for India's biggest mobile gaming tournament."
  },
  {
    title: "Community Challenge",
    date: "2024-01-20",
    category: "Event",
    description: "Join the community challenge to win exclusive in-game items."
  }
];

export function NewsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Latest News
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-gray-900 border-gray-800 hover:border-red-500 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <div className="flex items-center text-gray-400 text-sm">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}