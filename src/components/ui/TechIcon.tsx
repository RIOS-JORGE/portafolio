import type { ComponentType } from 'react';

interface TechIconProps {
  name: string;
  icon: ComponentType<{ className?: string }>;
  className?: string;
}

export default function TechIcon({ name, icon: Icon, className = '' }: TechIconProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center w-24 h-24 p-3 border border-accent/40 rounded-xl
        text-4xl text-white/80 transition-all duration-300 hover:scale-105
        hover:border-accent hover:shadow-[0_0_15px_rgba(199,112,240,0.3)] hover:text-accent ${className}`}
    >
      <Icon className="text-[2.5rem]" />
      <span className="mt-2 text-[0.65rem] text-white/50 tracking-wide">{name}</span>
    </div>
  );
}
