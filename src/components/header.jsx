import React from 'react';
import ReactDOM from 'react-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Navi = props => {
    // const [counter, setCounter] = React.useState(0)
    // React.useEffect(() => {console.log("HI THERE ", counter)}, [])
    return (  
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Admin Panel. Welcome "username"
            </Navbar.Brand>
        </Navbar>
        </>
    );
  };

export default Navi;