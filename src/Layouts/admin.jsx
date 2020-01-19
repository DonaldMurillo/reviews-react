import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
//import { Container } from 'react-bootstrap/lib/Tab';
import { Row, Col, Container } from 'react-bootstrap';
import AdminRouter from '../Router/routes';
import SideNav from '../components/sidenav';
import Navi from '../components/header';


const AdminLayout =(props) =>{

return (
    <Container>
        <Row className="justify-content-md-center">
            <Col lg md sm xl xs="12">
               <Navi></Navi>
            </Col>
        </Row>
        <Row>  
            <Col lg="auto" md="auto" sm="auto" xl="auto" xs="auto">
                
                <SideNav></SideNav>
            </Col>
            <Col lg md sm xl xs="9"> 
                <AdminRouter></AdminRouter>
            </Col>
        </Row>
    </Container>
    )
}

    // <p>{props.name}</p>
    // <p>{props.description}</p>
    // </div>


export default AdminLayout;