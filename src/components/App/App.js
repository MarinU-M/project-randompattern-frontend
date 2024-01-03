import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import RandomPattern from "../RandomPattern/RandomPattern";
import About from "../About/About";
import Footer from "../Footer/Footer";
// import Preloader from "../Preloader/Preloader";
import CardModal from "../CardModal/CardModal";
import { getPatterns } from "../../utils/api";

function App() {
  const [items, setItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const createRandomList = (array, num) => {
    let newArray = [];
    while (newArray.length < num && array.length > 0) {
      const randomIndex = Math.floor(Math.random() * array.length);
      newArray.push(array[randomIndex]);
      array.splice(randomIndex, 1);
    }
    return newArray;
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  // get pattern list
  useEffect(() => {
    getPatterns()
      .then((res) => {
        const { patterns } = res;
        setItems(patterns);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main onRandom={createRandomList} />
        </Route>
        <Route path="/randompattern">
          <RandomPattern
            onClick={handleSelectedCard}
            items={items}
            onRandom={createRandomList}
          />
        </Route>
      </Switch>

      <About />
      <Footer />
      {/* <Preloader /> */}
      {activeModal === "preview" && (
        <CardModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
