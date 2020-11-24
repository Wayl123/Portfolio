import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import ProjectDetail from './components/Project/ProjectDetail'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/About">
          <About/>
        </Route>
        <Route exact path="/Project">
          <Project/>
        </Route>
        <Route path="/Project/:id" component={ProjectDetail}/>
        <Route exact path="/Contact">
          <Contact/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
