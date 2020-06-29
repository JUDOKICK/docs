import React from "react"
import "../styles/global.scss"
import Header from "../components/header/header"
import WalletsExchanges from "../components/wallets/walletsExchanges/walletsExchanges"
import Exchanges from "../components/wallets/exchanges/exchanges"
import WalletsCtsi from "../components/wallets/walletsCtsi/walletsCtsi"
import CtsiUpdates from "../components/wallets/ctsiUpdates/ctsiUpdates"

import Footer from "../components/footer/footer"
import SEO from "../components/seo/seo"
import { injectIntl } from "gatsby-plugin-intl"

const WalletsPage = ({ intl }) => {
  return (
    <div>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "wallets.title" })}
        keywords={[`Cartesi`, `Blockchain`, `Linux`, `Wallets`, `Exchanges`]}
      />
      <Header />
      <div>
        <WalletsExchanges />
        <Exchanges />
        <WalletsCtsi />
        <CtsiUpdates />
      </div>
      <Footer />
    </div>
  )
}

export default injectIntl(WalletsPage)
