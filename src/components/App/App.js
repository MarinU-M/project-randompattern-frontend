import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import RandomPattern from "../RandomPattern/RandomPattern";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
// import { getPatterns } from "../../utils/api";

function App() {
  // const [items, setItems] = useState([]);

  const createRandomList = (array, num) => {
    let newArray = [];
    while (newArray.length < num && array.length > 0) {
      const randomIndex = Math.floor(Math.random() * array.length);
      newArray.push(array[randomIndex]);
      array.splice(randomIndex, 1);
    }
    return newArray;
  };

  // const getRandomPatterns = () => {
  //   getPatterns()
  //     .then((res) => {
  //       const { patterns } = res;
  //       setItems(patterns);
  //       const array = createRandomList(items, 3);
  //       console.log(array);
  //     })
  //     .catch(console.error);
  // };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main onRandom={createRandomList} />
          {/* onClick={getRandomPatterns} */}
        </Route>
        <Route path="/randompattern">
          <RandomPattern />
          {/* items={items} */}
        </Route>
      </Switch>

      <About />
      <Footer />
      {/* <Preloader /> */}
    </div>
  );
}

export default App;
