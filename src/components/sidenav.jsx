import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
//import { Container } from 'react-bootstrap/lib/Tab';
import { Row, Col, Container } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Button, DropdownButton, Dropdown } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
  } from "react-router-dom";
  
const SideNav =(props) =>{

return (

    <ButtonGroup vertical>
    <Button href="/">Home</Button>
    <Button href="/tags">Tags</Button>
    <Button href="/categories">Categories</Button>
    <Button href="products">Products</Button>
    <Button href="reviews">Reviews</Button>
    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
    </DropdownButton>
    </ButtonGroup>

    )
}

    // <p>{props.name}</p>
    // <p>{props.description}</p>
    // </div>


export default SideNav;