'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { AnimatedCard, AnimatedTitle } from './AnimatedCard';
import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Laptop,
  Braces } from "lucide-react"

export default function TechStack() {
  const skillsCategories = [
    {
      Icon: Laptop,
      name: "Web Frontend",
      description: "Push, build, deploy.",
      className: "col-span-3 md:col-span-1",
      href: ``,
      cta: "",
      background: (
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
        >
          <OrbitingCircles iconSize={30}>
            <img src={`https://cdn.simpleicons.org/html5/html5`} />
            <img src={`https://cdn.simpleicons.org/css/css`} />
            <img src={`https://cdn.simpleicons.org/javascript/javascript`} />
            <img src={`https://cdn.simpleicons.org/jquery/jquery`} />
            <img src={`https://cdn.simpleicons.org/typescript/typescript`} />
            <img src={`https://cdn.simpleicons.org/tailwindcss/tailwindcss`} />

          </OrbitingCircles>
          <OrbitingCircles iconSize={20} radius={100} reverse speed={2}>
            <img src={`https://cdn.simpleicons.org/react/react`} />
            <img src={`https://cdn.simpleicons.org/reactrouter/reactrouter`} />
            <img src={`https://cdn.simpleicons.org/shadcnui/shadcnui`} />
            <img src={`https://cdn.simpleicons.org/redux/redux`} />
            <img src={`https://cdn.simpleicons.org/nextdotjs/white`} />
            <img src={`https://cdn.simpleicons.org/remix/white`} />
          </OrbitingCircles>
        </motion.div>
      ),
    },
    {
      Icon: Braces,
      name: "Backend",
      description: "Push, build, deploy.",
      className: "col-span-3 md:col-span-1",
      href: ``,
      cta: "",
      background: (
        <motion.div
          className="flex flex-wrap h-full w-full items-center justify-center"
          // className="relative flex h-full w-full items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
        >
          <OrbitingCircles iconSize={30}>
            <img src={`https://cdn.simpleicons.org/typescript/typescript`} />
            <img src={`https://cdn.simpleicons.org/nodedotjs/nodedotjs`} />
            <img src={`https://cdn.simpleicons.org/express/white`} />

          </OrbitingCircles>
          <OrbitingCircles iconSize={20} radius={100} reverse speed={2}>
            <img src={`https://cdn.simpleicons.org/fastify/fastify`} />
            <img src={`https://cdn.simpleicons.org/python/python`} />
            <img src={`https://cdn.simpleicons.org/flask/flask`} />
          </OrbitingCircles>
        </motion.div>
      ),
    },
    // {
    //   title: 'Mobile & Desktop',
    //   skills: ['reactnative', 'expo', 'electron', 'tauri'],
    // },
    // {
    //   title: 'Tools & Version Control',
    //   skills: ['git', 'gitHub', 'githubactions', 'npm', 'postman', 'docker'],
    // },
    // {
    //   title: 'Databases',
    //   skills: ['sqlite', 'postgresql', 'mysql', 'mongodb'],
    // },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedTitle>
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Compétences</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded" />
          </div>
        </AnimatedTitle>


        <BentoGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category, index) => (
            <BentoCard key={index} {...category} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
