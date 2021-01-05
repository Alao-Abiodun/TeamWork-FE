// import logo from './logo.svg';
import './App.css';
import Layout from './hoc/layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './containers/auth/register';

function App() {
  return (
    <Router>
      <div className="app">
        <Layout>
          <Switch>
            <Route path="/register" component={Register} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
