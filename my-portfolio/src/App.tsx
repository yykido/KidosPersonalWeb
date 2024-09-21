import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/style.css';
import Header from './components/Header';
import Home from './components/Home';
import MyStory from './components/MyStory';
import MyWorkflow from './components/MyWorkflow';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import MySkill from './components/MySkill';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<MyStory />} />
          <Route path="/workflow" element={<MyWorkflow />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Education />} />
          <Route path="/skills" element={<MySkill />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

{/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.tsx</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */}
