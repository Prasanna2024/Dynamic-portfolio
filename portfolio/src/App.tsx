import './App.css';
import { Navbar } from './components/Navbar';
import '@mantine/core/styles.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Project from './components/Projects/Projects';

function App() {
  return (<>
    <div className='app'>
      <Navbar />
      <div id='home'><Home /></div>
      <div id='about'><About /></div>
      <div id='skills'><Skills /></div>
      <div id='project'><Project /></div>
      <div id='contact'><Contact /></div>
    </div>
  </>
  );
}

export default App;
