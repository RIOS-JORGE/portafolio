import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import Section from '@/components/ui/Section';

export default function Projects() {
  return (
    <Section id="projects" className="py-20 bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-[2.3em] font-medium text-center pb-4 pt-2">
          My Recent <strong className="text-accent">Works</strong>
        </h1>
        <p className="text-center text-white/60 mb-12">
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
