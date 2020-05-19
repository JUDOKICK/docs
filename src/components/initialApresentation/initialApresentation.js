import React, { useState } from "react"
import initialStyle from "./initial.module.scss"
import imgBg from "../../images/SVG/initial/diagram.png"
import logoWSJ from "../../images/SVG/initial/wsj.svg"
import logoT from "../../images/SVG/initial/t.svg"
import logoEG from "../../images/SVG/initial/eg.svg"
import logoComputer from "../../images/SVG/initial/computer.svg"
import { RowComp, ModalComp } from "../bootstrap.components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVideo } from "@fortawesome/free-solid-svg-icons"
import { FormattedMessage } from "gatsby-plugin-intl"


function ModalVideoComp(props) {
  const YoutubeVideo = () => {
    return (
      <iframe
        width="100%"
        height="100%"
        title="Cartesi"
        src="https://www.youtube.com/embed/tYBfDe-14hE"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    )
  }

  return (
    <ModalComp
      className={initialStyle.modalContentVideo}
      {...props}
      size="lg"
      aria-labelledby="contained-modalComp-title-vcenter"
      centered
    >
      <ModalComp.Header
        className={initialStyle.modalHeader}
        closeButton
      ></ModalComp.Header>
      <ModalComp.Body className={initialStyle.modalBody}>
        <div className={initialStyle.videoYoutbe}>
          <YoutubeVideo />
        </div>
      </ModalComp.Body>
      {/* <ModalComp.Footer>
        <button onClick={props.onHide}>Close</button>
      </ModalComp.Footer> */}
    </ModalComp>
  )
}

const InitialApresentation = () => {
  const [modalCompShow, setModalCompShow] = useState(false)

  return (
    <div>
      <div className={initialStyle.layout}>
        <div className={["container ", initialStyle.contentPage].join(" ")}>
          <RowComp
            className={initialStyle.titleHeader}
            xs={2}
            md={2}
            lg={12}
            xl={1}
          >
            <h1>
              <FormattedMessage id="inital.title" />
            </h1>
            <h1>
              <FormattedMessage id="inital.titleContinue" />
            </h1>
          </RowComp>
          <RowComp
            className={initialStyle.subTitle}
            xs={2}
            md={2}
            lg={12}
            xl={1}
          >
            <p>
              <FormattedMessage id="inital.description" />
            </p>
          </RowComp>

          <RowComp
            className={initialStyle.btnsList}
            xs={2}
            md={2}
            lg={12}
            xl={1}
          >
            <button className={initialStyle.btnStarted}>
              <FormattedMessage id="inital.getStarted.title" />
            </button>
            <button
              className={initialStyle.btnVideo}
              onClick={() => setModalCompShow(true)}
            >
              <span>
                <FontAwesomeIcon icon={faVideo} />
                <FormattedMessage id="inital.video.title" />{" "}
              </span>
            </button>

            <ModalVideoComp
              show={modalCompShow}
              onHide={() => setModalCompShow(false)}
            />

            {/* */}
          </RowComp>

          <RowComp
            className={initialStyle.imgsList}
            xs={2}
            md={2}
            lg={12}
            xl={1}
          >
            <img src={logoWSJ} alt="WSJ" />
            <img src={logoT} alt="T" />
            <img
              className={initialStyle.computerLogo}
              src={logoComputer}
              alt="Computer"
            />
            <img src={logoEG} alt="EG" />
          </RowComp>
        </div>
        {/* <div className={initialStyle.diagram}></div> */}
        <img className={initialStyle.imgBg} src={imgBg} alt="" />
      </div>
    </div>
  )
}

export default InitialApresentation
