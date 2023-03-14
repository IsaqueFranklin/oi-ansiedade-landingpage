import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

function Footer() {
    return (
        <div className="footer">
            <Container style={{marginBottom: '50px'}}>
            <div style={{marginTop: '50px', marginBottom: '20px', justifyContent:'center', alignItems: 'center'}}>
                <Row style={{justifyContent: 'center'}}>
                    <Col md='auto' xs>
                        <a href="https://www.instagram.com/horizon.labs/" target='_blank'>
                        <img style={{margin: '10px'}} className="pics icons" src="img/instagram.png" alt="instagram" />
                        </a>
                    </Col>

                    <Col md='auto' xs>
                        <a href="" target='_blank'>
                        <img style={{margin: '10px'}} className="pics icons" src="img/facebook.png" alt="facebook" />
                        </a>
                    </Col>

                    <Col md='auto' xs>
                        <a href="" target='_blank'>
                        <img style={{margin: '10px'}} className="pics icons" src="img/linkedin.png" alt="linkedin" />
                        </a>
                    </Col>

                    <Col md='auto' xs>
                        <a href="https://twitter.com/horizonlabsinc" target='_blank'>
                        <img style={{margin: '10px'}} className="pics icons" src="img/twitter.png" alt="twitter" />
                        </a>
                    </Col>
                </Row>
            </div>

                <Row style={{marginTop: '40px', marginBottom: '30px', justifyContent: 'center', textAlign: 'left'}}>
                    <Col md='auto' xs>
                        <p className="paragraph3">Redes sociais</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href="https://www.instagram.com/horizon.labs/"><small>Instagram</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href="https://twitter.com/horizonlabsinc"><small>Twitter</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>Linkedin</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%20Horizon%20Labs%2C%20eu%20quero%20contratar%20um%20pacote%20da%20Horizon%20Labs%20para%20minha%20empresa."><small>Whatsapp</small></a></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md='auto' xs>
                        <p className="paragraph3">Páginas</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href="/planos"><small>Pacotes</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href="/about"><small>Sobre</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href="/contato"><small>Contato</small></a></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md='auto' xs>
                        <p className="paragraph3">Conteúdo</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>YouTube</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>Podcast</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>Blog</small></a></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    
                    
                </Row>
                <br></br>
                <small>&copy; Horizon Labs 2021</small>
            </Container>
        </div>
    )
}

export default Footer;