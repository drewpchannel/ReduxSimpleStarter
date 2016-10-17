import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDr-cAxhiDSQqlQfe5jGc-5UsQ0l6La5FE'

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'))
