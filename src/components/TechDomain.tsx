'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  Code2,
  Zap,
  Server,
  Package,
  Smartphone,
  Wind,
  Atom,
  Laptop,
  Braces,
  Monitor
} from 'lucide-react';

import { AnimatedCard, AnimatedTitle } from './AnimatedCard';

export default function TechDomain() {
  const techdomains = [
    { name: 'Frontend Development', description:'', color: 'from-blue-500/20 to-cyan-500/20', icon: Monitor },
    { name: 'Backend Development', description:'', color: 'from-slate-500/20 to-gray-500/20', icon: Braces },
    { name: 'Mobile Development', description:'', color: 'from-blue-400/20 to-blue-600/20', icon: Smartphone },
    { name: 'Desktop Development', description:'', color: 'from-green-500/20 to-emerald-500/20', icon: Laptop },
    // { name: 'Express', description:'', category: 'Backend', color: 'from-yellow-500/20 to-orange-500/20', icon: Package },
    // { name: 'Tailwind CSS', description:'', category: 'Styling', color: 'from-cyan-500/20 to-blue-500/20', icon: Wind },
    // { name: 'Electron', description:'', category: 'Desktop', color: 'from-gray-400/20 to-slate-500/20', icon: Package },
    // { name: 'React Native', description:'', category: 'Mobile', color: 'from-purple-500/20 to-blue-500/20', icon: Smartphone },
    // { name: 'Fastify', description:'', category: 'Backend', color: 'from-red-400/20 to-pink-500/20', icon: Zap },
    // { name: 'Remix', description:'', category: 'Framework', color: 'from-purple-600/20 to-purple-400/20', icon: Zap },
    // { name: 'Flask', description:'', category: 'Python', color: 'from-red-500/20 to-orange-500/20', icon: Package },
    // { name: 'Python', description:'', category: 'Language', color: 'from-yellow-400/20 to-blue-500/20', icon: Code2 },
  ];

  return (
    <section id="techstack" className="py-10 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <AnimatedTitle>
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Tech Domain</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded" />
          </div>
        </AnimatedTitle>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {techdomains.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <AnimatedCard key={index} index={index}>
                <motion.div
                  whileHover={{ y: -8, rotateZ: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-full"
                >
                  <Card
                    className={`glow-effect bg-gradient-to-br ${tech.color} border-primary/20 hover:border-primary/40 transition-all duration-300 h-full cursor-pointer`}
                  >
                    <CardContent className="pt-6 text-center">
                      <motion.div
                        className="mb-3 flex justify-center"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                      >
                        <IconComponent className="w-8 h-8 text-primary" />
                      </motion.div>
                      <div className="font-semibold text-foreground mb-1">{tech.name}</div>
                      <div className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis sapien sit amet tellus blandit, id molestie dui tincidunt. Phasellus dolor orci, rhoncus in rhoncus eget, laoreet et sapien. Fusce at fermentum urna. Ut varius orci elit, id ornare est porta quis. Fusce pharetra id justo non ornare</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
