import React from "react";

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
    <div>
      <h1>Giphy Search!</h1>
      <button onClick={fetchGif}>Fetch Gif</button>
    </div>
  );
}

export default App;
