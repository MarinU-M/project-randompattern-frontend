import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import RandomPattern from "../RandomPattern/RandomPattern";
import About from "../About/About";
import Footer from "../Footer/Footer";
import { getPatterns } from "../../utils/api";

function App() {
  getPatterns()
    .then((res) => console.log(res))
    .catch(console.error);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/randompattern">
          <RandomPattern />
        </Route>
      </Switch>

      <About id="About" />
      <Footer />
    </div>
  );
}

export default App;
