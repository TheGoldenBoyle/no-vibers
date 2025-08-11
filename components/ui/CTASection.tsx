import React from 'react';
import Button from './Button';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonTitle?: string;
  buttonSize?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'subtle';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick: () => void;
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonTitle,
  buttonSize = 'md',
  variant = 'default',
  maxWidth = 'xl',
  className = '',
  onClick
}: CTASectionProps) {
  
  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-3xl', 
    lg: 'max-w-4xl',
    xl: 'max-w-4xl'
  };

  const containerClasses = variant === 'default' 
    ? 'text-center mt-8 -mx-6 shadow-xl md:mx-auto'
    : 'text-center mt-16 mx-auto';

  const cardClasses = variant === 'default'
    ? 'bg-secondary md:rounded-xl p-8 border hover:border-primary/80 border-primary-muted transition-all'
    : 'bg-primary/5 rounded-xl p-8 border border-primary/20 hover:border-primary/40 transition-all';

  const titleClasses = 'text-2xl font-bold mb-4 text-primary';
  
  const descriptionClasses = variant === 'default'
    ? 'mb-6 max-w-2xl mx-auto'
    : 'mb-6 text-muted';

  return (
    <div className={`${containerClasses} ${maxWidthClasses[maxWidth]} ${className}`}>
      <div className={cardClasses}>
        <h3 className={titleClasses}>
          {title}
        </h3>
        <p className={descriptionClasses}>
          {description}
        </p>
        <Button 
          onClick={onClick}
          title={buttonTitle}
          size={buttonSize}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}