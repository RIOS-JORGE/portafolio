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
      className="relative min-h-screen bg-cover bg-top bg-no-repeat pt-32 pb-16"
      style={{
        backgroundImage: `linear-gradient(to bottom left, rgba(17,16,16,0.678), rgba(12,10,22,0.863)), url('/src/Assets/home-bg.jpg')`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Top hero — name + avatar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-16">
          <div className="flex-1 text-white">
            <p className="text-lg md:text-xl text-white/60 mb-3 tracking-wide">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight pb-4">
              Hi There!{' '}
              <span className="inline-block animate-[wave_2.1s_infinite]" role="img" aria-label="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight">
              I&apos;M{' '}
              <strong className="text-accent">JORGE RIOS</strong>
            </h1>
          </div>
          <div className="flex-shrink-0">
            <img
              src={homeMain}
              alt="home illustration"
              className="max-h-[420px] w-auto"
            />
          </div>
        </div>

        {/* Intro section (merged Home2) */}
        <div className="flex flex-col md:flex-row items-center gap-16 mt-20 pt-12">
          <div className="flex-1 text-center md:text-left text-white pt-8 md:pt-16">
            <h2 className="text-3xl md:text-4xl font-heading pb-6 leading-tight">
              LET ME <span className="text-accent">INTRODUCE</span> MYSELF
            </h2>
            <p className="text-lg leading-relaxed text-white/75 space-y-6">
              <span className="block">
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
              </span>
              <span className="block">
                I am fluent in classics like{' '}
                <em><strong className="text-accent">HTML5, CSS3, Javascript.</strong></em>
              </span>
              <span className="block">
                My field of interests are building new{' '}
                <em><strong className="text-accent">Web Technologies and Products</strong></em>
              </span>
              <span className="block">
                Whenever possible, I also apply my passion for developing products
                with{' '}
                <em><strong className="text-accent">Modern Javascript Library and Frameworks</strong></em>{' '}
                like{' '}
                <em><strong className="text-accent">React.js and Next.js</strong></em>
              </span>
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src={avatar}
              alt="avatar"
              className="max-w-[260px] w-full rounded-lg shadow-[0_0_30px_rgba(199,112,240,0.15)] animate-float"
            />
          </div>
        </div>

        {/* Social links */}
        <div className="text-center mt-20 pt-8 pb-4">
          <h3 className="text-xl md:text-2xl text-white/80 font-heading pb-3">
            FIND ME ON
          </h3>
          <p className="text-white/50 text-sm mb-6">
            Feel free to <span className="text-accent">connect</span> with me
          </p>
          <ul className="flex justify-center gap-5">
            {socialLinks.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full
                    bg-white/10 text-white text-xl transition-all duration-300
                    hover:scale-110 hover:bg-accent/20 hover:shadow-[0_0_15px_rgba(199,112,240,0.4)]
                    hover:text-accent"
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
