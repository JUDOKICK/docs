import React from "react"
import PropTypes from "prop-types"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import MediaCoverage from "../components/press/mediaCoverage/mediaCoverage"
import CartesiMedia from "../components/press/cartesiMedia/cartesiMedia"
import LatestUpdates from "../components/press/latestUpdates/latestUpdates"

const press = props => {
  return (
    <div>
      <Header typeNav={2} pageName="press" />
      <MediaCoverage />
      <CartesiMedia />
      <LatestUpdates />
      <Footer />
    </div>
  )
}

press.propTypes = {}

export default press
