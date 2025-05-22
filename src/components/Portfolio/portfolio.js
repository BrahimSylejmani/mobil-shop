import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import SectionTitle from "../common/section-title";

import work1 from "../../assets/images/portfolio/iphone16.webp";
import work2 from "../../assets/images/portfolio/Iphone15.webp";
import work3 from "../../assets/images/portfolio/iphone14.jpeg";
import work4 from "../../assets/images/portfolio/iphone13.png";
import work5 from "../../assets/images/portfolio/iphone12.png";
import work6 from "../../assets/images/portfolio/iphone11.png";
import work7 from "../../assets/images/portfolio/1.png";
import work8 from "../../assets/images/portfolio/2.png";
import work9 from "../../assets/images/portfolio/3.png";
import work10 from "../../assets/images/portfolio/4.png";
import work11 from "../../assets/images/portfolio/5.png";
import work12 from "../../assets/images/portfolio/6.png";

const images = [work1, work2, work3, work4, work5, work6, work7, work8, work9, work10, work11, work12];

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { id: 1, image: work1, title: "iPhone 16, 16 Pro, 16 Pro Max", subtitle: "Modelet", category: "Iphone" },
        { id: 2, image: work2, title: "iPhone 15, 15 Pro, 15 Pro Max", subtitle: "Modelet", category: "Iphone" },
        { id: 3, image: work3, title: "iPhone 14, 14 Pro, 14 Pro Max", subtitle: "Modelet", category: "Iphone" },
        { id: 4, image: work4, title: "iPhone 13, 13 Pro, 13 Pro Max", subtitle: "Modelet", category: "Iphone" },
        { id: 5, image: work5, title: "iPhone 12, 12 Pro, 12 Pro Max", subtitle: "Modelet", category: "Iphone" },
        { id: 6, image: work6, title: "iPhone 11, 11 Pro, 11 Pro Max", subtitle: "Modelet", category: "Iphone" },
        { id: 7, image: work7, title: "Samsung A16", subtitle: "Modeli", category: "Samsung" },
        { id: 8, image: work8, title: "Samsung A26", subtitle: "Modeli", category: "Samsung" },
        { id: 9, image: work9, title: "Samsung A36", subtitle: "Modeli", category: "Samsung" },
        { id: 10, image: work10, title: "Samsung S22", subtitle: "Modeli", category: "Samsung" },
        { id: 11, image: work11, title: "Samsung S23", subtitle: "Modeli", category: "Samsung" },
        { id: 12, image: work12, title: "Samsung S24", subtitle: "Modeli", category: "Samsung" },
      ],
      displayCategory: "Iphone",
      photoIndex: 0,
      isOpen: false,
    };
  }

  setCategory = (category) => {
    this.setState({ displayCategory: category });
  };

  render() {
    const { photoIndex, isOpen, displayCategory } = this.state;
    return (
      <React.Fragment>
        <section className="section" id="portfolio">
          <Container>
            <SectionTitle
              title="Produktet"
              desc="Zgjedhja jote për pajisje mobile fillon këtu. Disa nga produktet më të shitura nga iPhone, Samsung, aksesorë, kufje dhe shumë të tjera i gjeni këtu."
            />

            <Row className="mt-5 pt-2">
              <Col lg={12}>
                <div className="text-center">
                  <ul className="col container-filter portfolioFilte list-unstyled mb-0" id="filter">
                    <li className="ml-1">
                      <Link
                        to="#"
                        onClick={() => this.setCategory("Iphone")}
                        className={displayCategory === "Iphone" ? "categories active" : "categories"}
                      >
                        Iphone
                      </Link>
                    </li>
                    <li className="ml-1">
                      <Link
                        to="#"
                        onClick={() => this.setCategory("Samsung")}
                        className={displayCategory === "Samsung" ? "categories active" : "categories"}
                      >
                        Samsung
                      </Link>
                    </li>
                    <li className="ml-1">
                      <Link
                        to="#"
                        onClick={() => this.setCategory("Design")}
                        className={displayCategory === "Design" ? "categories active" : "categories"}
                      >
                        Mbrojtese dhe adaptere
                      </Link>
                    </li>
                    <li className="ml-1">
                      <Link
                        to="#"
                        onClick={() => this.setCategory("Graphic")}
                        className={displayCategory === "Graphic" ? "categories active" : "categories"}
                      >
                        Tjeter
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>

            <div className="port portfolio-masonry mt-5">
              <div className="portfolioContainer row">
                {this.state.projects
                  .filter(({ category }) => displayCategory === category)
                  .map(({ id, title, image, subtitle }, index) => (
                    <Col lg={4} md={4} key={id} className="p-3">
                      <div className="item-box">
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({ isOpen: true, photoIndex: index });
                          }}
                          className="cbox-gallary1 mfp-image"
                          title="Project Name"
                        >
                          <img className="item-container rounded" src={image} alt="work-img" />
                          <div className="item-mask">
                            <div className="item-caption">
                              <h5 className="f-18">{title}</h5>
                              <p className="text-primary">{subtitle}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </Col>
                  ))}

                {isOpen && (
                  <Lightbox
                    open={isOpen}
                    close={() => this.setState({ isOpen: false })}
                    index={photoIndex}
                    slides={images.map((image) => ({ src: image }))}
                  />
                )}
              </div>
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Portfolio;
