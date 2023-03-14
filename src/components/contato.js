import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Helmet} from "react-helmet";


const seo = {
    title: 'Contato Horizon Labs',
    description: 'Somos um laboratório de ideias tecnológicas que programa softwares e sistemas para as necessidades dos nossos clientes.',
    url: '',
    image: 'img/horizon.png',
}


function Contato() {
    return (
        <>
        <Helmet
            title={`${seo.title}`}
            meta={[
                { name: 'description', property: 'og:description', content: seo.description },
                { property: 'og:title', content: `${seo.title} | Code Mochi` },
                { property: 'og:url', content: seo.url },
                { property: 'og:image', content: seo.image },
                { property: 'og:image:type', content: 'image/jpeg' },
                { property: 'twitter:image:src', content: seo.image },
                { property: 'twitter:title', content: `${seo.title} | Code Mochi` },
                { property: 'twitter:description', content: seo.description },
        ]} />
        <div className="contato">
            <Container style={{marginTop: '70px', marginBottom: '70px'}}>
                {/*<h1 className="pics" style={{fontSize: '70px'}}>📱</h1>
                <h2 className="titulo3" style={{marginTop: '20px'}}>Nossos contatos</h2>
                <br></br>
                <p className="paragraph3" style={{marginLeft: '50px', marginRight: '50px', marginTop: '20px'}}>Entre em contato com a Horizon Labs para negociar, pedir informçãoes e afins. Use uma das nossas redes sociais abaixo ou mande um email.</p>
                <br></br>
                <div style={{marginTop: '20px', marginBottom: '50px', justifyContent:'center', alignItems: 'center'}}>
                    <Row style={{justifyContent: 'center'}}>
                        <Col md='auto'>
                        <img style={{margin: '10px'}} className="pics icons" src="img/instagram.png" alt="instagram" />
                        </Col>

                        <Col md='auto'>
                        <img style={{margin: '10px'}} className="pics icons" src="img/facebook.png" alt="facebook" />
                        </Col>

                        <Col md='auto'>
                        <img style={{margin: '10px'}} className="pics icons" src="img/linkedin.png" alt="linkedin" />
                        </Col>

                        <Col md='auto'>
                        <img style={{margin: '10px'}} className="pics icons" src="img/twitter.png" alt="twitter" />
                        </Col>
                    </Row>
                </div>*/}

                        <Row>
                            <Col sm style={{marginTop: '90px', marginRight: '80px', alignItems: 'left', justifyContent: 'left'}}>
                                <h2 className="titulo3" style={{}}>Nossos contatos</h2>
                                <br></br>
                                <p className="paragraph3">Entre em contato com a Horizon Labs para negociar, pedir informçãoes e afins. Use uma das nossas redes sociais abaixo ou mande um email.</p>
                                <br></br>
                                <div style={{marginTop: '20px', marginBottom: '50px', justifyContent:'center', alignItems: 'center'}}>
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

                                    <div style={{marginTop: '50px'}}>
                                        <p className="paragraph3">Você pode também enviar um whatsapp para a Horizon e nossa irá te atender.</p>
                                        <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%20Horizon%20Labs%2C%20eu%20quero%20contratar%20um%20pacote%20da%20Horizon%20Labs%20para%20minha%20empresa."><button className="buttonSale2" style={{margin: '12px'}}>Enviar whatsapp</button></a>
                                    </div>
                                </div>
                            </Col>

                            <Col md='auto' style={{marginTop: '70px'}}>
                                <img className="pics" src='img/app.png' style={{width: '400px', height: '400px'}} />
                            </Col>
                        </Row>
            </Container>
        </div>
        </>
    )
}

export default Contato
