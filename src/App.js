import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './scss/styles.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
