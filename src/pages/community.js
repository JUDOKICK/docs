import React from "react"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Join from "../components/community/join/join"
import Become from "../components/community/become/become"
import Channels from "../components/community/channels/channels"
import Groups from "../components/community/groups/groups"
import UpEvents from "../components/community/UpEvents/upEvents"

const Community = () => {
  return (
    <>
      <Header typeNav={2} pageName="community" />
      <div>
        <Join />
        <Become />
        <Channels />
        <Groups />
        <UpEvents />
      </div>
      <Footer />
    </>
  )
}

export default Community
