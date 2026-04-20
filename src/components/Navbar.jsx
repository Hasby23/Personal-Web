import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full z-50 transition-all duration-300 bg-zinc-900 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-center h-14 space-x-6'>
          <a href='#Navbar' className='text-gray-200 hover:text-orange-300'>
            Home
          </a>
          <a href='#Project' className='text-gray-200 hover:text-orange-300'>
            Project
          </a>
          <a href='#Experience' className='text-gray-200 hover:text-orange-300'>
            Experience
          </a>
          <button className='md:hidden'>
            <Menu className='w-5 h-5' />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
