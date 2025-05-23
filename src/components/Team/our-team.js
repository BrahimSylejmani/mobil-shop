import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Team Box
import TeamBox from "./team-box";

//Import Images
import team1 from "../../assets/images/portfolio/1.png";
import team3 from "../../assets/images/portfolio/1.png";
import team4 from "../../assets/images/portfolio/1.png";

class OurTeam extends Component {
    state = {
        members : [
            { img : team1, name : "Juliana Waddell", post : "Founder", desc : "Consequat conllis Vebulum ante ipsum primis faubus orci cubilia Curae." },
           { img : team3, name : "Chris Lewis", post : "Designer", desc : "Consequat conllis Vebulum ante ipsum primis faubus orci cubilia Curae." },
            { img : team4, name : "Juliana Waddell", post : "Manager", desc : "Consequat conllis Vebulum ante ipsum primis faubus orci cubilia Curae." },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section" id="team">
                    <Container>
                    <SectionTitle
                        title="Our Teams"
                        subtitle="Minds"
                        desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
                    />
                        <Row className="mt-5 pt-2">
                            <TeamBox members={this.state.members} />
                        </Row>

                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default OurTeam;