import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';
function Viewrest() {
    const urlParams = useParams()
    console.log(urlParams.id);

    const [restaurantlist, setRestaurantlist] = useState([])

    //to create a function for api call
    const getRestaurant = async () => {
        //async await
        await fetch('/restaurants.json')//asynchronous call
            .then((data) => data.json()
                .then((result) => setRestaurantlist(result.restaurants))
            )
    }

    console.log(restaurantlist);

    useEffect(() => {
        getRestaurant();
    }, [])

    const viewrest = restaurantlist.find(item => item.id == urlParams.id)
    console.log(viewrest);
    return (
        <div>
            {
                viewrest ? (
                    <Row>

                        <Col md={3}>
                            <Image src={viewrest.photograph} fluid style={{width:'500px',hight:'650px',padding:'20px'}}/>
                        </Col>
                        <Col md={7} className="m-4">
                        <h1>{viewrest.name}</h1>
                            <ListGroup >
                                <ListGroup.Item variant='dark'>Id : {viewrest.id}</ListGroup.Item>
                                <ListGroup.Item variant='dark'>Name : {viewrest.name}</ListGroup.Item>
                                <ListGroup.Item variant='dark'>Cuisine Type : {viewrest.cuisine_type}</ListGroup.Item>
                                <ListGroup.Item variant='dark'>Address : {viewrest.address}</ListGroup.Item>
                                <ListGroup.Item variant='dark'>Neighborhood : {viewrest.neighborhood}</ListGroup.Item>
                                {/* <ListGroup.Item variant='dark'>Operating Hours : </ListGroup.Item>
                                <ListGroup.Item variant='dark'>Reviews : </ListGroup.Item> */}
                            </ListGroup>
                            <Restop op={viewrest.operating_hours}/>
                            <Restreview review={viewrest.reviews}/>
                        </Col>

                    </Row>
                ) : 'null'

            }
        </div>
    )
}

export default Viewrest