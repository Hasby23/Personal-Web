import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Project from './components/Project.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className='min-h-screen overflow-hidden space-y-12'>
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
