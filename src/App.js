import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/">
          <p>Main Page</p>
        </Route>
      </Router>
    </div>
  );
}

export default App;
