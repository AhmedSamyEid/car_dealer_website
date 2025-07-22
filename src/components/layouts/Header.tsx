"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";

interface NavItem {
  label: string;
  link?: string;
  submenu?: { name: string; path: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Home",
    submenu: [
      { name: "Home 2", path: "/home2" },
      { name: "Home 3", path: "/home3" },
      { name: "Home 4", path: "/home4" },
      { name: "Home 5", path: "/home5" },
      { name: "Home 6", path: "/home6" },
      { name: "Home 7", path: "/home7" },
      { name: "Home 8", path: "/home8" },
      { name: "Home 9", path: "/home9" },
    ],
  },
  {
    label: "Listings ",
    submenu: [
      { name: "About Us", path: "/about" },
      { name: "Our History", path: "/history" },
      { name: "Our Team Member", path: "/team" },
      { name: "Team Member Detail", path: "/team-detail" },
      { name: "Faq", path: "/faq" },
    ],
  },
  {
    label: "Blog ",
    submenu: [
      { name: "SERVICES", path: "/services" },
      { name: "Harvest Concepts", path: "/concepts" },
    ],
  },
  {
    label: "Pages ",
    submenu: [
      { name: "Portfolio Grid Col 2", path: "/portfolioCol" },
      { name: "Portfolio Grid Col 3", path: "/portfolio" },
      { name: "Portfolio Grid Col 4", path: "/PortfolioGridCol" },
    ],
  },
  { label: "About", link: "/about" },
  { label: "CONTACT US", link: "/contact" },
  { label: "Sign in", link: "/sign" },
];

const NavItemComponent: React.FC<{ item: NavItem }> = ({ item }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <li className="relative">
      {item.submenu ? (
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="hover:text-yellow-300 transition cursor-pointer">
          {item.label}
        </button>
      ) : (
        <Link href={item.link || "#"} className="hover:text-yellow-300 transition">
          {item.label}
        </Link>
      )}
      {dropdownOpen && item.submenu && (
        <ul className="absolute top-8 left-0 w-56 bg-white text-black shadow-lg rounded z-50">
          {item.submenu.map((sub, idx) => (
            <li key={idx} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link href={sub.path}>{sub.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const MobileMenu: React.FC<{ navItems: NavItem[]; onClose: () => void }> = ({ navItems }) => (
  <div className="md:hidden absolute top-20 left-0 w-full bg-black/80 text-white z-50 px-6 py-4 space-y-4">
    {navItems.map((item, index) => (
      <div key={index}>
        {item.submenu ? (
          <details>
            <summary className="cursor-pointer text-lg font-medium">{item.label}</summary>
            <ul className="ml-4 mt-2 space-y-1">
              {item.submenu.map((sub, idx) => (
                <li key={idx} className="hover:text-yellow-300">
                  <Link href={sub.path}>{sub.name}</Link>
                </li>
              ))}
            </ul>
          </details>
        ) : (
          <Link href={item.link || "#"} className="block text-lg font-medium hover:text-yellow-300">
            {item.label}
          </Link>
        )}
      </div>
    ))}
    <button className="bg-white text-black px-4 py-2 rounded-full w-full cursor-pointer">Submit Listing</button>
  </div>
);

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-transparent z-50">
      <nav className="relative z-10 flex justify-between items-center px-6 py-4">
        <div className="text-white font-bold text-xl flex items-center gap-2">
          <Link href={"/"}>
            <h1>BOXCARS</h1>
          </Link>
        </div>

        <ul className="hidden md:flex items-center space-x-6 text-white font-medium">
          {navItems.map((item, index) => (
            <NavItemComponent key={index} item={item} />
          ))}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-white text-sm"></div>
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300">Submit Listing</button>
          </div>
        </ul>

        <button className="md:hidden text-white text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </nav>

      {mobileMenuOpen && <MobileMenu navItems={navItems} onClose={() => setMobileMenuOpen(false)} />}
    </header>
  );
};

export default Header;
