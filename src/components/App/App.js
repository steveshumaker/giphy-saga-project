import React from 'react';

import { StoreProvider } from '../store/store.jsx';
import Input from '../Input/Input.jsx';

function App(props) {
  return (
    <StoreProvider>
      <div>
        <h1>Giphy Search!</h1>
        <Input />
      </div>
    </StoreProvider>
  );
}

export default App;
