const Hero = () => {
  return (
    <section className='flex flex-col mt-24 relative min-h-screen items-center m-auto w-3xl'>
      <div>
        <img src='' alt='' />
      </div>
      <div className='text-6xl font-bold grid place-items-center my-3'>
        <p className='text-primary-gradient1'>I do code and</p>
        <p className='text-primary-gradient1'>
          make content{' '}
          <span className='bg-linear-to-r from-primary-gradient1 to-primary-gradient2 bg-clip-text text-transparent'>
            about it!
          </span>
        </p>
      </div>
      <div className='my-3'>
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
