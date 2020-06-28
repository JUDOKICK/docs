import React from "react"
import Slider from "react-slick"

import { RowComp, CardComp } from "../../bootstrap.components"
import { FormattedMessage } from "gatsby-plugin-intl"

import cartesiMedia from "./cartesiMedia.module.scss"

import cointelegraph from "../../../images/press/carousel/cointelegraph-124x124.png"
import computer from "../../../images/press/carousel/computer-weekly-124x124.png"
import european from "../../../images/press/carousel/european-gaming124x124.png"
import wall from "../../../images/press/carousel/wall-street-journal-124x124.png"
import next from "../../../images/press/carousel/next.png"
import prev from "../../../images/press/carousel/prev.png"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function CarouselNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src={next} />
    </div>
  )
}

function CarouselPrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src={prev} />
    </div>
  )
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  nextArrow: <CarouselNextArrow />,
  prevArrow: <CarouselPrevArrow />,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
}

const slides = [
  {
    photo: cointelegraph,
    name: "Cointelegrapg",
    text:
      "Blockchain Interoperabilty: The Holy Grail for Cross-Chain Deployment",
    date: "May 21, 2020",
    id: 1,
  },
  {
    photo: wall,
    name: "The Wall Street Jounal",
    text: "5 Ways Your Business Can Benefit From Blockchain",
    date: "April 14, 2020",
    id: 2,
  },
  {
    photo: computer,
    name: "Computer Weekly",
    text: "Cartesi creates Linux infrastructure for blockchain DApps",
    date: "May 5, 2020",
    id: 3,
  },
  {
    photo: european,
    name: "European Gaming",
    text: "Exclusive Q&A with Colin Steil, CO-Founder and COO of Cartesi",
    date: "May 5, 2020",
    id: 4,
  },
]

const CartesiMedia = props => {
  return (
    <div>
      <div className={cartesiMedia.container}>
        <div 
        className={cartesiMedia.boxCenter}
        >
          <RowComp className={cartesiMedia.title} xs={1} md={1} lg={1} xl={1}>
            <h1>
              <FormattedMessage id="press.cartesiMedia.title" />
            </h1>
          </RowComp>
          <RowComp
            className={cartesiMedia.subTitle}
            xs={1}
            md={1}
            lg={10}
            xl={1}
          >
            <div>
              <Slider {...settings} className={cartesiMedia.carouselBlock}>
                {slides.map(item => {
                  return (
                    <div key={item.id}>
                      <CardComp style={{ width: "18rem" }}>
                        <CardComp.Body className={cartesiMedia}>
                            
                          <img src={item.photo}></img>
                          <span>{item.name}</span>
                          <span>{item.date}</span>
                        </CardComp.Body>
                        <div className={cartesiMedia.carouselContent}>
                          <p>{item.text}</p>
                        </div>
                        <CardComp.Footer
                          className={[cartesiMedia.cardFooter].join(" ")}
                        >
                           
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://pr-48.d39b4y6vhbs03w.amplifyapp.com/en/"
                          >
                            <button>READ MORE</button>
                          </a>
                        </CardComp.Footer>
                      </CardComp>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </RowComp>
        </div>
      </div>
    </div>
  )
}

CartesiMedia.propTypes = {}

export default CartesiMedia
