import { useState } from "react";
import axios from "axios";
import "./App.css";
import QuoteCard from "./Components/Quotecard";

const firstQuote = [
  {
    quote:
      "And this is the snack holder where I can put my beverage or, if you will, cupcake.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  },
];

function App() {
  
  const [simpsonQuotes, setsimpsonQuotes] = useState(firstQuote[0]);
  
  const getNewSimpsonQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes?count=num")
      .then((response) => response.data)
      .then((data) => {
        setsimpsonQuotes(...data);
      });
  };

  return (
    <div className="App">
      <h1>Task : Simpsons Quote</h1>
      <QuoteCard props={simpsonQuotes} />
      <button type="button" onClick={getNewSimpsonQuote}>
        Get new Quote
      </button>
    </div>
  );
}

export default App;
