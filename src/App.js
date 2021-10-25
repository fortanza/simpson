import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import QuoteCard from './QuoteCard';

function App() {

  const [simpsonQuotes, setsimpsonQuotes] = useState([]);

  useEffect(() => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=30')
      .then(({ data }) => {
        setsimpsonQuotes(data);
      })
      .catch(() => {
        console.error('Plz fix your call, or set up your internet');
      });
  }, []);

  return (
    <div className="App">
     <h1>Task : Simpsons Quote</h1>
   
     {simpsonQuotes.map((quote, index) => (
        <QuoteCard key={index} {...quote} />
      ))}
     <button type="button">Get new Quote</button>
    </div>
  );
}

export default App;
