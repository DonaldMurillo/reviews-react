/*App.js*/
import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import MainPage from "./pages/index"
import TagsPage from "./pages/tags"
import NotFoundPage from "./pages/404"
import AdminLayout from "./Layouts/admin";
//import Tag from "./components/tag";

class App extends Component {
  render() {
    return (
      // <div>
      //   <Router>
      //   <Switch>
      //     <Route exact path="/" component={MainPage} />
      //     <Route exact path="/tags" component={TagsPage} />
      //     {/* <Route exact path="/users" component={UsersPage} /> */}
      //     <Route exact path="/404" component={NotFoundPage} />
      //     <Redirect to="/404" /> 
      //   </Switch>
      //   </Router>
      // </div>
      <AdminLayout></AdminLayout>
    );
  }
}

export default App;