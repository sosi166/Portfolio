import React, { lazy, Suspense } from "react";

import Navbar from './components/Navbar.js';

const Portfolio = lazy(() => import('./components/Portfolio.js'));
const Contact = lazy(() => import('./components/Contact.js'));
const About = lazy(() => import('./components/About.js'));
const Footer = lazy(() => import('./components/Footer.js'));
const Particle = lazy(() => import('./components/Particle.js'));

function App() {

  return (
      <>
          <Navbar />
          <Suspense>
              <Portfolio />
              <About />
              <Contact />
              <Footer />
              <Particle />
          </Suspense> 
    </>
  );
}
export default App;
