import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

class Tag extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        
      };
    }
  
    componentDidMount() {
      fetch("https://localhost:44374/api/tags/" + this.props.id)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              name: result.name,
              description: result.description,
              scale: result.scale,
              id: result.id,
              adminsId: result.adminsId,
              createdDate: result.createdDate,
              updatedDate: result.updatedDate,
              isActive: result.isActive
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, name, description, adminsId, createdDate } = this.state;
      if (error) {
      return <div>Error: {error.message} </div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Created by {adminsId} on {createdDate}  </Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                    <Card.Link href="#">Edit</Card.Link>
                    <Card.Link href="#">View PRoducts</Card.Link>
                </Card.Body>
            </Card>
          
        );
      }
    }
  }

export default Tag;