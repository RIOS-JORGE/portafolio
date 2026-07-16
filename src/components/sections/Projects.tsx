import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import Section from '@/components/ui/Section';

export default function Projects() {
  return (
    <Section id="projects" className="py-28 bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-[2.4em] font-heading font-medium text-center pb-4 pt-2 leading-tight">
          My Recent <strong className="text-accent">Works</strong>
        </h2>
        <p className="text-center text-white/50 text-base md:text-lg mb-14 max-w-xl mx-auto">
          Here are a few projects I&apos;ve worked on recently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
