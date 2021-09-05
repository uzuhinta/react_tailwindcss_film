import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddEditPage from './AddEditPage';
import AllActor from './AllPage';
import NotFound from 'components/NotFound';

function Actor() {
  const match = useRouteMatch();
  console.log(match);
  return (
    <Switch>
      <Route exact path={match.url} component={AllActor} />
      <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:photoId`} component={AddEditPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Actor;
