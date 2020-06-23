import React from "react"

// import "../../styles/styles_amb/style.scss"
import Layout from "../../components/ambassadors/layout"
import AmbAmbassadors from "../../components/ambassadors/ambAmbassadors/ambassadors"
import About from "../../components/ambassadors/about/about"
import WhatsItTake from "../../components/ambassadors/whatsittake/whatsittake"
import Requeriments from "../../components/ambassadors/requirements/requeriments"

const Index = () => (
  <Layout>
    {/* <Seo/> */}
    <AmbAmbassadors />
    <About />
    <WhatsItTake />
    <Requeriments />
  </Layout>
)

export default Index
