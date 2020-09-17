import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Home from '~/pages/Home';
import Information from '~/pages/Information';

export default function Routes() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/information" component={Information} />
      </Switch>
    </AnimatePresence>
  );
}
