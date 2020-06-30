import React, { useState } from "react"
import initialStyle from "./initial.module.scss"
import outermeshLeftSvg from "../../../images/home/initial/outermesh-left.svg"
import outermeshRightSvg from "../../../images/home/initial/outermesh-right.svg"
import { RowComp, ModalComp } from "../../bootstrap.components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVideo } from "@fortawesome/free-solid-svg-icons"
import { FormattedMessage } from "gatsby-plugin-intl"
import { Link } from "gatsby"

function ModalVideoComp(props) {
  const YoutubeVideo = () => {
    return (
      <iframe
        width="100%"
        height="100%"
        title="Cartesi"
        src="//www.youtube.com/embed/tYBfDe-14hE?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1&controls=0&showinfo=0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        mozallowfullscreen
        webkitallowfullscreen
      ></iframe>
    )
  }

  return (
    <ModalComp
      className={initialStyle.modalContentVideo}
      {...props}
      dialogClassName={initialStyle.modalView}
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

const InitialPresentation = props => {
  const [modalCompShow, setModalCompShow] = useState(false)

  return (
    <div>
      <div className={initialStyle.layout}>
        <div className={["container ", initialStyle.contentPage].join(" ")}>
          <RowComp className={initialStyle.titleHeader}>
            <h1>
              <FormattedMessage id="home.initial.title" />
            </h1>
          </RowComp>
          <RowComp className={initialStyle.subTitle}>
            <p>
              <FormattedMessage id="home.initial.description" />
            </p>
          </RowComp>

          <RowComp
            className={initialStyle.btnsList}
            xs={2}
            md={2}
            lg={12}
            xl={1}
          >
            <Link to={`en/docs/intro`}>
              <button className={initialStyle.btnDefault}>
                <FormattedMessage id="home.initial.getStarted.title" />
              </button>
            </Link>
            <button
              className={[initialStyle.btnDefault, initialStyle.btnWatch].join(
                " "
              )}
              onClick={() => setModalCompShow(true)}
            >
              <span>
                <FontAwesomeIcon icon={faVideo} />
                <FormattedMessage id="home.initial.video.title" />{" "}
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
