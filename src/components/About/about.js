import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import AboutBox from "./about-box";
import BestSkills from "./bestSkills";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                { icon : "mdi mdi-monitor", title : "Telefona", desc : "Aliquam tempor an tidunt liberonon feugiat quam risu tortor." },
                { icon : "mdi mdi-nfc-variant", title : "Aksesore", desc : "Aliquam tempor an tidunt liberonon feugiat quam risu tortor.", isLight : true },
                { icon : "mdi mdi-lightbulb-on-outline", title : "Servisim", desc : "Aliquam tempor an tidunt liberonon feugiat quam risu tortor.-" },
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="section" id="about">
                    <Container>
                        <SectionTitle
                            title="Rreth nesh"
                            subtitle="Kush jemi ne?"
                            desc="Jemi nje dyqan telefonash dhe aksesore, ofrojm servisim te telefonave te qdo lloji, kemi mbi 20 vite pervoje ne ofrimin e kerkesave te klienteve"
                        />

                        <Row className="mt-5 pt-2">
                            <AboutBox data={this.state.data} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default About;