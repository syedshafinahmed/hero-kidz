"use client";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";
import { RiShoppingCart2Line } from "react-icons/ri";

const Navbar = () => {
  const path = usePathname();
  const nav = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full px-1 md:px-0 bg-transparent absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link className={`${path.startsWith(item.href) && "text-primary font-medium"}`} href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <Logo />
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {nav.map((item) => (
                  <li key={item.href}>
                    <Link className={`${path.startsWith(item.href) && "text-primary font-medium"}`} href={item.href}>{item.name}</Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="navbar-end gap-4">
            <Link href='/cart' className="btn btn-primary btn-square">
              <RiShoppingCart2Line size={20}/>
            </Link>
            <Link href='/login' className="btn btn-primary btn-outline">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
