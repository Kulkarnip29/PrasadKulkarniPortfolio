import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, About, Experience, Trainings, Projects, Skills, Education, Contact, Resume, Footer } from './components';
// import Trainings from './components/Trainings';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Trainings />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Resume />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;