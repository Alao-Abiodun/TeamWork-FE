// import logo from './logo.svg';
import './App.css';
import Layout from './hoc/layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './containers/auth/Register';
import Login from './containers/auth/Login'

function App() {
  return (
    <Router>
      <div className="app">
        <Layout>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path='/login' component={Login} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
