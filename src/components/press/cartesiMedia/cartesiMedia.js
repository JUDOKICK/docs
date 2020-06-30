import React, { useState, useEffect } from "react"
import Slider from "react-slick"

import { RowComp, CardComp } from "../../bootstrap.components"
import { FormattedMessage } from "gatsby-plugin-intl"

import cartesiMedia from "./cartesiMedia.module.scss"

import cointelegraph from "../../../images/press/carousel/cointelegraph.svg"
import computer from "../../../images/press/carousel/cw.svg"
import european from "../../../images/press/carousel/eg.svg"
import wall from "../../../images/press/carousel/wsj.svg"
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
    <div
      className={className}
      style={{ ...style, left: "-2.5rem" }}
      onClick={onClick}
    >
      <img src={prev} />
    </div>
  )
}

const settings = {
  // className: "slider variable-width",
  // centerMode: true,
  centerPadding: "18px",
  dots: false,
  infinite: true,
  speed: 500,
  nextArrow: <CarouselNextArrow />,
  prevArrow: <CarouselPrevArrow />,
  slidesToShow: 4,
  slidesToScroll: 4,
  // rows: 1,
  // variableWidth: true,
  responsive: [
    {
      breakpoint: 1780,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1415,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 1,
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
    url: "https://pr-48.d39b4y6vhbs03w.amplifyapp.com/en/",
  },
  {
    photo: wall,
    name: "The Wall Street Jounal",
    text: "5 Ways Your Business Can Benefit From Blockchain",
    date: "April 14, 2020",
    url: "https://pr-48.d39b4y6vhbs03w.amplifyapp.com/en/",
  },
  {
    photo: computer,
    name: "Computer Weekly",
    text: "Cartesi creates Linux infrastructure for blockchain DApps",
    date: "May 5, 2020",
    url: "https://pr-48.d39b4y6vhbs03w.amplifyapp.com/en/",
  },
  {
    photo: european,
    name: "European Gaming",
    text: "Exclusive Q&A with Colin Steil, CO-Founder and COO of Cartesi",
    date: "May 5, 2020",
    url: "https://pr-48.d39b4y6vhbs03w.amplifyapp.com/en/",
  },
]

const CartesiMedia = props => {
  const isBrowser = typeof window !== "undefined"
  const [screenSize, setScreenSize] = useState(
    isBrowser ? window.innerWidth : 0
  )
  useEffect(() => {
    if (!isBrowser) return false
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  const slidesContent = slides.map((item, key) => {
    return (
      <div key={key}>
        <CardComp className={[cartesiMedia.card].join(" ")}>
          <CardComp.Header className={[cartesiMedia.cardHeader].join(" ")}>
            <img
              className={[cartesiMedia.image].join(" ")}
              src={item.photo}
            ></img>
            <div className={[cartesiMedia.title].join(" ")}>{item.name}</div>
            <div className={[cartesiMedia.date].join(" ")}>{item.date}</div>
          </CardComp.Header>
          <CardComp.Body className={cartesiMedia.cardBody}>
            <div className={cartesiMedia.carouselContent}>
              <p>{item.text}</p>
            </div>
          </CardComp.Body>
          <CardComp.Footer className={[cartesiMedia.cardFooter].join(" ")}>
            <a target="_blank" rel="noopener noreferrer" href={item.url}>
              <button>READ MORE</button>
            </a>
          </CardComp.Footer>
        </CardComp>
      </div>
    )
  })

  return (
    <div>
      <div className={cartesiMedia.container}>
        <div className={cartesiMedia.boxCenter}>
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
              {screenSize > 970 ? (
                <Slider {...settings} className={cartesiMedia.carouselBlock}>
                  {slidesContent}
                  {screenSize > 1780 ? <div></div> : null}
                </Slider>
              ) : (
                <div className={cartesiMedia.carouselBlock}>
                  {slidesContent}
                </div>
              )}
            </div>
          </RowComp>
        </div>
      </div>
    </div>
  )
}

CartesiMedia.propTypes = {}

export default CartesiMedia
