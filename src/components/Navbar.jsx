import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 py-4 w-full z-50 backdrop-blur-sm bg-transparent'>
      <nav className='flex items-center justify-between px-6 '>
        {/* Web Logo  */}
        <div className='px-4 py-3'>
          <a
            href='#'
            className='text-xl font-bold bg-linear-to-r from-primary-gradient1 to-primary-gradient2 bg-clip-text text-transparent'
          >
            Has_By
          </a>
        </div>

        {/* Navigation  */}
        <div className='hidden md:flex items-center rounded-full px-2 py-2 gap-2 bg-navbar'>
          <div>
            <a
              href='#'
              className='text-sm px-4 py-2 rounded-full text-muted-foreground hover:text-foregroud hover:bg-primary-gradient1'
            >
              Home
            </a>
            <a
              href='#Project'
              className='text-sm px-4 py-2 rounded-full text-muted-foreground hover:text-foregroud hover:bg-primary-gradient1'
            >
              Project
            </a>
            <a
              href='#Experience'
              className='text-sm px-4 py-2 rounded-full text-muted-foreground hover:text-foregroud hover:bg-primary-gradient1'
            >
              Experience
            </a>
          </div>
        </div>

        {/* Contact  */}
        <div className='hidden md:block'>
          <button className='px-4 py-2 rounded-full font-medium bg-orange-gradient1 cursor-pointer'>
            Contact Me
          </button>
        </div>

        {/* Hamburger menu  */}
        <button
          className='md:hidden px-4 py-3 cursor-pointer'
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden items-center px-2 py-2 bg-navbar'>
          <div className='mx-auto flex flex-col gap-4'>
            <a
              href='#'
              className='text-lg px-4 py-2 rounded-full text-muted-foreground hover:text-foregroud hover:bg-primary-gradient1'
            >
              Home
            </a>
            <a
              href='#Project'
              className='text-lg px-4 py-2 rounded-full text-muted-foreground hover:text-foregroud hover:bg-primary-gradient1'
            >
              Project
            </a>
            <a
              href='#Experience'
              className='text-lg px-4 py-2 rounded-full text-muted-foreground hover:text-foregroud hover:bg-primary-gradient1'
            >
              Experience
            </a>
            <button className='px-4 py-2 font-medium rounded-full bg-orange-gradient1 cursor-pointer'>
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
