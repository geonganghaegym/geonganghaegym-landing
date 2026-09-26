'use client';

import { useEffect, useState } from 'react';

import { Typography } from '@/lib/mixin';
import { cn } from '@/lib/utils';

const HEADER_HEIGHT = 56;

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > HEADER_HEIGHT) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed z-50 w-full bg-[#1990FF] bg-transparent transition-all duration-500',
        isVisible ? 'top-0' : '-top-full'
      )}>
      <nav
        className='mx-auto flex max-w-[1140px] items-center justify-between px-10 py-4'
        aria-label='Global'>
        <p className={cn(Typography.HEADING_1, 'text-white')}>건강해짐</p>
      </nav>
    </header>
  );
};

export default Header;
