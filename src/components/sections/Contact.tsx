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
    <Section id="contact" className="py-20 bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-[2.3em] font-medium pb-4 pt-2">
          Get In <strong className="text-accent">Touch</strong>
        </h1>
        <p className="text-white/60 mb-8 max-w-lg mx-auto">
          Feel free to reach out if you&apos;re looking for a developer,
          have a question, or just want to connect.
        </p>

        {/* Email */}
        <a
          href="mailto:riosjorge.frontend@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent/10 border border-accent/30
            text-accent hover:bg-accent/20 hover:shadow-[0_0_15px_rgba(199,112,240,0.3)]
            transition-all duration-300 mb-8"
        >
          <AiOutlineMail className="text-xl" />
          <span>riosjorge.frontend@gmail.com</span>
        </a>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full
                bg-white text-[#700c86] text-xl transition-all duration-300
                hover:scale-110 hover:shadow-[0_0_15px_rgba(128,31,149,0.5)]
                hover:text-[#87209e]"
            >
              {iconMap[link.platform]}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
