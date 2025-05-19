import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Media, Form, Button } from "reactstrap";

//Import Footer link
import FooterLinks from "./footer-links";
import LinkSection from "./link-section";

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <FooterLinks/>
            </React.Fragment>
        );
    }
}

export default Footer;