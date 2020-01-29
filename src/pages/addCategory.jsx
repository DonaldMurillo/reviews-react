/*index.jsx*/
import React from "react";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import { Row, Col, Button, Container } from 'react-bootstrap'
import { Redirect, Link } from "react-router-dom"

//make the api fetch turn it into an array and map rendering an element

//Functional Component 
const AddCategoryPage = (props) => {
    const formData = {
        "name": "",
        "description": "",
        "type": "",
        "adminsId": null,
        "admin": null,
        "createdDate": "",
        "updatedDate": "",
        "isActive": null
    };
    const today = new Date();
    const [toCategories, setToCategories] = useState(false);
    const [isPosting, setPosting] = useState(false);
    const [isPosted, setIsPosted] = useState(false);
    const [form, setForm] = useState(formData);
    const [hasError, setErrors] = useState(false);

    async function postData() {
        setPosting(true);
        const res = await fetch("https://localhost:44374/api/categories/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form),
            credentials: "same-origin"
        })
        console.log(res);
        setPosting(false);
        //setToTags(true)
        res
            .json()
            .catch(err => setErrors(err));
        
    }

    function handleOnClick() {
        handleSubmit();
    }

    function handleSubmit() {

        if (form.name !== "" && isPosted === false) {
            console.log(JSON.stringify(form));
            form.adminsId = 1;
            form.createdDate = today.toISOString();
            form.updatedDate = today.toISOString();
            postData();
            setIsPosted(true);
            setToCategories(true)
        }

    }

    function handlePosting(){
        alert("Adding your new Category");
        setTimeout(function(){}, 3000);
    }

    return (
        
        <React.Fragment>
            {isPosting ? () => setTimeout(function(){alert("posetd")}, 3000): null }
            {toCategories ? <Redirect to="/categories" /> : null}
            <br></br>
                <h2>Add a new Category</h2> 
            <br></br>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="name" >
                    <Form.Label column sm={2}>
                        Name
    </Form.Label>
                    <Col sm={10}>
                        <Form.Control placeholder="Name" onChange={(input) => form.name = input.target.value }/>
                        {/* <Form.Control placeholder="Name" onChange={input => setForm({ 'name': input.target.value })} /> */}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="description">
                    <Form.Label column sm={2}>
                        Description
    </Form.Label>
                    <Col sm={10}>
                        <Form.Control placeholder="Description" onChange={(des) => form.description = des.target.value} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="Type">
                    <Form.Label column sm={2}>
                        Scale
    </Form.Label>
                    <Col sm={10}>
                        <Form.Control placeholder="Type" onChange={(sca) => form.type = sca.target.value} />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row} onChange={(isa) => form.isActive = (isa.target.id === 'true')}>
                        <Form.Label as="legend" column sm={2}>
                            Status
      </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Active"
                                name="isActive"
                                id="true"
                            />
                            <Form.Check
                                type="radio"
                                label="Inactive"
                                name="isActive"
                                id="false"
                            />
                        </Col>
                    </Form.Group >
                </fieldset>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" onClick={handleOnClick} >Create!</Button>
                    </Col>
                </Form.Group>
            </Form>
        </React.Fragment>
    );
};

export default AddCategoryPage;