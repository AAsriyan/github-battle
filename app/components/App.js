const React = require('react');
import Popular from './Popular';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path='/popular' component={Popular} />
        </div>
      </Router>
    );
  }
}

export default App;