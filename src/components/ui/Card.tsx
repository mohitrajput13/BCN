'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className, hover = false }: CardProps) => {
  return (
    <div
      className={cn(
        'bg-primary-slate/50 backdrop-blur-sm border border-primary-slate/30 rounded-2xl p-8 hover-glow-card',
        hover && 'hover:bg-primary-slate/70 hover:border-primary-blue/50',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
