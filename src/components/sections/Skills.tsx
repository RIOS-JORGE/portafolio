import { techStack, tools } from '@/data/skills';
import TechIcon from '@/components/ui/TechIcon';
import Section from '@/components/ui/Section';

export default function Skills() {
  return (
    <Section id="skills" className="py-20 bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Tech stack */}
        <h1 className="text-[2.3em] font-medium text-center pb-4 pt-2">
          Professional <strong className="text-accent">Skillset</strong>
        </h1>
        <div className="flex flex-wrap justify-center gap-4 pb-12">
          {techStack.map((skill) => (
            <TechIcon
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>

        {/* Tools */}
        <h1 className="text-[2.3em] font-medium text-center pb-4">
          <strong className="text-accent">Tools</strong> I use
        </h1>
        <div className="flex flex-wrap justify-center gap-4 pb-12">
          {tools.map((tool) => (
            <TechIcon
              key={tool.name}
              name={tool.name}
              icon={tool.icon}
            />
          ))}
        </div>

        {/* GitHub calendar */}
        <div className="text-center pb-4">
          <h1 className="text-[2.3em] font-medium pb-5">
            Days I <strong className="text-accent">Code</strong>
          </h1>
          <div className="flex justify-center">
            {/*
              react-github-calendar will be installed in a later PR.
              For now, render a placeholder that will be replaced.
            */}
            <div className="text-white/50 text-sm py-8">
              GitHub contributions calendar (react-github-calendar)
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
