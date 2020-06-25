import React from "react"

// import "../../styles/styles_amb/style.scss"
import Layout from "../components/ambassadors/layout"
import AmbAmbassadors from "../components/ambassadors/ambAmbassadors/ambassadors"
import About from "../components/ambassadors/about/about"
import WhatsItTake from "../components/ambassadors/whatsittake/whatsittake"
import Requeriments from "../components/ambassadors/requirements/requeriments"
import InterestArea from "../components/ambassadors/interestarea/interestarea"
import Benefits from "../components/ambassadors/benefits/benefits"
import Getstarted from "../components/ambassadors/getstarted/getstarted"

const Index = () => (
  <Layout>
    {/* <Seo/> */}
    <AmbAmbassadors />
    <About />
    <WhatsItTake />
    <Requeriments />
    <InterestArea />
    <Benefits />
    <Getstarted />
  </Layout>
)

export default Index
