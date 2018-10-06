import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeView from './views/Home';
import OtherPageView from './views/OtherPage';

/**
 * Routes component for app routing.
 */
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/other-page" exact component={OtherPageView} />
      </Switch>
    );
  }
}

export default Routes;
