import { fontBangla } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-20">
        <div className="space-y-6">
          <h1 className={`text-6xl font-bold text-center md:text-left leading-14 tracking-wide ${fontBangla.className}`}>
            প্রতিটি শিশুর জন্য একটি <br /> <span className="text-primary">উজ্জ্বল আগামী</span> গড়ার অঙ্গীকার
            {/* শিশুর সম্ভাবনাকে বিকশিত করুন একটি সুন্দর ভবিষ্যতের জন্য */}
          </h1>
          <p className="text-lg text-center text-gray-600 md:text-left">
            Empowering the next generation of heroes through fun and learning.
          </p>
          <Link href="/products"><button className="btn btn-primary btn-lg">Explore Products</button></Link>
        </div>
        <div>
          <Image src="/assets/hero.png" width={600} height={200} alt="HeroKidz Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;