import React, { Component } from 'react';
import { Container, Row, Col, Media, FormGroup } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Images
import map from "../../assets/images/features/map.png";

class GetInTouch extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        const message = e.target.comments.value;

        const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${number}%0AMessage: ${message}`;
        const phone = '38345957833'; 

        const whatsappURL = `https://wa.me/${phone}?text=${text}`;
        window.open(whatsappURL, '_blank');
    };

    render() {
        return (
            <React.Fragment>
                <section className="section" id="contact">
                    <Container>
                        <SectionTitle
                            title="Na Kontakto"
                            subtitle=""
                            desc="Jemi këtu për t’ju ndihmuar! Nëse keni pyetje për produktet tona apo thjesht dëshironi të na lini një mesazh, mos hezitoni të na kontaktoni."
                        />
                        <Row className="mt-5 pt-2">
                            <Col lg={5}>
                                <div className="contact-info">
                                    <div style={{ backgroundImage: `url(${map})`, backgroundRepeat: "no-repeat" }}>
                                        <Media>
                                            <i className="mdi mdi-map-marker text-primary h4"></i>
                                            <Media body className="ml-4">
                                                <p className="text-muted">
                                                    Sheshi Fehmi & Xheve Lladrovci,
                                                    <br />Drenas, 13000
                                                </p>
                                            </Media>
                                        </Media>

                                        <Media className="mt-4">
                                            <i className="mdi mdi-phone text-primary h4"></i>
                                            <Media body className="ml-4">
                                                <p className="text-muted">
                                                    Telefoni: 045 957 833,
                                                    <br />044 181 045
                                                </p>
                                            </Media>
                                        </Media>

                                        <Media className="media mt-4">
                                            <i className="mdi mdi-calendar-clock text-primary h4"></i>
                                            <Media body className="ml-4">
                                                <p className="text-muted">
                                                    E hene-E shtune: 9.00-19.00
                                                </p>
                                            </Media>
                                        </Media>

                                        <Media className="media mt-4">
                                            <i className="mdi mdi-email text-primary h4"></i>
                                            <Media body className="ml-4">
                                                <p className="text-muted">Email: naserimobilshop@gmail.com</p>
                                            </Media>
                                        </Media>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={7}>
                                <div className="custom-form">
                                    <div id="message"></div>
                                    <form name="contact-form" id="contact-form" onSubmit={this.handleSubmit}>
                                        <Row>
                                            <Col lg={12}>
                                                <FormGroup className="mt-3">
                                                    <input
                                                        name="name"
                                                        id="name"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Your name"
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={6}>
                                                <FormGroup className="mt-3">
                                                    <input
                                                        name="email"
                                                        id="email"
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Your email"
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col lg={6}>
                                                <FormGroup className="mt-3">
                                                    <input
                                                        name="number"
                                                        id="number"
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Phone number"
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={12}>
                                                <FormGroup className="mt-3">
                                                    <textarea
                                                        name="comments"
                                                        id="comments"
                                                        rows="5"
                                                        className="form-control"
                                                        placeholder="Your message"
                                                        required
                                                    ></textarea>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={12}>
                                                <div className="mt-3">
                                                    <input
                                                        type="submit"
                                                        id="submit"
                                                        name="send"
                                                        className="submitBnt btn btn-primary"
                                                        value="Send Message"
                                                    />
                                                    <div id="simple-msg"></div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default GetInTouch;
