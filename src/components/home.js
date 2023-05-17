import React from 'react'
import { Container, Row, Col, Card, ListGroup, Carousel } from 'react-bootstrap'
import {Helmet} from "react-helmet";

const seo = {
    title: 'Oi Ansiedade',
    description: 'Do plebeu ao rei, essa é a Quixote Club, uma comunidade que vai te ensinar desde mentalidade e livros grandiosos até como fazer dinheiro do absoluto zero com a internet sendo jovem e perdido na vida.',
    url: '',
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
}


function Home() {
    return (
        <>
        <Helmet
            title={`${seo.title}`}
            meta={[
                { name: 'description', property: 'og:description', content: seo.description },
                { property: 'og:title', content: `${seo.title}` },
                { property: 'og:url', content: seo.url },
                { property: 'og:image', content: seo.image },
                { property: 'og:image:type', content: 'image/jpeg' },
                { property: 'twitter:image:src', content: seo.image },
                { property: 'twitter:title', content: `${seo.title}` },
                { property: 'twitter:description', content: seo.description },
        ]} />

        <div className="about">
            <Container>
                <Row style={{marginBottom: '50px', marginTop: '50px', alignItems: 'center'}} className="">
                    <Col>
                        <img className="pics pointo" style={{alignItems: 'center'}} src="../img/wom.jpg" alt="lâmpada" />
                    </Col>
                    <Col sm>
                        <h2 className="titulo" style={{marginTop: '20px', color: "#fff"}}>Oi Ansiedade</h2>
                        <p className="paragraph3" style={{marginTop: '20px', marginBottom: '0px', textAlign: 'left', color: '#fff'}}>O programa Oi Ansiedade é uma jornada que irá desenvolver em você uma
consciência de que é possível entender onde estão os gatilhos que disparam
sua ansiedade.</p>
                        <br></br>
                        <a href="https://pay.kiwify.com.br/G5brJ6a"><button style={{margin: '12px'}}>Assinar agora</button></a>
                    </Col>
                </Row>
            </Container>      
        </div>

        <div className="pitch" id="#pitch">
            <Container style={{alignItems: 'center'}}>
                <Row style={{marginTop: '50px', marginBottom: '30px'}} className="">
                    <Col>
                    <br></br>
                    <h4 className="titulo3" style={{}} align="left">A jornada do programa que vai tratar sua ansiedade</h4>
                    <br></br>
                    <p className="paragraph3">O programa Oi Ansiedade busca ensinar a todos a lidar com os
transtornos de ansiedade oferecendo a eles ferramentas através de técnicas
validadas pela ciência e pela prática clínica.</p>
                    <p className="paragraph3">Mesmo que a ansiedade seja algo comum em todos os
seres humanos, os “transtornos de ansiedade” que são a manifestação
descontrolada desta ansiedade não tem sido benéficos para quem é por eles
dominado.</p>
                    <p className="paragraph3"></p>
                    <br></br>
                    <a href="https://pay.kiwify.com.br/G5brJ6a"><button className="buttonSale2" style={{marginTop: '10px', marginBottom: '30px'}}>Quero fazer parte</button></a>
                    </Col>
                    <Col>
                        <img className="pics pointo" style={{alignItems: 'center'}} src="../img/nature5.jpg" alt="lâmpada" />
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="services" id="#services">
            <Container style={{marginTop: '70px', marginBottom: '70px'}}>
                <h2 className="titulo1" style={{marginBottom: '30px'}}>O que você receberá e tratará durante o percuso:</h2>
                <br></br>
                <Row style={{alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/7.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Aprender como lidar com ansieade no dia-a-dia</p>
                    </Col>
                        
                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/8.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Técnicas para controle de ansiedade</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/9.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Aulas práticas e precisas para te ajudar a vencer a ansiedade</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/10.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Ebooks com passo a passo das técnicas do psicanalista Márcio Azevedo</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/11.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Um acompanhando ao vivo semanal com o psicanalista Márcio Azevedo</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/12.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Diversos outros conteúdos voltados ao controle e domínio da ansiedade</p>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <h1 className='titulo1'>Tudo isso por apenas R$29,90 por mês.</h1>
                <br></br>
                <a href="https://pay.kiwify.com.br/G5brJ6a"><button className="buttonSale2">Quero fazer parte</button></a>
            </Container>
        </div>
        
        <div className="about" id="#about">
            <Container>
                <Row style={{marginBottom: '100px', marginTop: '50px', alignItems: 'center', color: '#fff'}}>
                    <Col>
                        <img className="pics pointo pointo2" style={{alignItems: 'center'}} src="../img/mar.jpeg" alt="Márcio" />
                    </Col>
                    <Col>
                        <h2 className="titulo1" style={{marginTop: '20px', color: '#fff'}}>Quem é Márcio Azevedo?</h2>
                        <p className="paragraph3" style={{marginTop: '20px', marginBottom: '0px', textAlign: 'left', color: '#fff'}}>Teólogo formado pela Umesp (Universidade Metodista de
São Paulo), tendo pós graduação em neuro-psicopedagogia clínica e
Psicanalista pelo Centro de Estudos em Terapias e Psicanalise (CETEP –
Campinas, SP), Especialista em Transtornos de Ansiedade. Tendo mais 20
anos de experiência no tratamento e cuidado do ser humano.</p>
                        <br></br>
                        <a href="/about"><button style={{margin: '12px'}}>Saber mais</button></a>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="frontbanne">
        <Carousel style={{height: "90vh", width: "100%", marginBottom: '50px'}}>
                        <Carousel.Item>
                            <img
                            className="bob2"
                            src="../img/nature6.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <div className="frontWords2">
                                <h1 className="titulo" style={{color: "#fff", fontSize: '60px', alignItems: 'center'}}>O deserto</h1>
                                <br></br>
                                <a href="https://pay.kiwify.com.br/G5brJ6a"><button className="buttonSale3">Fazer parte</button></a>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="bob2"
                            src="../img/nature3.jpg"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <div className="frontWords2">
                                <h1 className="titulo" style={{color: "#fff", fontSize: '60px', alignItems: 'center'}}>A jornada</h1>
                                <br></br>
                                <a href="https://pay.kiwify.com.br/G5brJ6a"><button className="buttonSale3">Fazer parte</button></a>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="bob2"
                            src="../img/nature4.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <div className="frontWords2">
                                <h1 className="titulo" style={{color: "#fff", fontSize: '60px', alignItems: 'center'}}>A realização</h1>
                                <br></br>
                                <a href="https://pay.kiwify.com.br/G5brJ6a"><button className="buttonSale3">Fazer parte</button></a>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>           
        </div>      

        <div className="pitch" id="#pitch">
            <Container style={{alignItems: 'center'}}>
                <Row style={{marginTop: '150px', marginBottom: '30px'}} className="">
                    <Col>
                    <br></br>
                    <h4 className="titulo3" style={{}} align="left">A jornada do programa que vai tratar sua ansiedade</h4>
                    <br></br>
                    <p className="paragraph3">O programa Oi Ansiedade é uma jornada que irá desenvolver na pessoa uma
consciência de que é possível entender onde estão os gatilhos que disparam
sua ansiedade.</p>
                    <p className="paragraph3">Este programa é formatado em uma jornada, um caminho em que seu usuário
terá atividades práticas, vídeos explicativos sobre técnicas para lidar com ansiedade além da meditação para serem realizadas ao
longo do dia e um encontro online semanal com o Psicanalista Marcio Azevedo a fim de
receber atenção especializada.</p>
                    <p className="paragraph3">Neste encontro online toda semana seus participantes receberam aulas sobre cada transtorno de Ansiedade.</p>
                    <br></br>
                    <a href="https://pay.kiwify.com.br/G5brJ6a"><button className="buttonSale2" style={{marginTop: '10px', marginBottom: '30px'}}>Quero fazer parte</button></a>
                    </Col>
                    <Col>
                        <img className="pics pointo" style={{alignItems: 'center'}} src="../img/caminho.jpg" alt="lâmpada" />
                    </Col>
                </Row>
            </Container>
        </div>     

        <div className="packages" id="#packages">
            <Container style={{marginBottom: '90px'}}>
                <Row style={{marginTop: '50px', marginBottom: '40px'}} className="mar">
                    <Col sm>
                        <h2 className="titulo1" style={{}}>Ainda tem dúvidas sobre o programa Oi Ansiedade?</h2>
                        <br></br>
                        <br></br>
                        <p className="paragraph3" style={{textAlign: 'center', margin: '12px'}}>Entre em contato conosco para tirar todas as suas dúvidas e entender melhor ainda como funciona o programa Oi Ansiedade e todos os benefícios que você pode ter ao fazer desse jornada contra a ansieade.</p>
                        <br></br>
                    </Col>
                </Row>
                <a href="https://wa.me/5532984829872?text=Ol%C3%A1%2C+M%C3%A1rcio%21+Gostaria+de+saber+mais+sobre+o+programa+Oi+Ansiedade%2C+poderia+me+enviar+um+%C3%A1udio+explicando+melhor%3F"><button className="buttonSale2" style={{margin: '12px'}}>Conversar conosco</button></a>
            </Container>
        </div>
        </>
    )
}

export default Home;