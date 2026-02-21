'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { AnimatedCard, AnimatedTitle } from './AnimatedCard';
import { Meteors } from "@/components/ui/meteors";
import { SpotlightEffect } from './SpotlightEffect';
import { ArrowRight, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GradientText } from './GradientText'

export default function About() {
  return (
    <section id="about" className="py-10 px-4 bg-secondary/5 ">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      <SpotlightEffect className="absolute inset-0"><p></p></SpotlightEffect>
      <Meteors className='z-10' />
      <div className="max-w-6xl mx-auto">
        {/*<AnimatedTitle>
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">À propos de moi</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded" />
          </div>
        </AnimatedTitle>*/}

        <div className="flex mt-10 justify-center flex-wrap gap-12 items-center">
          {/* Animated Photo placeholder */}
          <Meteors className='z-10' />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glow-effect w-80 h-120 rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20"
          >
            <div className="text-center w-full h-full">
              {/*<div className="text-6xl mb-4">📸</div>
              <p className="text-muted-foreground">Votre photo ici</p>
              <p className="text-sm text-muted-foreground/70 mt-2">
                Remplacez ce placeholder par votre photo professionnelle
              </p>*/}
              <img className='w-full h-full object-cover z-50' style={{ objectPosition: "top center" }} src="https://res.cloudinary.com/djcj1ulqo/image/upload/v1769186222/pm_1764206091319_cmp_v3enor.jpg" />
            </div>
            
          </motion.div>

          {/* Animated About Text */}
          <div className="max-w-4xl text-left z-10">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-primary/20 bg-primary/5"
            >
              <Code2 size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">Full Stack Developer</span>
            </motion.div>

            {/* Animated Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <GradientText animated className='greeting'>Hi, I'm Baron Adam's</GradientText>
              </h1>
            </motion.div>

            {/* Animated Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              I create modern web, mobile, and desktop applications with React, Next.js, Node.js, and Python. Passionate about clean code, exceptional UX, and innovation.
            </motion.p>

            {/* Animated CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white gap-2"
                >
                  Explore projets
                  <ArrowRight size={20} />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/10 bg-transparent"
                >
                  Download CV
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
