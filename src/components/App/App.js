import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
// import Home from '../Home/Home.jsx';
// import Favorites from '../Favorites/Favorites.jsx';
// import Search from '../Search/Search.jsx';

import { StoreProvider } from '../store/store.jsx';
import Input from '../Input/Input.jsx';

function App(props) {
  const fetchGif = () => {
    fetch(`/api/gifs`)
      .then((response) => {
        console.log("fetching...");
        const gif = response.json();
        console.log('CLIENT GIF DATA ----> ',gif);
        return gif;
        // console.log("GIF DATA ----> ", response);
      })
      .then((data) => {
        console.log('CLIENT DATA --> ', data.data);
      });
  };

  return (
    <StoreProvider>
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
        <Route exact path="/">
          <Input />
        </Route>
        <Route exact path="/favorites">
          {/* <Favorites /> */}
        </Route>
        <Route exact path="/search">
          {/* <Search /> */}
        </Route>
      </Router>
      <h1>Giphy Search!</h1>
      <button onClick={fetchGif}>Fetch Gif</button>
    </div>
  </StoreProvider>
  );
}

export default App;

