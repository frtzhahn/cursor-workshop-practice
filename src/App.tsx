import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Background />
      <div className="relative z-10">
        <Header />
        <main className="max-w-[740px] mx-auto px-5 md:px-10">
          <Hero />
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
