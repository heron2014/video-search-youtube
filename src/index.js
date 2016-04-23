import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBgNHbq_fOByrSIXQCI3NJC3N9sSZls4g8';
// Create a new component , which produece some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated html and put this in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
