import React, { useState } from "react"
import initialStyle from "./initial.module.scss"
import outermeshLeftSvg from "../../images/initialPresentation/home/outermesh-left.svg"
import outermeshRightSvg from "../../images/initialPresentation/home/outermesh-right.svg"
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

const InitialPresentation = () => {
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
            <button className={initialStyle.btnDefault}>
              <FormattedMessage id="inital.getStarted.title" />
            </button>
            <button
              className={initialStyle.btnDefault}
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
          </RowComp>
        </div>
        <img
          className={initialStyle.svgRight}
          src={outermeshRightSvg}
          alt="Lines right"
        />
        <img
          className={initialStyle.svgLeft}
          src={outermeshLeftSvg}
          alt="Lines left"
        />
      </div>
    </div>
  )
}

export default InitialPresentation
