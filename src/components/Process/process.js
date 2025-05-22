import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ProcessBox from "./process-box";

class Process extends Component {
    constructor(props) {
        super(props);
        this.state = {
            processes : [
                { id : "01", title : "Ekran", desc : "Zëvendësim ekranësh të thyer ose me probleme në prekje" },
                { id : "02", title : "Bateri", desc : "Ndërrim i baterive që konsumohen shpejt." },
                { id : "03", title : "Kapaka", desc : "Riparim dhe ndërrim kapakësh të thyer apo të dëmtuar." },
                { id : "04", title : "Port mbushes", desc : "Riparim ose zëvendësim i portës së karikimit." },
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="bg-progress section" id='process'>
                    <div className="bg-overlay"></div>
                    <Container>
                    <SectionTitle
                        title="Servisimet"
                        desc="Ne ofrojmë një gamë të plotë shërbimesh për mirëmbajtjen dhe riparimin e telefonave tuaj. Përdorim pjesë cilësore dhe pajisje profesionale për të siguruar funksionim të qëndrueshëm dhe afatgjatë të pajisjeve."
                        isLight={true}
                    />

                        <Row className="mt-5 pt-2">
                            <ProcessBox processes={this.state.processes} />
                        </Row>

                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Process;