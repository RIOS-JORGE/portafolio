import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
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
          <div className="flex justify-center overflow-x-auto">
            <GitHubCalendar
              username="RIOS-JORGE"
              colorScheme="dark"
              fontSize={16}
              labels={{
                totalCount: '{{count}} contributions in the last year',
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
