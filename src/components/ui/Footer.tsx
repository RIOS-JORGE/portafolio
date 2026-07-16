import { socialLinks } from '@/data/social';
import { siteConfig } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Social links */}
        <div className="flex justify-center gap-5 mb-5">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-white/40 hover:text-accent transition-colors duration-300"
                aria-label={link.platform}
              >
                <Icon className="text-xl" />
              </a>
            );
          })}
        </div>

        <p className="text-white/35 text-sm">
          &copy; {year} {siteConfig.name}. Built with React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
