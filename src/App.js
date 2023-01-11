import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar';
import {Banner}from './components/Banner';
import {Projects}from './components/Projects';
import {Footer}from './components/footer';
import { AboutMe } from './components/aboutMe';

function App() {
  return (
    <div className="App" id='home'>
      <Banner/>
      <NavBar/>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
