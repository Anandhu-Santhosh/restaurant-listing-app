import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
function Restreview({review}) {
    const [open, setOpen] = useState(false);

  return (
    
review.map(item=>(   
     <Card style={{  float:'right' }} className='border m-4'>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
        <Card.Text>Rating : {item.rating}</Card.Text>
        <Button
        className='btn btn-dark'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Comments
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <Card.Text>
            {item.comments}
        </Card.Text>
        </div>
      </Collapse>
      </Card.Body>
    </Card>))



  )
}

export default Restreview