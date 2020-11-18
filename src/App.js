import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <p>Main Page</p>
        </Route>
      </Router>
    </div>
  );
}

export default App;
