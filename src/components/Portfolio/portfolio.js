import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
// import FadeIn from 'react-fade-in';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Images
import work1 from "../../assets/images/portfolio/1.png";
import work2 from "../../assets/images/portfolio/2.png";
import work3 from "../../assets/images/portfolio/3.png";
import work4 from "../../assets/images/portfolio/4.png";
import work5 from "../../assets/images/portfolio/5.png";
import work6 from "../../assets/images/portfolio/6.png";

//creating array of images for image portfolio
const images = [work1, work2, work3, work4, work5, work6];

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          image: work1,
          title: "Iphone 16",
          subtitle: "Modelet",
          category: "Brand",
        },
        {
          id: 2,
          image: work2,
          title: "Iphone 15",
          subtitle: "Modelet",
          category: "Brand",
        },
        {
          id: 3,
          image: work3,
          title: "Iphone 14",
          subtitle: "Modelet",
          category: "Design",
        },
        {
          id: 4,
          image: work4,
          title: "Iphone 13",
          subtitle: "Modelet",
          category: "Graphic",
        },
        {
          id: 5,
          image: work5,
          title: "Iphone 11",
          subtitle: "Modelet",
          category: "Brand",
        },
        {
          id: 6,
          image: work6,
          title: "Iphone X",
          subtitle: "Modelet",
          category: "Brand",
        },
      ],
      displayCategory: "All",
      photoIndex: 0,
      isOpen: false,
    };
    this.setCategory.bind(this);
  }

  setCategory(category) {
    this.setState({
      displayCategory: category,
    });
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <React.Fragment>
        <section className="section" id="portfolio">
          <Container>
            <SectionTitle
              title="Produktet"
              subtitle=""
              desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
            />

            <Row className="mt-5 pt-2">
              <Col lg={12}>
                <div className="text-center">
                  <ul
                    className="col container-filter portfolioFilte list-unstyled mb-0"
                    id="filter"
                  >
                    <li className="ml-1">
                      <Link
                        to="#"
                        onClick={() => this.setCategory("All")}
                        className={
                          this.state.displayCategory === "All"
                            ? "categories active"
                            : "categories"
                        }
                      >
                        Iphone
                      </Link>
                    </li>
                    <li className="ml-1">
                      <Link
                        to="#"
                        onClick={() => this.setCategory("Brand")}
                        className={
                          this.state.displayCategory === "Brand"
                            ? "categories active"
                            : "categories"
                        }
                      >
                        Samsung
                      </Link>
                    </li>
                    <li className="ml-1">
                      <Link
                        to="#"
                        onClick={() => this.setCategory("Design")}
                        className={
                          this.state.displayCategory === "Design"
                            ? "categories active"
                            : "categories"
                        }
                      >
                        Mbrojtese dhe adaptere
                      </Link>
                    </li>
                    <li className="ml-1">
                      <Link
                        to="#"
                        onClick={() => this.setCategory("Graphic")}
                        className={
                          this.state.displayCategory === "Graphic"
                            ? "categories active"
                            : "categories"
                        }
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
                  .filter(
                    ({ category }) =>
                      this.state.displayCategory === category ||
                      this.state.displayCategory === "All"
                  )
                  .map(({ title, image, subtitle }, key) => (
                    <Col lg={4} md={4} key={key} className="p-3">
                      {/* <FadeIn> */}
                      <div className="item-box">
                        <Link
                          to="#"
                          onClick={(event) => {
                            event.preventDefault();
                            this.setState({ isOpen: true, photoIndex: key });
                          }}
                          className="cbox-gallary1 mfp-image"
                          title="Project Name"
                        >
                          <img
                            className="item-container rounded"
                            src={image}
                            alt="work-img"
                          />
                          <div className="item-mask">
                            <div className="item-caption">
                              <h5 className="f-18">{title}</h5>
                              <p className="text-primary">{subtitle}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      {/* </FadeIn> */}
                    </Col>
                  ))}

                {/* lightbox for portfolio images */}
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
