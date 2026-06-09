"use client";

import { useState, useMemo, useEffect } from "react";
import productsJson from "@/data/products.json";

type ProductType = typeof productsJson[0];
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { ProductCard } from "@/components/home/Products";

// Types 

type SortOption = "featured" | "price-asc" | "price-desc" | "rating" | "discount";

const SORT_LABELS: Record<SortOption, string> = {
  featured:    "Featured",
  "price-asc": "Price: Low to High",
  "price-desc":"Price: High to Low",
  rating:      "Top Rated",
  discount:    "Biggest Discount",
};

// Empty State 

const EmptyState = ({ query, onClear }: { query: string; onClear: () => void }) => (
  <div className="col-span-full flex flex-col items-center justify-center py-24 gap-4 text-center">
    <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
      <Search className="w-7 h-7 text-slate-400" />
    </div>
    <div>
      <p className="text-slate-700 font-semibold text-lg">No results for "{query}"</p>
      <p className="text-slate-400 text-sm mt-1">Try a different keyword or clear the search</p>
    </div>
    <button
      onClick={onClear}
      className="btn btn-outline btn-primary btn-sm gap-1.5"
    >
      <X className="w-3.5 h-3.5" /> Clear search
    </button>
  </div>
);

// Page 

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [query,  setQuery]  = useState("");
  const [sort,   setSort]   = useState<SortOption>("featured");
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = q
      ? products.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            (p.bangla ?? "").includes(q)
        )
      : [...products];

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => {
          const ap = a.discount ? Math.round(a.price * (1 - a.discount / 100)) : a.price;
          const bp = b.discount ? Math.round(b.price * (1 - b.discount / 100)) : b.price;
          return ap - bp;
        });
        break;
      case "price-desc":
        list.sort((a, b) => {
          const ap = a.discount ? Math.round(a.price * (1 - a.discount / 100)) : a.price;
          const bp = b.discount ? Math.round(b.price * (1 - b.discount / 100)) : b.price;
          return bp - ap;
        });
        break;
      case "rating":
        list.sort((a, b) => b.ratings - a.ratings);
        break;
      case "discount":
        list.sort((a, b) => (b.discount ?? 0) - (a.discount ?? 0));
        break;
      default:
        break; // featured = original order
    }

    return list;
  }, [query, sort, products]);

  return (
    <div className="min-h-screen">
      {/* Hero  */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto mt-20 px-4 pt-12 pb-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            Explore
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3">
            All <span className="text-primary">Products</span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-xl">
            {loading ? "..." : products.length} learning kits carefully crafted for curious minds — discover
            the perfect kit for your little explorer.
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">

          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Spacer */}
          <div className="flex-1 hidden sm:block" />

          {/* Result count */}
          <span className="text-sm text-slate-400 self-center shrink-0">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </span>

          {/* Sort dropdown */}
          <div className="relative shrink-0">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 hover:border-primary/40 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-slate-400" />
              {SORT_LABELS[sort]}
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${sortOpen ? "rotate-180" : ""}`} />
            </button>

            {sortOpen && (
              <>
                {/* backdrop */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setSortOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 z-20 bg-white border border-slate-200 rounded-lg shadow-lg py-1.5 w-52 overflow-hidden">
                  {(Object.keys(SORT_LABELS) as SortOption[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => { setSort(key); setSortOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        sort === key
                          ? "bg-primary/5 text-primary font-medium"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {SORT_LABELS[key]}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Active search badge */}
        {query && filtered.length > 0 && (
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-slate-500">Results for</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/8 text-primary text-xs font-medium rounded-full">
              {query}
              <button onClick={() => setQuery("")}>
                <X className="w-3 h-3" />
              </button>
            </span>
          </div>
        )}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? (
            Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col animate-pulse">
                <div className="aspect-square bg-slate-100" />
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <div className="h-3 bg-slate-100 rounded w-1/2" />
                  <div className="h-4 bg-slate-100 rounded w-3/4" />
                  <div className="h-3 bg-slate-100 rounded w-1/4" />
                  <div className="h-4 bg-slate-100 rounded w-1/3 mt-1" />
                  <div className="flex gap-2 mt-4">
                    <div className="flex-1 h-8 bg-slate-100 rounded-sm" />
                    <div className="flex-1 h-8 bg-slate-100 rounded-sm" />
                  </div>
                </div>
              </div>
            ))
          ) : filtered.length === 0 ? (
            <EmptyState query={query} onClear={() => setQuery("")} />
          ) : (
            filtered.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;