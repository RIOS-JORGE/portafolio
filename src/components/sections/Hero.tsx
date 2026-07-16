import homeMain from '@/Assets/home-main.svg';
import avatar from '@/Assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { socialLinks } from '@/data/social';

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <AiFillGithub />,
  LinkedIn: <FaLinkedinIn />,
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-top bg-no-repeat pt-32 pb-12"
      style={{
        backgroundImage: `linear-gradient(to bottom left, rgba(17,16,16,0.678), rgba(12,10,22,0.863)), url('/src/Assets/home-bg.jpg')`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Top hero — name + avatar */}
        <div className="flex flex-col md:flex-row items-center gap-8 pt-12">
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl font-heading pb-4">
              Hi There!{' '}
              <span className="inline-block animate-[wave_2.1s_infinite]" role="img" aria-label="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="text-4xl md:text-5xl font-heading">
              I&apos;M{' '}
              <strong className="text-accent">JORGE RIOS</strong>
            </h1>
          </div>
          <div className="flex-shrink-0">
            <img
              src={homeMain}
              alt="home illustration"
              className="max-h-[450px] w-auto"
            />
          </div>
        </div>

        {/* Intro section (merged Home2) */}
        <div className="flex flex-col md:flex-row items-center gap-12 mt-16 pt-16">
          <div className="flex-1 text-center md:text-left text-white pt-10 md:pt-20">
            <h1 className="text-3xl md:text-4xl pb-6">
              LET ME <span className="text-accent">INTRODUCE</span> MYSELF
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br /><br />
              I am fluent in classics like{' '}
              <em><strong className="text-accent">HTML5, CSS3, Javascript.</strong></em>
              <br /><br />
              My field of interests are building new{' '}
              <em><strong className="text-accent">Web Technologies and Products</strong></em>
              <br /><br />
              Whenever possible, I also apply my passion for developing products
              with{' '}
              <em><strong className="text-accent">Modern Javascript Library and Frameworks</strong></em>{' '}
              like{' '}
              <em><strong className="text-accent">React.js and Next.js</strong></em>
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src={avatar}
              alt="avatar"
              className="max-w-[280px] w-full rounded-lg"
            />
          </div>
        </div>

        {/* Social links */}
        <div className="text-center mt-12 pt-6 pb-8">
          <h2 className="text-2xl text-white pb-2">FIND ME ON</h2>
          <p className="text-white/70">
            Feel free to <span className="text-accent">connect</span> with me
          </p>
          <ul className="flex justify-center gap-4 mt-4">
            {socialLinks.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full
                    bg-white text-[#700c86] text-xl transition-all duration-300
                    hover:scale-110 hover:shadow-[0_0_15px_rgba(128,31,149,0.5)]
                    hover:text-[#87209e]"
                >
                  {iconMap[link.platform]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
