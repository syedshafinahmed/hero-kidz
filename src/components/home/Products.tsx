"use client";
import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";
import { SquareArrowOutUpRight, Star, StarHalf } from "lucide-react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { fontBangla } from "@/lib/fonts";

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const discount = product.discount ?? 0;
  const discountedPrice = discount > 0
    ? Math.round(product.price * (1 - discount / 100))
    : product.price;

    const stars = product.ratings;
    const fullStars = Math.floor(stars);
    const hasHalf = stars - fullStars >= 0.5;

  return (
    <Link href={`/products/${encodeURIComponent(product.title)}`}
      className="group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col hover:border-primary/40 transition-colors duration-200">

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount > 0 && (
          <span className="absolute top-2.5 left-2.5 bg-secondary text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
            {discount}% off
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className={`text-xs text-slate-400 line-clamp-1 ${fontBangla.className}`}>{product.bangla}</p>
        <p className="text-sm font-semibold text-slate-900 leading-snug line-clamp-1">
          {product.title}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }, (_, i) => {
            if (i < fullStars) {
              return <Star key={i} className="w-3 h-3 text-primary" fill="currentColor" />;
            }
            if (i === fullStars && hasHalf) {
              return <StarHalf key={i} className="w-3 h-3 text-primary" fill="currentColor" />;
            }
            return <Star key={i} className="w-3 h-3 text-slate-300" fill="none" />;
          })}
          </div>
          <span className="text-xs font-bold text-slate-400">
            {product.ratings} 
            {/* · {product.reviews} reviews */}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-base font-semibold text-slate-900">
            ৳{discountedPrice.toLocaleString()}
          </span>
          {discount > 0 && (
            <span className="text-xs text-slate-400 line-through">
              ৳{product.price.toLocaleString()}
            </span>
          )}
        </div>

        {/* Sold */}
        {/* <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
          <span className="text-xs text-slate-400">{product.sold} sold</span>
        </div> */}

        {/* CTA */}
        <div className="flex gap-2 mt-3">
          <button
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 sm:px-3 rounded-xl border border-primary text-primary text-[10px] sm:text-xs font-medium hover:bg-primary/5 transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            <SquareArrowOutUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            <span className="hidden sm:inline">View Details</span>
            <span className="sm:hidden">Details</span>
          </button>
          <button
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 sm:px-3 rounded-xl bg-primary text-white text-[10px] sm:text-xs font-medium hover:bg-secondary transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            <RiShoppingCart2Line className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            <span className="hidden sm:inline">Add to cart</span>
            <span className="sm:hidden">Cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our <span className="text-primary">Products</span></h2>
        <p className="text-slate-500 mt-2 text-sm">
          {products.length} learning kits for curious minds
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
