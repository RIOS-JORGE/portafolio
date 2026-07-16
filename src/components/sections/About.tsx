import aboutImg from '@/Assets/about.png';
import { ImPointRight } from 'react-icons/im';
import Section from '@/components/ui/Section';

export default function About() {
  return (
    <Section id="about" className="relative py-24 bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* About card + image */}
        <div className="flex flex-col md:flex-row items-center gap-12 pt-8">
          <div className="flex-1 pt-8 md:pt-16 pb-12">
            <h1 className="text-3xl md:text-[2.1em] pb-5">
              Know Who <strong className="text-accent">I&apos;M</strong>
            </h1>

            {/* Inline AboutCard */}
            <div className="border-none bg-transparent text-white">
              <p className="text-justify">
                Hi Everyone, I am <span className="text-accent">Jorge Rios</span>{' '}
                from <span className="text-accent">Bs As, Argentina.</span>
                <br />
                I currently work as a freelance web developer.
                <br />
                I completed my training as a React Web Developer at Coder House.
                <br /><br />
                Apart from coding, some other activities that I love to do!
              </p>
              <ul className="list-none pl-0 mt-2">
                <li className="flex items-center gap-2 py-1">
                  <ImPointRight className="text-accent" /> I like to play music
                </li>
                <li className="flex items-center gap-2 py-1">
                  <ImPointRight className="text-accent" /> I like reading
                </li>
                <li className="flex items-center gap-2 py-1">
                  <ImPointRight className="text-accent" /> I like to travel
                </li>
              </ul>
              <p className="text-[rgb(155_126_172)] mt-4 italic">
                &ldquo;Strive to build things that make a difference!&rdquo;
              </p>
              <footer className="text-[#a588c0] text-sm mt-1">— Jorge Rios</footer>
            </div>
          </div>

          <div className="flex-shrink-0 pt-28 md:pt-32 pb-8">
            <img
              src={aboutImg}
              alt="about"
              className="max-w-full w-auto"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
