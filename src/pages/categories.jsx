/*index.jsx*/
import React from "react";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import {
    Col,
    Container,
    Row,
    Button
} from 'react-bootstrap'
//make the api fetch turn it into an array and map rendering an element

//Functional Component 
const CategoriesPage = () => {

    const [hasError, setErrors] = useState(false);
    const [categories, setCategories] = useState([]);

    async function fetchData() {
        const res = await fetch("https://localhost:44374/api/categories/")
        res
            .json()
            .then(res => setCategories(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <React.Fragment>
            <br></br>
            <Container>
                <Row>
                    <Col>
                        <h2>Categories</h2>
                    </Col>
                    <Col>
                        <Button className="float-right" onClick={() => window.location = "/categories/add"}>Add a New Category</Button>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Categories Name</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Created on</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                        <tr>
                            <td>{category.id}</td>
                            <td>{category.name}</td> 
                            <td>{category.description}</td>
                            <td>{category.type}</td>
                            <td>{category.createdDate}</td>
                            
                        </tr>)
                    )}
                </tbody>
            </Table>

        </React.Fragment>
    );
};

export default CategoriesPage;