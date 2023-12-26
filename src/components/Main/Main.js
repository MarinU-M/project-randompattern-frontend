import "./Main.css";
import { Switch, Route } from "react-router-dom";

import PatternButton from "../PatternButton/PatternButton";
import RandomPattern from "../RandomPattern/RandomPattern";
import About from "../About/About";

function Main() {
  return (
    <main className="Main" id="Inspo">
      <Switch>
        <Route exact path="/">
          <PatternButton />
        </Route>
        <Route path="/randompattern">
          <RandomPattern />
        </Route>
      </Switch>

      <About />
    </main>
  );
}

export default Main;
