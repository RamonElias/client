import React from "react";
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './bootstrap.min.css';
import Mirror from './pages/Mirror';
import { cleanOutput } from './actions';

const Base = ({
  cleanOutput
}) => {

  return (
    <Router>
      <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Toolbox</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() =>
                    cleanOutput()
                  }
                  to="/"
                >Home</Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() =>
                    cleanOutput()
                  }
                  to="/mirror"
                >Mirror</Link>
              </li>

            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/mirror">
            <Mirror />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

const Home = () => {
  return (
    <div className="container">
      <h2>Please, click in the mirror link or in the navbar !</h2>

      <Link className="btn btn-info" to="/mirror">Mirror</Link>
    </div>
  );
}

const mapDispatch = {
  cleanOutput
};

export default connect(
  null,
  mapDispatch
)(Base);
