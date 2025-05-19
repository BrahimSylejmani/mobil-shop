import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ReactTextRotator from 'react-text-rotator';

//Importing Modal
import ModalSection from '../../components/common/ModalSection';

//Import Images
import bg4 from "../../assets/images/homeImage.JPG";

const RotateComponent = () => (

    <ReactTextRotator
      content={content}
      time={9000}
      startDelay={10}
    />
);

const content = [
    {
        text: 'Mobil Shop Naseri',
        animation: 'fade',
    },
    {
        text: 'Mobil Shop Naseri',
        animation: 'fade',
    },
    {
        text: 'Mobil Shop Naseri',
        animation: 'fade',
    },
];

class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        // Create a ref for ModalSection
        this.modalRef = React.createRef();
    }

    callModal = () => {
        if (this.modalRef.current) {
            this.modalRef.current.openModal();
        }
    };
    
    render() {
        return (
            <React.Fragment>
                <section className="home-full" id="home" style={{backgroundImage: `url(${bg4})`}}>
                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col md={12}>
                                        <div className="home-content text-center text-white">
                                            
                                            <h5 className="sub-title mt-4 text-white pt-2 text-uppercase">Telefona dhe aksesore</h5>
                                            <h1 className=" mt-4 text-white text-uppercase">
                                                <div className="text-rotate">
                                                    <RotateComponent/>
                                                </div>
                                            </h1>
                                            <p className="text-white mt-4 f-18">Dyqani juaj i telefonave dhe aksesoreve.</p>
                                            <div className="pt-4 mt-1">
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            {/* Render ModalSection Component for Modal */}
                            <ModalSection ref={this.modalRef} channel='vimeo' videoId='99025203' />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;