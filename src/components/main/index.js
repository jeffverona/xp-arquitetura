import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Main = ({ views }) => (
  <main>
    <Switch>
      {
        views.map((view) => <Route exact key={view.path} path={view.path} component={view.component}/>)
      }
    </Switch>
  </main>
);

export default Main;
