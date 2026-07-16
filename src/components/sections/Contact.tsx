import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { socialLinks } from '@/data/social';
import Section from '@/components/ui/Section';

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <AiFillGithub />,
  LinkedIn: <FaLinkedinIn />,
};

export default function Contact() {
  return (
    <Section id="contact" className="py-28 bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[2.4em] font-heading font-medium pb-4 pt-2 leading-tight">
          Get In <strong className="text-accent">Touch</strong>
        </h2>
        <p className="text-white/50 text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Feel free to reach out if you&apos;re looking for a developer,
          have a question, or just want to connect.
        </p>

        {/* Email CTA */}
        <a
          href="mailto:riosjorge.frontend@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent/10 border border-accent/30
            text-accent font-medium hover:bg-accent/20 hover:shadow-[0_0_20px_rgba(199,112,240,0.3)]
            transition-all duration-300 mb-12"
        >
          <AiOutlineMail className="text-xl" />
          <span>riosjorge.frontend@gmail.com</span>
        </a>

        {/* Social links */}
        <div className="flex justify-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full
                bg-white/10 text-white text-xl transition-all duration-300
                hover:scale-110 hover:bg-accent/20 hover:shadow-[0_0_15px_rgba(199,112,240,0.4)]
                hover:text-accent"
            >
              {iconMap[link.platform]}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
