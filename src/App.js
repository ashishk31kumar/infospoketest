import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import FirstPage from "././components/auth/FirstPage";
import SecondPage from "././components/auth/SecondPage";
import StartPage from "./components/auth/StartPage";
import "./style/App.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className="App">
            <Route exact path="/FirstPage " component={FirstPage} />
            <Route exact path="/detail" component={SecondPage} />
            <Route exact path="/" component={StartPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
