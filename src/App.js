import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Shape from "./containers/shape/components/shape";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Shape} />
      </Switch>
    </Router>
  );
};

export default App;
