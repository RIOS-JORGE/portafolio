import aboutImg from '@/Assets/about.png';
import { ImPointRight } from 'react-icons/im';
import Section from '@/components/ui/Section';

export default function About() {
  return (
    <Section id="about" className="relative py-28 bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* About card + image */}
        <div className="flex flex-col md:flex-row items-center gap-16 pt-8">
          <div className="flex-1 pt-8 md:pt-16 pb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[2.4em] font-heading pb-6 leading-tight">
              Know Who <strong className="text-accent">I&apos;M</strong>
            </h2>

            {/* Inline AboutCard */}
            <div className="border-none bg-transparent text-white">
              <p className="text-base md:text-lg leading-relaxed text-white/75">
                Hi Everyone, I am <span className="text-accent">Jorge Rios</span>{' '}
                from <span className="text-accent">Bs As, Argentina.</span>
                <br />
                I currently work as a freelance web developer.
                <br />
                I completed my training as a React Web Developer at Coder House.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-white/75 mt-6">
                Apart from coding, some other activities that I love to do!
              </p>

              <ul className="list-none pl-0 mt-4 space-y-2">
                <li className="flex items-center gap-3 text-white/75">
                  <ImPointRight className="text-accent flex-shrink-0" /> I like to play music
                </li>
                <li className="flex items-center gap-3 text-white/75">
                  <ImPointRight className="text-accent flex-shrink-0" /> I like reading
                </li>
                <li className="flex items-center gap-3 text-white/75">
                  <ImPointRight className="text-accent flex-shrink-0" /> I like to travel
                </li>
              </ul>

              <blockquote className="text-[rgb(155_126_172)] mt-8 pl-4 border-l-2 border-accent/40 italic">
                &ldquo;Strive to build things that make a difference!&rdquo;
              </blockquote>
              <footer className="text-[#a588c0] text-sm mt-2 ml-4">— Jorge Rios</footer>
            </div>
          </div>

          <div className="flex-shrink-0 pt-16 md:pt-24">
            <img
              src={aboutImg}
              alt="about"
              className="max-w-full w-auto rounded-lg shadow-[0_0_30px_rgba(199,112,240,0.1)]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
