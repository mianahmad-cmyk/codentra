import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAVIGATION } from '../../utils/constants';
import Logo from '../shared/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.dropdown-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3">
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <Link to="/" className="z-50">
          <Logo white={false} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAVIGATION.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : 'text-gray-700'} hover:text-blue-600`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" />
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="dropdown-menu absolute right-4 top-14 bg-white rounded-xl shadow-lg py-4 px-6 flex flex-col items-start space-y-4 z-40 w-52 transition-all">
            {NAVIGATION.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-blue-600 w-full text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
