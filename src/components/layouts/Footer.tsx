// import Link from 'next/link';
// import Logo from './Logo';
// import { ImLinkedin2 } from 'react-icons/im';
// import { SiDiscord } from 'react-icons/si';
// import { TbBrandGithubFilled } from 'react-icons/tb';

// const Footer = () => {
//   return (
//     <div className="w-full relative">
//       <div className="max-w-7xl mx-auto">
//           {/* Dashed Top Right Fade Grid */}
//           <div className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: `
//             linear-gradient(
//               to right,
//               color-mix(in oklab, var(--color-primary) 50%, transparent) 0.5px,
//               transparent 1px
//             ),
//             linear-gradient(
//               to bottom,
//               color-mix(in oklab, var(--color-primary) 50%, transparent) 0.5px,
//               transparent 1px
//             )
//           `,
//             backgroundSize: "20px 20px",
//             backgroundPosition: "0 0, 0 0",
//             maskImage: `
//               repeating-linear-gradient(
//                 to right,
//                 black 0px,
//                 black 3px,
//                 transparent 3px,
//                 transparent 8px
//               ),
//               repeating-linear-gradient(
//                 to bottom,
//                 black 0px,
//                 black 3px,
//                 transparent 3px,
//                 transparent 8px
//               ),
//               radial-gradient(
//                 ellipse 80% 80% at 100% 0%,
//                 #000 50%,
//                 transparent 90%
//               )
//             `,
//             WebkitMaskImage: `
//               repeating-linear-gradient(
//                 to right,
//                 black 0px,
//                 black 3px,
//                 transparent 3px,
//                 transparent 8px
//               ),
//               repeating-linear-gradient(
//                 to bottom,
//                 black 0px,
//                 black 3px,
//                 transparent 3px,
//                 transparent 8px
//               ),
//               radial-gradient(
//                 ellipse 100% 100% at 100% 0%,
//                 #000 60%,
//                 transparent 100%
//               )
//             `,
//             maskComposite: "intersect",
//             WebkitMaskComposite: "source-in",
//           }}
//           />
//            {/* Content sits above the gradient */}
//           <div className="relative z-10">
//             <footer className="footer sm:footer-horizontal text-base-content py-10 px-2">
//               <nav>
//                 <h6 className="text-primary font-bold text-xl">Services</h6>
//                 <a className="link link-hover">Branding</a>
//                 <a className="link link-hover">Design</a>
//                 <a className="link link-hover">Marketing</a>
//                 <a className="link link-hover">Advertisement</a>
//               </nav>
//               <nav>
//                 <h6 className="text-primary font-bold text-xl">Company</h6>
//                 <a className="link link-hover">About us</a>
//                 <a className="link link-hover">Contact</a>
//                 <a className="link link-hover">Jobs</a>
//                 <a className="link link-hover">Press kit</a>
//               </nav>
//               <nav>
//                 <h6 className="text-primary font-bold text-xl">Legal</h6>
//                 <a className="link link-hover">Terms of use</a>
//                 <a className="link link-hover">Privacy policy</a>
//                 <a className="link link-hover">Cookie policy</a>
//               </nav>
//             </footer>

//             <footer className="footer border-base-300 border-t px-2 py-10">
//               <aside className="grid-flow-row items-center">
//                 <Logo />
//                 <div>
//                   <span>&copy; {new Date().getFullYear()} HeroKidz. All rights reserved.</span>
//                 </div>
//               </aside>
//               <nav className="md:place-self-center md:justify-self-end">
//                 <div className="grid grid-flow-col gap-4">
//                   <Link href="https://github.com/syedshafinahmed" target="_blank">
//                     <TbBrandGithubFilled size={24} className="text-primary"/>
//                   </Link>
//                   <Link href="https://www.linkedin.com/in/syed-shafin-ahmed/" target="_blank">
//                     <ImLinkedin2 size={24} className="text-primary"/>
//                   </Link>
//                   <Link href="https://discord.com/users/1440245018341277756" target="_blank">
//                     <SiDiscord size={24} className="text-primary"/>
//                   </Link>
//                 </div>
//               </nav>
//             </footer>
//           </div>
//       </div>
//     </div>  
//   );
// };

// export default Footer;






import Link from 'next/link';
import Logo from './Logo';
import { ImLinkedin2 } from 'react-icons/im';
import { SiDiscord } from 'react-icons/si';
import { TbBrandGithubFilled } from 'react-icons/tb';

const Footer = () => {
  return (
    <div className="w-full relative">
      <div className="max-w-7xl mx-auto px-4">

        {/* Dashed Top Right Fade Grid */}
        <div className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, color-mix(in oklab, var(--color-primary) 40%, transparent) 0.5px, transparent 1px),
              linear-gradient(to bottom, color-mix(in oklab, var(--color-primary) 40%, transparent) 0.5px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            maskImage: `
              repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
              radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
            `,
            WebkitMaskImage: `
              repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
              radial-gradient(ellipse 100% 100% at 100% 0%, #000 60%, transparent 100%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />

        {/* Content */}
        <div className="relative z-10 pt-16 pb-8">

          {/* Top section */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 pb-12">

            {/* Brand col */}
            <div className="space-y-4">
              <Logo />
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                Empowering the next generation of heroes through fun, curiosity, and meaningful learning experiences.
              </p>
            </div>

            {/* Links */}
            {[
              {
                heading: "Services",
                links: ["Branding", "Design", "Marketing", "Advertisement"],
              },
              {
                heading: "Company",
                links: ["About us", "Contact", "Jobs", "Press kit"],
              },
              {
                heading: "Legal",
                links: ["Terms of use", "Privacy policy", "Cookie policy"],
              },
            ].map(({ heading, links }) => (
              <nav key={heading} className="space-y-4">
                <h6 className="text-primary font-semibold text-sm uppercase tracking-widest">
                  {heading}
                </h6>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <a className="text-sm text-slate-500 hover:text-primary transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Bottom bar — mirrors banner stats strip */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:items-center justify-between">
            <span className="text-xs text-slate-400">
              &copy; {new Date().getFullYear()} HeroKidz. All rights reserved.
            </span>
            <div className="flex items-center gap-3">
              <Link href="https://github.com/syedshafinahmed" target="_blank"
                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <TbBrandGithubFilled size={16} className="text-primary" />
              </Link>
              <Link href="https://www.linkedin.com/in/syed-shafin-ahmed/" target="_blank"
                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <ImLinkedin2 size={16} className="text-primary" />
              </Link>
              <Link href="https://discord.com/users/1440245018341277756" target="_blank"
                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <SiDiscord size={16} className="text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;