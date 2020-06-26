import React from "react"
import PropTypes from "prop-types"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import MediaCoverage from "../components/press/MediaCoverage/MediaCoverage"
import CartesiMedia from "../components/press/CartesiMedia/CartesiMedia"
import LatestUpdates from "../components/press/LatestUpdates/LatestUpdates"

const press = props => {
  return (
    <div>
      <Header />
      <MediaCoverage />
      <CartesiMedia />
      <LatestUpdates />
      <Footer />
    </div>
  )
}

press.propTypes = {}

export default press
