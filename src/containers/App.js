import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import Quotes from './Quotes/Quotes';
import Navbar from '../components/Navbar/Navbar';
import { Pane } from 'evergreen-ui';
import QuoteCreate from './QuoteCreate/QuoteCreate';
import QuoteEdit from './QuoteEdit/QuoteEdit';
import Page404 from '../components/Page404/Page404';

const App = () => {
  return (
    <BrowserRouter basename="/quote-app/">
      <Pane maxWidth={640} paddingX={20} marginX="auto">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Quotes} />
          <Route path="/quotes/:categoryId" exact component={Quotes} />
          <Route path="/add-quote" exact component={QuoteCreate} />
          <Route path="/quotes/:quoteId/edit" exact component={QuoteEdit} />
          <Route path="/404" exact component={Page404} />
          <Route path="/">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Pane>
    </BrowserRouter>
  );
};

export default App;
