import React from 'react';
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Modules        from './components/Modules';
import Benefits       from './components/Benefits';
import Stats          from './components/Stats';
import TechStack      from './components/TechStack';
import CTASection     from './components/CTASection';
import Footer         from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Modules />
        <Benefits />
        <Stats />
        <TechStack />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
