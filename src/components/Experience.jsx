import reactLogo from '../assets/react.svg';
import pthonLogo from '../assets/python.svg';
import tailwindLogo from '../assets/tailwind.svg';

const Experience = () => {
  return (
    <section className='flex flex-col items-center px-4 mx-auto max-w-3xl space-y-8'>
      <div>
        <p className='font-semibold text-xl text-center text-secondary-text'>
          EXPERIENCE WITH
        </p>
      </div>
      <div className='flex flex-row space-x-15 text-secondary-text'>
        <img className='h-10.5 w-10.5' src={reactLogo} alt='reactjs' />
        <img className='h-10.5 w-10.5' src={pthonLogo} alt='python' />
        <img className='h-10.5 w-10.5' src={tailwindLogo} alt='tailwindcss' />
      </div>
    </section>
  );
};

export default Experience;
