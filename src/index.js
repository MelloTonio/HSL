import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import Form from './Components/Form/Form'
import Check from './Components/Check/Check'
import Confirm from './Components/Confirmar/Confirm'
import NPS from './Components/NPS/NPS'
import Temp from './Components/Temp/Temp'

// const [state, setState] = useState(false);

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Switch>
        {/*All Application Routes*/}
        <Route path="/Form" component={Form} exact />
        <Route path="/Check" component={Check} exact />
        <Route path="/Confirmacao" component={Confirm} exact />
        <Route path="/Avalie" component={NPS} exact />
        <Route path="/Temp" component={Temp} exact />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root'),
);