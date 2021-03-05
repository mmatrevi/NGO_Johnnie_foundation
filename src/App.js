import Content from "./components/Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Content />
        <Switch>
          <Route path="/projects"></Route>
          <Route path="/aboutus"></Route>
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
