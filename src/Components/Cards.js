import React from 'react';
import { render } from '@testing-library/react';
import { Container, Card, Button, Row } from 'react-bootstrap';


class Cards extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: 'auto'}}>
                <Container fluid={true}>

                    <Row className='justify-content-around'>


                    <Card style={{ width: '40rem' }}>
                        <Card.Header>Python</Card.Header>
                        <Card.Body>
                            <Card.Title>Website Blocker</Card.Title>
                            <Card.Text>This program will block websites during specific hours every day.</Card.Text>
                            <Button variant='info' href="https://github.com/csaoma/productivity" type="button">Github Repository</Button>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '40rem' }}>
                        <Card.Header>Python</Card.Header>
                        <Card.Body>
                            <Card.Title>Dictionary</Card.Title>
                            <Card.Text>Will list the defintions of a word that the user inputs.</Card.Text>
                            <Button variant='info' href="https://github.com/csaoma/dictionary" type="button">Github Repository</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '40rem' }}>
                        <Card.Header>Javascript</Card.Header>
                        <Card.Body>
                            <Card.Title>Portfolio</Card.Title>
                            <Card.Text>I used React and Bootstrap to create this web application.</Card.Text>
                            <Button variant='info' href="https://github.com/" type="button">Github Repository</Button>

                        </Card.Body>
                    </Card>


                    </Row>
                </Container>
                


            
            </div>
       
            
        )
    }




}

export default Cards;