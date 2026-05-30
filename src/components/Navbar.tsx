import React from 'react';
import type { NavItem } from '../config/navConfig';

interface NavbarProps {
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items = [] }) => {
  return (
    <nav className="sticky top-0 z-[1000] w-full bg-white border-b border-gray-200 py-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4">
        <a href="/" className="text-2xl font-bold text-gray-800 no-underline">
          Portfolio
        </a>
        <ul className="list-none flex gap-6 m-0 p-0">
          {items.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className="text-gray-600 no-underline transition-colors duration-200 hover:text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
