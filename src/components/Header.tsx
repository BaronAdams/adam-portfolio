'use client';

import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-primary/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
        >
          {'<Adam />'}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <Button
            variant="default"
            size="sm"
            className="hidden sm:inline-flex bg-primary hover:bg-primary/90"
          >
            Resume
          </Button>
        </div>
      </nav>
    </header>
  );
}
