'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedCard, AnimatedTitle } from './AnimatedCard';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce platform with product catalog, shopping cart, payment integration, and admin dashboard.',
      image: '🛒',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      links: { github: '#', live: '#' },
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management application with real-time updates, user authentication, and team features.',
      image: '✓',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      links: { github: '#', live: '#' },
    },
    {
      title: 'Mobile Chat Application',
      description:
        'Cross-platform mobile chat application with real-time messaging, user profiles, and media sharing.',
      image: '💬',
      tags: ['React Native', 'Expo', 'Firebase', 'Redux'],
      links: { github: '#', live: '#' },
    },
    {
      title: 'Desktop Analytics Tool',
      description:
        'Desktop application for data visualization and analytics with interactive charts and real-time data processing.',
      image: '📊',
      tags: ['Electron', 'React', 'D3.js', 'Node.js'],
      links: { github: '#', live: '#' },
    },
    {
      title: 'Content Management System',
      description:
        'Headless CMS built with Node.js and React, providing REST APIs for content management and publishing.',
      image: '📝',
      tags: ['Node.js', 'Express', 'MongoDB', 'React'],
      links: { github: '#', live: '#' },
    },
    {
      title: 'AI Chat Interface',
      description:
        'Modern chat interface powered by AI with document parsing, context awareness, and conversation history.',
      image: '🤖',
      tags: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'TypeScript'],
      links: { github: '#', live: '#' },
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <AnimatedTitle>
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Mes Projets</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded" />
          </div>
        </AnimatedTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedCard key={index} index={index}>
              <motion.div
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="glow-effect bg-card/50 border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden group h-full">
                  <CardHeader className="pb-4">
                    <motion.div
                      className="text-5xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      {project.image}
                    </motion.div>
                    <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">{project.description}</p>

                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 cursor-pointer"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>

                    <div className="flex gap-2 pt-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <a
                          href={project.links.github}
                          className="flex items-center gap-1 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-sm"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <a
                          href={project.links.live}
                          className="flex items-center gap-1 px-3 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white transition-colors text-sm"
                        >
                          <ExternalLink size={16} />
                          Voir
                        </a>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
