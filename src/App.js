import Footer from 'components/Footer';
import Header from 'components/Header';
import SearchBox from 'components/SearchBox';
import NotFound from 'components/NotFound';
import TypePage from 'Pages/TypePage';
import HomePage from 'Pages/HomePage';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MasterLayout from 'layouts/MasterLayout';
import DetailPage from 'Pages/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MasterLayout>
            <HomePage />
          </MasterLayout>
        </Route>
        <Route path="/type/:type">
          <MasterLayout>
            <TypePage />
          </MasterLayout>
        </Route>
        <Route path="/detail/:film">
          <MasterLayout>
            <DetailPage />
          </MasterLayout>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
