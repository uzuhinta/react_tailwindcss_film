import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes/Routes';

function App() {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
