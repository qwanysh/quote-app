import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import QuoteList from './QuoteList/QuoteList';
import Navbar from '../components/Navbar/Navbar';
import {Pane} from 'evergreen-ui';

const App = () => {
  return (
      <BrowserRouter>
        <Pane maxWidth={640} paddingX={20} marginX="auto">
          <Navbar/>
          <Switch>
            <Route path="/" component={QuoteList}/>
          </Switch>
        </Pane>
      </BrowserRouter>
  );
}

export default App;
