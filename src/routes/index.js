import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Home from '~/pages/Home';
import Information from '~/pages/Information';

export default function Routes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path="/information/:slug">
          <Information />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}
