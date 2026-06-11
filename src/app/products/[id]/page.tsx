"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Star,
  StarHalf,
  ShoppingCart,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  PackageCheck,
  CreditCard,
} from "lucide-react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import type { Product } from "@/app/types/product";
import { fontBangla } from "@/lib/fonts";

// ── Skeleton ───────────────────────────────────────────────────────────────
function Skeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 animate-pulse">
      <div className="h-4 w-24 bg-slate-100 rounded mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="aspect-square bg-slate-100 rounded-2xl" />
        <div className="flex flex-col gap-4">
          <div className="h-3 w-20 bg-slate-100 rounded" />
          <div className="h-7 w-3/4 bg-slate-100 rounded" />
          <div className="h-4 w-1/3 bg-slate-100 rounded" />
          <div className="h-10 w-1/2 bg-slate-100 rounded" />
          <div className="h-12 bg-slate-100 rounded-xl mt-4" />
          <div className="h-12 bg-slate-100 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

// ── Stars ──────────────────────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => {
        if (i < full)
          return (
            <Star
              key={i}
              className="w-4 h-4 text-primary"
              fill="currentColor"
            />
          );
        if (i === full && half)
          return (
            <StarHalf
              key={i}
              className="w-4 h-4 text-primary"
              fill="currentColor"
            />
          );
        return (
          <Star
            key={i}
            className="w-4 h-4 text-slate-200"
            fill="currentColor"
          />
        );
      })}
    </div>
  );
}

// ── Q&A Item ───────────────────────────────────────────────────────────────
function QnaItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 py-4 text-left text-sm font-semibold text-slate-800 hover:text-primary transition-colors"
      >
        {q}
        {open ? (
          <ChevronUp className="w-4 h-4 shrink-0 text-slate-400" />
        ) : (
          <ChevronDown className="w-4 h-4 shrink-0 text-slate-400" />
        )}
      </button>
      {open && (
        <p className="pb-4 text-sm text-slate-500 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const id = params?.id as string;
    if (id === undefined) return;
    fetch(`/api/products?id=${id}`)
      .then((res) => {
        if (!res.ok) {
          setNotFound(true);
          setLoading(false);
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data && !data.error) setProduct(data);
        else setNotFound(true);
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [params?.id]);

  if (loading) return <Skeleton />;

  if (notFound || !product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
        <PackageCheck className="w-12 h-12 text-slate-300" />
        <p className="text-lg font-semibold text-slate-700">
          Product not found
        </p>
        <p className="text-sm text-slate-400">
          This item may have been removed or the link is incorrect.
        </p>
        <button
          onClick={() => router.push("/products")}
          className="btn btn-primary btn-sm mt-2"
        >
          Browse all products
        </button>
      </div>
    );
  }

  const discount = product.discount ?? 0;
  const discountedPrice =
    discount > 0
      ? Math.round(product.price * (1 - discount / 100))
      : product.price;

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    // wire up your cart logic here
  };

  return (
    <div className="min-h-screen bg-white mt-20">
      {/* ── Breadcrumb ── */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>

      {/* ── Hero Grid ── */}
      <section className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start">
        {/* Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          {discount > 0 && (
            <span className="absolute top-3 left-3 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
              {discount}% off
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5">
          {/* Bangla name */}
          <p
            className={`text-xl italic text-primary tracking-tight font-medium ${fontBangla.className}`}
          >
            {product.bangla}
          </p>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-snug">
            {product.title}
          </h1>

          {/* Rating row */}
          <div className="flex flex-col justify-center-center gap-2">
            <div className="flex gap-1 items-center">
              <Stars rating={product.ratings} />
              <span className="text-sm font-semibold text-slate-700">
                {product.ratings}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-sm text-yellow-600 bg-yellow-50 px-3 py-0.5 rounded-full">
                 {product.reviews} reviews
              </span>
              <span className="text-sm text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">
                 {product.sold} sold
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-slate-900">
              ৳{discountedPrice.toLocaleString()}
            </span>
            {discount > 0 && (
              <>
                <span className="text-base text-slate-400 line-through">
                  ৳{product.price.toLocaleString()}
                </span>
                <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-0.5 rounded-full">
                  Save ৳{(product.price - discountedPrice).toLocaleString()}
                </span>
              </>
            )}
          </div>

          {/* Highlights */}
          {product.info.length > 0 && (
            <ul className="flex flex-col gap-2">
              {product.info.map((point, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2 text-base text-slate-600 ${fontBangla.className}`}
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          )}

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                added
                  ? "bg-emerald-500 text-white"
                  : "bg-primary hover:bg-secondary text-white active:scale-[0.98]"
              }`}
            >
              {added ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Added to cart
                </>
              ) : (
                <>
                  <RiShoppingCart2Line className="w-4 h-4" />
                  Add to cart
                </>
              )}
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold border border-primary text-primary hover:bg-primary/5 transition-colors active:scale-[0.98]">
              <CreditCard className="w-4 h-4" />
              Buy now
            </button>
          </div>

          {/* YouTube */}
          {product.youtube && (
            <a
              href={product.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-red-500 hover:text-red-600 font-medium transition-colors"
            >
              <FaYoutube className="w-4 h-4" />
              Watch product demo
            </a>
          )}
        </div>
      </section>

      {/* ── Description + Q&A ── */}
      <section className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 mt-4">
        {/* Description */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
            About this product
          </h2>
          <p
            className={`text-xl text-slate-600 text-justify leading-relaxed ${fontBangla.className}`}
          >
            {product.description}
          </p>
        </div>

        {/* Q&A */}
        {product.qna.length > 0 && (
          <div>
            <h2 className="text-base font-bold text-slate-900 mb-1 pb-2 border-b border-slate-100">
              Frequently asked questions
            </h2>
            {product.qna.map((item, i) => (
              <QnaItem key={i} q={item.question} a={item.answer} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
