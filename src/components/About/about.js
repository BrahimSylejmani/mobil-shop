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
            data: [
              {
                icon: "mdi mdi-cellphone", // Ikonë për telefona
                title: "Telefona",
                desc: "Modelet më të fundit të iPhone, Samsung dhe shumë të tjerë – cilësi, garanci dhe çmime të arsyeshme për çdo buxhet.",
              },
              {
                icon: "mdi mdi-headphones", // Ikonë për aksesorë (mund të përdorësh edhe mdi-usb, mdi-cable-data, etj.)
                title: "Aksesorë",
                desc: "Gjej aksesorët që të duhen: karikues, kabllo, follo, adapterë, kufje, dhe shumë më shumë për telefonin tënd.",
                isLight: true,
              },
              {
                icon: "mdi mdi-lightbulb-on-outline", 
                title: "Servisim",
                desc: "Riparime të shpejta dhe profesionale për çdo model telefoni – ekran, bateri, porta karikimi e të tjera.",
              },
            ],
          };
          
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="section" id="about">
                    <Container>
                        <SectionTitle
                            title="Rreth nesh"
                            subtitle="Kush jemi ne?"
                            desc="Ne jemi një dyqan me mbi 20 vite përvojë në treg i specializuar për telefona dhe aksesorë mobilë. Angazhimi ynë është të ofrojmë produkte cilësore dhe shërbim të besueshëm, gjithmonë me fokus tek nevojat dhe kënaqësia e klientit."/>
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