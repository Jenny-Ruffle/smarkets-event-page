import React from 'react';
import { RendererProvider } from 'react-fela'
import { createRenderer } from 'fela'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import ListingPage from './pages/ListingPage'
import EventPage from './pages/EventPage'

const renderer = createRenderer()

function App() {
  return (
    <RendererProvider renderer={renderer}>
      <Router>
        <Route exact path="/" component={ListingPage} />
        <Route exact path="/:id" component={EventPage} />
      </Router>
    </RendererProvider>
  );
}

export default App;
