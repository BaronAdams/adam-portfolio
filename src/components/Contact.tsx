'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'hover:text-slate-400' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-400' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: 'hover:text-cyan-400' },
    { icon: Mail, label: 'Email', href: 'mailto:contact@example.com', color: 'hover:text-red-400' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Travaillons Ensemble</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="glow-effect bg-card/50 border-primary/10">
            <CardHeader>
              <CardTitle>Envoyez-moi un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Nom</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-primary/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="votre.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-primary/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <textarea
                    placeholder="Parlez-moi de votre projet..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-primary/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <Card className="glow-effect bg-card/50 border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="text-primary" size={20} />
                  Informations de Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <a
                    href="mailto:contact@example.com"
                    className="text-primary hover:underline"
                  >
                    contact@example.com
                  </a>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Localisation</div>
                  <p className="text-foreground">France</p>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Disponibilité</div>
                  <p className="text-foreground">Ouvert aux nouvelles opportunités</p>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glow-effect bg-card/50 border-primary/10">
              <CardHeader>
                <CardTitle>Réseaux Sociaux</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 ${social.color}`}
                      >
                        <Icon size={20} />
                        <span className="text-sm font-medium">{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
