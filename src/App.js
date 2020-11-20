import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home/Home"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
