import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './sass/base.scss';
import App from './pages/App';
import Calculator from './pages/Calculator';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound'
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
	    <nav>
	    	<ul>
		    	<li>
		    		<Link to="/">My To Do List</Link>
		      	</li>
		    	<li>
		    		<Link to="/calculator">Calculator</Link>
		      	</li>
		    	<li>
		    		<Link to="/contacts">Contacts</Link>
		      	</li>
	    	</ul>
	    </nav>
		<Switch>
        	<Route exact path="/" component={App} />
        	<Route path="/calculator" component={Calculator} />
        	<Route path="/contacts" component={Contacts} />
        	<Route component={NotFound} />
      </Switch>
  </Router>
)

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();