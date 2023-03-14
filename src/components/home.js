import React from 'react'
import { Container, Row, Col, Card, ListGroup, Carousel } from 'react-bootstrap'
import {Helmet} from "react-helmet";

const seo = {
    title: 'Horizon Labs',
    description: 'Somos um laboratório de ideias tecnológicas que programa softwares e sistemas para as necessidades dos nossos clientes.',
    url: '',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
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
                        <img className="pics pointo" style={{alignItems: 'center'}} src="../img/cover3.jpg" alt="lâmpada" />
                    </Col>
                    <Col sm>
                        <h2 className="titulo" style={{}}>Quixote Club</h2>
                        <p className="paragraph3" style={{marginTop: '20px', marginBottom: '0px', textAlign: 'left'}}>Do plebeu ao rei, essa é a Quixote Club, uma comunidade que vai te ensinar desde mentalidade e livros grandiosos até como fazer dinheiro do absoluto zero com a internet sendo jovem e perdido na vida.</p>
                        <br></br>
                        <a href="https://pay.kiwify.com.br/3c1iHxJ"><button style={{margin: '12px'}}>Assinar agora</button></a>
                    </Col>
                </Row>
            </Container>      
        </div>

        <div className="pitch" id="#pitch">
            <Container style={{alignItems: 'center'}}>
                <Row style={{marginTop: '120px', marginBottom: '30px'}} className="">
                    <Col>
                    <br></br>
                    <h4 className="titulo3" style={{}} align="left">Tenha acesso a conteúdos exclusivos para sair de plebeu e se tornar rei 👑</h4>
                    <br></br>
                    <p className="paragraph3">A Horizon Labs desenvolve sistemas, aplicativos e automações para a internet, criamos coisas do zero totalmente pensadas para a internet do futuro.</p>
                    <p className="paragraph3">Construimos softwares online e aplicativos para empresas e negócios, conseguimos melhorar sua produtividade e lucratividade com nossa tecnologia.</p>
                    <p className="paragraph3"></p>
                    <br></br>
                    <a href="https://pay.kiwify.com.br/3c1iHxJ"><button className="buttonSale2" style={{marginTop: '10px', marginBottom: '30px'}}>Assinar Quixote Club</button></a>
                    </Col>
                    <Col>
                        <img className="pics pointo" style={{alignItems: 'center'}} src="../img/cover.jpg" alt="lâmpada" />
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="services" id="#services">
            <Container style={{marginTop: '70px', marginBottom: '70px'}}>
                <h2 className="titulo1" style={{marginBottom: '30px'}}>Conteúdos Exclusivos da Quixote Club</h2>
                <br></br>
                <Row style={{alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/1.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Curso completo do 0 aos 5k/Mês com dropshipping</p>
                    </Col>
                        
                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/2.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Curso o grande plano para sair do zero e ganhar dinheiro online</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/3.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Lives toda semana para membros da comunidade</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/4.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Grupo de whatsapp e telegram exclusivo para membros.</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/5.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Lives toda semana para membros da comunidade</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/6.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Diversos outros cursos produzidos durante a validade da sua assinatura.</p>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <h1 className='titulo1'>Tudo isso por apenas R$29,90 por mês.</h1>
                <br></br>
                <a href="https://pay.kiwify.com.br/3c1iHxJ"><button className="buttonSale2">Assinar Quixote Club</button></a>
            </Container>
        </div>
        
        <div className="about" id="#about">
            <Container>
                <Row style={{marginBottom: '100px', marginTop: '50px', alignItems: 'center'}} className="">
                    <Col>
                        <img className="pics pointo" style={{alignItems: 'center'}} src="../img/cover9.jpg" alt="lâmpada" />
                    </Col>
                    <Col>
                        <h2 className="titulo1" style={{}}>Aprenda a criar valor a ganhar dinheiro na internet</h2>
                        <p className="paragraph3" style={{marginTop: '20px', marginBottom: '0px', textAlign: 'left'}}>Sem enrolação, sem falsas promessas, na Quixote Club nos ensinamos o que não ensinam em nenhum outro lugar: a realidade como ela é. Desenvolva habilidades e se torne um jovem empreendedor, faça parte do grupo de networking e conheça sócios.</p>
                        <br></br>
                        <a href="/about"><button className='buttonSale2' style={{margin: '12px'}}>Quixote Club</button></a>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="frontbanne">
        <Carousel style={{height: "90vh", width: "100%"}}>
                        <Carousel.Item>
                            <img
                            className="bob2"
                            src="../img/cover12.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <div className="frontWords2">
                                <h1 className="titulo">Networking</h1>
                                <h4 align="center" className="paragraph">Quixote Club Limited</h4>
                                <br></br>
                                <a href=""><button className="">Fazer parte</button></a>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="bob2"
                            src="../img/cover.jpg"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <div className="frontWords2">
                                <h1 className="titulo">Estilo de vida</h1>
                                <h4 align="center" className="paragraph">Quixote Club Limited</h4>
                                <br></br>
                                <a href=""><button className="">Fazer parte</button></a>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="bob2"
                            src="../img/cover13.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <div className="frontWords2">
                                <h1 className="titulo">Negócios & Dinheiro</h1>
                                <h4 align="center" className="paragraph">Quixote Club Limited</h4>
                                <br></br>
                                <a href=""><button className="">Fazer parte</button></a>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>           
        </div>           

        {/*<div className="pitch" id="#pitch">
            <Container style={{alignItems: 'center', textAlign: ''}}>
                <Row style={{marginTop: '100px', marginBottom: '100px'}} className="mar">
                    <Col sm>
                    <br></br>
                    <h4 className="titulo3" style={{}} align="left">Na Horizon Labs nós criamos o futuro da web 3.0</h4>
                    <br></br>
                    <p className="paragraph3">Aplicativos, sistemas e websites modernos precisam ser pensados desde o início para a web 3.0 em 2022, é isso que nós fazemos, criamos coisas do zero totalmente pensadas para a internet em 2022.</p>
                    <p className="paragraph3">Na Horizon Labs não ficamos presos ao passado e conseguimos criar e programar - quase - tudo que for necessário para o sucesso do seu negócio.</p>
                    <p className="paragraph3"></p>
                    <br></br>
                    <h4 className="titulo3" style={{}} align="left">Saiba mais sobre nossos projetos da web 3.0</h4>
                    <br></br>
                    <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20time%20de%20programadores%20da%20Horizon%20Labs!"><button style={{marginTop: '40px'}} className="buttonSale2">Conversar com os programadores</button></a>
                    </Col>
                </Row>
            </Container>
    </div>*/}

        <div className="packages" id="#packages">
            <Container style={{marginBottom: '90px'}}>
                <Row style={{marginTop: '200px', marginBottom: '40px'}} className="mar">
                    <Col sm>
                        <h2 className="titulo1" style={{}}>Ainda tem dúvidas sobre a Quixote Club?</h2>
                        <br></br>
                        <br></br>
                        <p className="paragraph3" style={{textAlign: 'center', margin: '12px'}}>Entre em contato conosco para tirar todas as suas dúvidas e entender melhor ainda como funciona a Quixote Club e todos os benefícios que você pode ter ao fazer a assinatura do plano limited.</p>
                        <br></br>
                    </Col>
                </Row>
                <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%20Horizon%20Labs%2C%20eu%20quero%20contratar%20um%20pacote%20da%20Horizon%20Labs%20para%20minha%20empresa."><button className="buttonSale2" style={{margin: '12px'}}>Conversar com a Quixote Club</button></a>
            </Container>
        </div>
        </>
    )
}

export default Home
