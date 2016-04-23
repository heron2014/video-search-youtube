import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import API_KEY from './components/keys';

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
