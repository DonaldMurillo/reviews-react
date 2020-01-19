/*index.jsx*/
import React from "react";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'
//make the api fetch turn it into an array and map rendering an element

//Functional Component 
const ProductsPage = () => {

    const [hasError, setErrors] = useState(false);
    const [products, setProducts] = useState([]);

    async function fetchData() {
        const res = await fetch("https://localhost:44374/api/products/")
        res
            .json()
            .then(res => setProducts(res))
            .catch(hasError => setErrors(hasError));
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <React.Fragment>
            <br></br>
            <h2>Products</h2>
            <br></br>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Tag Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>CategoryID</th>
                        <th>Created on</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.name}</td> 
                            <td>{product.brand}</td>
                            <td>${product.price}</td>
                            <td>{product.categoryId}</td>
                            <td>{product.createdDate}</td>
                            
                        </tr>)
                    )}
                </tbody>
            </Table>

        </React.Fragment>
    );
};

export default ProductsPage;