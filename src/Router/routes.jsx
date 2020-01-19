/*App.js*/
import React, { Component } from "react";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import MainPage from "../pages/index"
import TagsPage from "../pages/tags"
import CategoriesPage from "../pages/categories"
import NotFoundPage from "../pages/404"
import AddTagsPage from "../pages/addTag";
import ProductsPage from "../pages/products";

//import Tag from "./components/tag";

const AdminRouter =(props) =>{

    return (
      <div>
        <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/tags" component={TagsPage} />
          <Route exact path="/addtag" component={AddTagsPage} />
          <Route exact path="/categories" component={CategoriesPage} />
          <Route exact path="/products" component={ProductsPage} />
          {/* <Route exact path="/users" component={UsersPage} /> */}
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" /> 
        </Switch>
        </Router>
      </div>

    );
}

export default AdminRouter;