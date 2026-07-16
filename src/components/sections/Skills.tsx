import { motion } from 'framer-motion';
import { techStack, tools } from '@/data/skills';
import TechIcon from '@/components/ui/TechIcon';
import Section from '@/components/ui/Section';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function Skills() {
  return (
    <Section id="skills" className="py-28 bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tech stack */}
        <h2 className="text-3xl md:text-4xl lg:text-[2.4em] font-heading font-medium text-center pb-4 pt-2 leading-tight">
          Professional <strong className="text-accent">Skillset</strong>
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 pb-16 justify-items-center"
        >
          {techStack.map((skill) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <TechIcon
                name={skill.name}
                icon={skill.icon}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Tools */}
        <h2 className="text-3xl md:text-4xl lg:text-[2.4em] font-heading font-medium text-center pb-4 leading-tight">
          <strong className="text-accent">Tools</strong> I use
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 pb-16 justify-items-center"
        >
          {tools.map((tool) => (
            <motion.div key={tool.name} variants={itemVariants}>
              <TechIcon
                name={tool.name}
                icon={tool.icon}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub calendar */}
        <div className="text-center pb-4">
          <h2 className="text-3xl md:text-4xl lg:text-[2.4em] font-heading font-medium pb-5 leading-tight">
            Days I <strong className="text-accent">Code</strong>
          </h2>
          <div className="flex justify-center">
            {/*
              react-github-calendar will be installed in a later PR.
              For now, render a placeholder that will be replaced.
            */}
            <div className="text-white/50 text-sm py-8 px-12 rounded-lg border border-white/10 bg-white/5">
              GitHub contributions calendar (react-github-calendar)
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
