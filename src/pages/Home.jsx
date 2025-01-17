import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.jsx";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/product.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/1.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Fast Delivery",
    imgUrl: featureImg01,
    desc: "Our food delivery system is designed for speedy service, ensuring that your order arrives at your doorstep as quickly as possible",
  },

  {
    title: "Fully automated",
    imgUrl: featureImg02,
    desc: "Our ordering system is fully automated, streamlining the process and making it easier for customers to place orders and receive their food.",
  },
  {
    title: "Unique payment",
    imgUrl: featureImg03,
    desc: "Our payment system is unique and secure, ensuring that your personal and financial information is kept safe while you enjoy our delicious food.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section className="back">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div>
                <h5 className="mb-3"
                style={
                  {color:"white",
                  fontSize:"18px",
                  paddingTop:"60px"
                }
                }>Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span 
                  style={
                    {
                      fontFamily:"'Shantell Sans', cursive",
                      color:"#ffc93c"
                    }
                  }><span style={
                    {
                      color:"#fff"
                    }
                  }>ARE YOU</span> HUNGRY ?</span> Give us few minutes <br />& food at
                  <span style={
                    {
                      color:"#ffc93c",
                      fontFamily:"'Shantell Sans', cursive"

                    }
                  }> your table 😋</span>
                </h1>

                <p style={
                  {
                    color:'white'
                  }
                }>
                  Welcome to Las Deimos, the first restaurant on Mars! Located
                  in the heart of the Martian colony, our restaurant offers a
                  unique dining experience that is out of this world. As you
                  step inside, you'll be transported to a futuristic atmosphere
                  that is inspired by the surrounding Martian landscape.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    <p
                    style={
                      {
                        color:"white",
                        marginBottom:"0px"
                      }
                    }
                    >No shipping charge</p>
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>
                    <p
                    style={
                      {
                        color:"white",
                        marginBottom:"0px"
                      }
                    }
                    >
                    100% secure checkout</p>
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4"
              style={
                {
                  color:"white"
                }
              }
              >What we serve</h5>
              <h2 className="feature__title"
              style={
                {
                  color:"#8dc6ff"
                }
              }
              >Just sit back at home</h2>
              <h2 className="feature__title"
              style={
                {
                  color:"#8dc6ff"
                }
              }
              >
                we will <span
                style={
                  {
                    color:"#007cb9"
                  }
                }
                >take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text"
              style={
                {
                  color:"white"
                }
              }
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className="feature__text"
              style={
                {
                  color:"white"
                }
              }
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3"
                  style={
                    {
                      color:"#8dc6ff"
                    }
                  }
                  >{item.title}</h5>
                  <p
                  style={
                    {
                      color:"white"
                    }
                  }
                  >{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2
              style={
                {
                  color:"#8dc6ff"
                }
              }
              >MENU</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn d-flex align-items-center gap-2 ${
                    category === "A;;" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2
              style={
                {
                  color:"#8dc6ff"
                }
              }
              >Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h2 className="testimonial__title mb-4"
                style={
                  {
                    color:"#8dc6ff"
                  }
                }
                >
                  Customer's Review
                </h2>
                <p className="testimonial__desc"
                style={
                  {
                    color:"white"
                  }
                }
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
