import Footer from 'components/Footer';
import Header from 'components/Header';
import SearchBox from 'components/SearchBox';
import NotFound from 'components/NotFound';
import TypePage from 'pages/TypePage';
import HomePage from 'pages/HomePage';
import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MasterLayout from 'layouts/MasterLayout';
import DetailPage from 'pages/DetailPage';
import Routes from 'routes/Routes';

function App() {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
