import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Calendar from './views/calendar'
import Messaging from './views/messaging'
import Home from './views/home'
import Costsplitting from './views/costsplitting'
import Chores from './views/chores'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Calendar} exact path="/calendar" />
        <Route component={Messaging} exact path="/messaging" />
        <Route component={Home} exact path="/" />
        <Route component={Costsplitting} exact path="/costsplitting" />
        <Route component={Chores} exact path="/chores" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
