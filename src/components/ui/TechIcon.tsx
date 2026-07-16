import type { ComponentType } from 'react';

interface TechIconProps {
  name: string;
  icon: ComponentType<{ className?: string }>;
  className?: string;
}

export default function TechIcon({ name, icon: Icon, className = '' }: TechIconProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-3 border border-accent/60 rounded-lg
        text-5xl text-white/90 transition-all duration-300 hover:scale-105
        hover:border-accent hover:shadow-[0_0_15px_rgba(199,112,240,0.3)] ${className}`}
    >
      <Icon className="text-[2.8rem]" />
      <span className="mt-2 text-xs text-white/60">{name}</span>
    </div>
  );
}
