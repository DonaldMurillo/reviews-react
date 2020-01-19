/*index.jsx*/
import React from "react";
import Tag from "../components/tag.jsx"
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'
import {
    Col,
    Container,
    Row,
    Button
} from 'react-bootstrap'
//make the api fetch turn it into an array and map rendering an element

//Functional Component 
const TagsPage = () => {

    const [hasError, setErrors] = useState(false);
    const [tags, setTags] = useState([]);

    async function fetchData() {
        const res = await fetch("https://localhost:44374/api/tags/")
        res
            .json()
            .then(res => setTags(res))
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
                        <h2>Tags</h2>
                    </Col>
                    <Col>
                        <Button className="float-right" onClick={() => window.location = "/addtag"}>Add a New Tag</Button>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Tag Name</th>
                        <th>Description</th>
                        <th>Created on</th>
                    </tr>
                </thead>
                <tbody>
                    {tags.map((tag, index) => (
                        <tr>
                            <td>{tag.id}</td>
                            <td>{tag.name}</td>
                            <td>{tag.description}</td>
                            <td>{tag.createdDate}</td>

                        </tr>)
                    )}
                </tbody>
            </Table>

        </React.Fragment>
    );
};

export default TagsPage;