import React from 'react';
import { render } from '@testing-library/react';
import { Container, Card, Button, Row } from 'react-bootstrap';
import './Cards.css'

const Cards = (props) => {
        return(
            
            <div className='Cards'>
                



                    <Card >
                        <Card.Header>{props.header}</Card.Header>
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>{props.description}</Card.Text>
                            <Button variant='info' href={props.path} type="button">Github Repository</Button>

                        </Card.Body>
                    </Card>

                   
                
                


            
            </div>
       
            
        )
    }





export default Cards;