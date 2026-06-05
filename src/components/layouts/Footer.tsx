import Link from 'next/link';
import Logo from './Logo';
import { ImLinkedin2 } from 'react-icons/im';
import { SiDiscord } from 'react-icons/si';
import { TbBrandGithubFilled } from 'react-icons/tb';

const Footer = () => {
  return (
    <div className="w-full relative">
      <div className="max-w-7xl mx-auto">
          {/* Dashed Top Right Fade Grid */}
          <div className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
            linear-gradient(
              to right,
              color-mix(in oklab, var(--color-primary) 50%, transparent) 0.5px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              color-mix(in oklab, var(--color-primary) 50%, transparent) 0.5px,
              transparent 1px
            )
          `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              radial-gradient(
                ellipse 80% 80% at 100% 0%,
                #000 50%,
                transparent 90%
              )
            `,
            WebkitMaskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              radial-gradient(
                ellipse 100% 100% at 100% 0%,
                #000 60%,
                transparent 100%
              )
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
          />
           {/* Content sits above the gradient */}
          <div className="relative z-10">
            <footer className="footer sm:footer-horizontal text-base-content py-10 px-2">
              <nav>
                <h6 className="text-primary font-bold text-xl">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
              </nav>
              <nav>
                <h6 className="text-primary font-bold text-xl">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
              </nav>
              <nav>
                <h6 className="text-primary font-bold text-xl">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
              </nav>
            </footer>

            <footer className="footer border-base-300 border-t px-2 py-10">
              <aside className="grid-flow-col items-center">
                <Logo />
              </aside>
              <nav className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-4">
                  <Link href="https://github.com/syedshafinahmed" target="_blank">
                    <TbBrandGithubFilled size={24} className="text-primary"/>
                  </Link>
                  <Link href="https://www.linkedin.com/in/syed-shafin-ahmed/" target="_blank">
                    <ImLinkedin2 size={24} className="text-primary"/>
                  </Link>
                  <Link href="https://discord.com/users/1440245018341277756" target="_blank">
                    <SiDiscord size={24} className="text-primary"/>
                  </Link>
                </div>
              </nav>
            </footer>
          </div>
      </div>
    </div>  
  );
};

export default Footer;