import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Project from './components/Project.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className='min-h-screen bg-zinc-950/97 text-white overflow-hidden'>
      <Navbar />
      <Hero />
      <Experience />
      <Project />
      <Education />
      <Footer />
    </div>
  );
};

export default App;
