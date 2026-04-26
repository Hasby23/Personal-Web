import avatarLogo from '../assets/Avatar.svg';

const Hero = () => {
  return (
    <section className='flex flex-col mt-32 items-center px-4 mx-auto max-w-3xl space-y-8'>
      <div>
        <img
          className='h-60 w-60 rounded-full bg-linear-to-r from-primary-gradient1 to-primary-gradient2'
          src={avatarLogo}
          alt='My picture'
        />
      </div>
      <div className='text-6xl font-bold grid place-items-center'>
        <p className='text-primary-gradient1'>I do code and</p>
        <p className='text-primary-gradient1'>
          make content{' '}
          <span className='bg-linear-to-r from-primary-gradient1 to-primary-gradient2 bg-clip-text text-transparent'>
            about it!
          </span>
        </p>
      </div>
      <div>
        <p className='text-lg text-center text-secondary-text'>
          I am a seasoned full-stack software engineer with over 8 years of
          professional experience, specializing in backend development. My
          expertise lies in crafting robust and scalable SaaS-based
          architectures on the Amazon AWS platform.
        </p>
      </div>
    </section>
  );
};

export default Hero;
