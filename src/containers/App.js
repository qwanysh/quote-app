import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import QuoteList from './QuoteList/QuoteList';
import Navbar from '../components/Navbar/Navbar';
import {Pane} from 'evergreen-ui';
import QuoteCreate from './QuoteCreate/QuoteCreate';

const App = () => {
  return (
      <BrowserRouter>
        <Pane maxWidth={640} paddingX={20} marginX="auto">
          <Navbar/>
          <Switch>
            <Route path="/" exact render={props => (
                <QuoteList {...props}/>
            )}/>
            <Route path="/quotes/:categoryId" exact render={props => (
                <QuoteList {...props}/>
            )}/>
            <Route path="/add-quote" exact render={props => (
                <QuoteCreate {...props}/>
            )}/>
          </Switch>
        </Pane>
      </BrowserRouter>
  );
}

export default App;
