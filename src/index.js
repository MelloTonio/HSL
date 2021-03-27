import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './index.css';

import Form from './Components/Form/Form'
import Check from './Components/Check/Check'

// const [state, setState] = useState(false);

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Switch>
        {/*All Application Routes*/}
        <Route path="/Form" component={Form} exact />
        <Route path="/Check" component={Check} exact />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root'),
);