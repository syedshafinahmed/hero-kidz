// import { fontBangla } from "@/app/layout";
// import Image from "next/image";
// import Link from "next/link";

import { fontBangla } from "@/app/layout";
import { ArrowRight, Check, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// const Banner = () => {
//   return (
//     <div className="max-w-7xl mx-auto">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-20">
//         <div className="space-y-6">
//           <h1 className={`text-6xl font-bold text-center md:text-left leading-14 tracking-wide ${fontBangla.className}`}>
//             প্রতিটি শিশুর জন্য একটি <br /> <span className="text-primary">উজ্জ্বল আগামী</span> গড়ার অঙ্গীকার
//             {/* শিশুর সম্ভাবনাকে বিকশিত করুন একটি সুন্দর ভবিষ্যতের জন্য */}
//           </h1>
//           <p className="text-lg text-center text-gray-600 md:text-left">
//             Empowering the next generation of heroes through fun and learning.
//           </p>
//           <Link href="/products"><button className="btn btn-primary btn-lg">Explore Products</button></Link>
//         </div>
//         <div>
//           <Image src="/assets/hero.png" width={600} height={200} alt="HeroKidz Banner" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;


const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 rounded-full bg-primary opacity-10" />
      <div className="pointer-events-none absolute -bottom-10 left-1/3 w-52 h-52 rounded-full bg-primary opacity-10 z-40" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">

        {/* Left */}
        <div>
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5 text-xs text-slate-500 font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            Now enrolling · 2026 batch
          </div>

          <h1 className={`text-4xl md:text-6xl font-bold leading-14 text-slate-900 mb-5 ${fontBangla.className}`}>
            প্রতিটি শিশুর জন্য একটি{" "}
            <span className="text-primary pb-0.5">
              উজ্জ্বল আগামী
            </span>{" "}
            গড়ার অঙ্গীকার
          </h1>

          <p className="text-base text-slate-500 leading-relaxed mb-8">
            Empowering the next generation of heroes through fun, curiosity, and meaningful learning experiences.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary btn hover:bg-primary text-white text-sm font-medium transition-colors"
            >
              Explore products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="inline-flex items-center gap-2 text-sm btn btn-primary btn-outline transition-colors">
              <Play className="w-4 h-4" />
              See how it works
            </button>
          </div>

          {/* Stats strip */}
          <div className="flex gap-8 mt-8 pt-6 border-t border-primary/40">
            {[
              { value: "12,000+", label: "happy kids" },
              { value: "4.9 ★",  label: "parent rating" },
              { value: "50+",    label: "activity kits" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-xl font-semibold text-slate-900">{s.value}</p>
                <p className="text-xs text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: product card */}
        <div className="relative flex items-center justify-center">
          <div className="w-80 rounded-2xl border border-slate-200 bg-white p-6 flex flex-col items-center gap-4 relative overflow-hidden">
            <div className="absolute top-0 inset-0 h-2 bg-primary" />
            <div className="w-53 h-53 mt-2 rounded-full bg-primary/10 flex items-center justify-center">
              <Image src="/assets/hero.png" width={200} height={200} alt="HeroKidz" className="object-contain" />
            </div>
            <p className="text-sm font-semibold text-slate-900 text-center">HeroKidz Activity Kit</p>
            <p className="text-xs text-slate-400 text-center -mt-2">Age 4–12 · Learn through play</p>
            <div className="flex gap-2 flex-wrap justify-center">
              {["Creative", "STEM", "Language"].map((tag) => (
                <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-primary/10 text-primary">{tag}</span>
              ))}
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-3 -right-3 bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-500 shadow-sm">
            🧡 430 parents loved this
          </div>
          <div className="absolute flex gap-0.5 items-center -bottom-3 -left-19 bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs shadow-sm">
            <span className="text-primary font-medium"><Check size={20} /></span> Ships in 2 days
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;