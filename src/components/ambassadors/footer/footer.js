import React, { useState } from "react"
import { Link } from "gatsby"

import footerStyles from "../../../styles/styles_amb/footer.module.scss"
import icoCartesi from "../../../images/ambassadors/ico-cartesi.svg"
import {
  FaGithub,
  FaDiscord,
  FaTelegramPlane,
  FaMedium,
  FaTwitter,
} from "react-icons/fa"

import { FormComp } from "../../bootstrap.components"
// const { Control } = FormComp
// const { Feedback } = Control

const Footer = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <div id={footerStyles.ambFooter}>
      <footer id={footerStyles.footer} className={footerStyles.footer}>
        <div className={footerStyles.wrap}>
          <div className={footerStyles.container}>
            {/* <!-- social media --> */}
            <div
              className={footerStyles.socialmedia}
              id={footerStyles.stayintouch}
            >
              <h4 className={[footerStyles.socialmediaTitle, "m-0"].join(" ")}>
                Stay in touch:
              </h4>
              <ul className={footerStyles.socialmediaNav}>
                <li className={footerStyles.socialmediaItem}>
                  <a
                    to="https://www.github.com/cartesi"
                    target="_blank"
                    rel="noopener norefferer"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li className={footerStyles.socialmediaItem}>
                  <a
                    to="https://discord.gg/Pt2NrnS"
                    target="_blank"
                    rel="noopener norefferer"
                  >
                    <FaDiscord />
                  </a>
                </li>
                <li className={footerStyles.socialmediaItem}>
                  <a
                    to="https://www.twitter.com/cartesiproject"
                    target="_blank"
                    rel="noopener norefferer"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li className={footerStyles.socialmediaItem}>
                  <a
                    to="https://www.medium.com/cartesi"
                    target="_blank"
                    rel="noopener norefferer"
                  >
                    <FaMedium />
                  </a>
                </li>
                <li className={footerStyles.socialmediaItem}>
                  <a
                    to="https://t.me/cartesiproject"
                    target="_blank"
                    rel="noopener norefferer"
                  >
                    <FaTelegramPlane />
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- //social media --> */}

            {/* <!-- news --> */}
            <div
              className={footerStyles.mlFormEmbed}
              // data-account="1797592:x4y1u5u9w3"
              // data-form="2025920:r0w4v3"
            >
              <div
                id={footerStyles.mlb22025920}
                className={[
                  footerStyles.mlFormEmbedContainer,
                  "ml-subscribe-form ml-subscribe-form-2025920",
                ].join(" ")}
              >
                <div className={footerStyles.mlFormAlignCenter}>
                  <div
                    className={[
                      footerStyles.mlFormEmbedWrapper,
                      footerStyles.embedForm,
                    ].join(" ")}
                  >
                    <div
                      className={[
                        footerStyles.mlFormEmbedBody,
                        footerStyles.mlFormEmbedBodyHorizontal,
                        footerStyles.rowForm,
                      ].join(" ")}
                    >
                      <div className={footerStyles.mlFormEmbedContent}>
                        <h4></h4>
                      </div>
                      <FormComp
                        className={footerStyles.mlBlockForm}
                        validated={validated}
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <div
                          className={[
                            footerStyles.mlFormFormContent,
                            footerStyles.horizontalForm,
                          ].join(" ")}
                        >
                          <div className={footerStyles.mlFormHorizontalRow}>
                            <div className={footerStyles.mlInputHorizontal}>
                              <div
                                style={{ width: 100 + "%" }}
                                className={footerStyles.horizontalFields}
                              >
                                <FormComp.Group
                                  className={[
                                    footerStyles.mlFieldGroup,
                                    footerStyles.mlFieldEmail,
                                    footerStyles.mlValidateEmail,
                                    footerStyles.mlValidateRequired,
                                  ].join(" ")}
                                  controlId="validationEmailFooter"
                                >
                                  <FormComp.Control
                                    type="email"
                                    className={footerStyles.formControl}
                                    name="fields[email]"
                                    placeholder="Email"
                                    autocomplete="email"
                                    required
                                  />
                                  <FormComp.Control.Feedback type="invalid">
                                    Please enter required field
                                  </FormComp.Control.Feedback>
                                </FormComp.Group>
                              </div>
                            </div>
                            <div
                              className={[
                                footerStyles.mlButtonHorizontal,
                                footerStyles.primary,
                              ].join(" ")}
                            >
                              <button
                                type="submit"
                                className={footerStyles.primary}
                              >
                                Subscribe
                              </button>
                              {/* <button
                                disabled="disabled"
                                style={{ display: "none" }}
                                type="button"
                                className={footerStyles.loading}
                              >
                                {" "}
                                <div
                                  className={footerStyles.mlFormEmbedSubmitLoad}
                                ></div>{" "}
                              </button> */}
                            </div>
                          </div>
                        </div>
                        <input type="hidden" name="ml-submit" value="1" />
                      </FormComp>
                    </div>
                    <div
                      className={[
                        "ml-form-successBody",
                        footerStyles.rowSuccess,
                      ].join(" ")}
                      style={{ display: "none" }}
                    >
                      <div className={footerStyles.mlFormSuccessContent}>
                        <h4>Thank you!</h4>
                        <p>You have successfully joined our subscriber list.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  //news --> */}

            {/* <!-- footer menu --> */}
            <div className="row">
              <div className={footerStyles.content}>
                <ul className={[footerStyles, "nav"].join(" ")}>
                  <li className={footerStyles.navItem}>
                    <Link
                      to="#about"
                      className={[footerStyles.navLink, "smooth-scroll"].join(
                        " "
                      )}
                      title="About"
                      target="_blank"
                    >
                      About
                    </Link>
                  </li>
                  <li className={footerStyles.navItem}>
                    <a
                      to="https://www.github.com/cartesi"
                      className={footerStyles.navLink}
                      title="Developers"
                      target="_blank"
                      rel="noopener norefferer"
                    >
                      Developers
                    </a>
                  </li>
                  <li className={footerStyles.navItem}>
                    <Link
                      to="#stayintouch"
                      className={[footerStyles.navLink, "smooth-scroll"].join(
                        " "
                      )}
                      title="Ecosystem"
                      target="_blank"
                    >
                      Ecosystem
                    </Link>
                  </li>
                  <li className={footerStyles.navItem}>
                    <a
                      to="https://medium.com/cartesi"
                      className={footerStyles.navLink}
                      title="News"
                      target="_blank"
                      rel="noopener norefferer"
                    >
                      News
                    </a>
                  </li>
                </ul>
              </div>
              <div className={footerStyles.content}>
                <ul className={footerStyles.nav}>
                  <li className={footerStyles.navItem}>
                    <a
                      to="https://cartesi.io/#cartesi"
                      className={footerStyles.navLink}
                      title="Why Cartesi"
                      target="_blank"
                      rel="noopener norefferer"
                    >
                      Why Cartesi
                    </a>
                  </li>
                  <li className={footerStyles.navItem}>
                    <a
                      to="https://cartesi.io/cartesi_whitepaper.pdf"
                      className={footerStyles.navLink}
                      title="Whitepaper"
                      target="_blank"
                      rel="noopener norefferer"
                    >
                      Whitepaper
                    </a>
                  </li>
                  <li className={footerStyles.navItem}>
                    <a
                      to="https://cartesi.io/cartesi_lightpaper_english.pdf"
                      className={footerStyles.navLink}
                      title="Lightpaper"
                      target="_blank"
                      rel="noopener norefferer"
                    >
                      Lightpaper
                    </a>
                  </li>
                  <li className={footerStyles.navItem}>
                    <a
                      to="https://cartesi.io/#cartesi__feat-img"
                      className={footerStyles.navLink}
                      title="How it works"
                      target="_blank"
                      rel="noopener norefferer"
                    >
                      How it works
                    </a>
                  </li>
                  <li className={footerStyles.navItem}>
                    <a
                      to="https://cartesi.io/#how-to"
                      className={footerStyles.navLink}
                      title="Industries"
                      target="_blank"
                      rel="noopener norefferer"
                    >
                      Industries
                    </a>
                  </li>
                </ul>
              </div>
              <div className={footerStyles.content}>
                <ul className={footerStyles.nav}>
                  <li className={footerStyles.navItem}>
                    <a
                      to="https://cartesi.io/#roadmap"
                      className={footerStyles.navLink}
                      title="Roadmap"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      Roadmap
                    </a>
                  </li>
                  <li className={footerStyles.navItem}>
                    <a
                      to="https://cartesi.io/#blog"
                      className={footerStyles.navLink}
                      title="Blog"
                      target="_blank"
                      rel="noopener norefferer"
                    >
                      Blog
                    </a>
                  </li>
                  <li className={footerStyles.navItem}>
                    <a
                      to="https://cartesi.io/faq.html"
                      className={footerStyles.navLink}
                      title="FAQ"
                      target="_blank"
                      rel="noopener norefferer"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className={footerStyles.navItem}>
                    <Link
                      to=""
                      className={footerStyles.navLink}
                      title="Team"
                      target="_blank"
                    >
                      Team
                    </Link>
                  </li>
                  <li className={footerStyles.navItem}>
                    <a
                      to="https://cartesi.io/#team-core"
                      className={footerStyles.navLink}
                      title="Core Team"
                      target="_blank"
                      rel="noopener norefferer"
                    >
                      Core Team
                    </a>
                  </li>
                </ul>
              </div>
              <div className={footerStyles.content}>
                <ul className={footerStyles.nav}>
                  <li className={footerStyles.navItem}>
                    <a
                      to="https://cartesi.io/#team-advisors"
                      className={footerStyles.navLink}
                      title="Advisor"
                      target="_blank"
                      rel="noopener norefferer"
                    >
                      Advisor
                    </a>
                  </li>
                  <li className={footerStyles.navItem}>
                    <a
                      to="https://cartesi.io/#partners"
                      className={footerStyles.navLink}
                      title="Partners & Supporters"
                      target="_blank"
                      rel="noopener norefferer"
                    >
                      Partners & Supporters
                    </a>
                  </li>
                  <li className={footerStyles.navItem}>
                    <Link
                      to=""
                      className={footerStyles.navLink}
                      title="Legal"
                      target="_blank"
                    >
                      Legal
                    </Link>
                  </li>
                  <li className={footerStyles.navItem}>
                    <a
                      to="https://cartesi.io/privacy_policy.pdf"
                      className={footerStyles.navLink}
                      title="Privacy Policy"
                      target="_blank"
                      rel="noopener norefferer"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className={footerStyles.content}>
                <img
                  className={["icons", footerStyles.icoCartesi].join(" ")}
                  src={icoCartesi}
                ></img>
                <p>
                  The Cartesi Project is commissioned by the
                  <br /> Cartesi Foundation.
                </p>
              </div>
            </div>
            {/* <!-- //footer menu --> */}
            <p className={footerStyles.copyright}>
              All rights reserved ©&nbsp;
              <script>document.write(new Date().getFullYear());</script>
              &nbsp;Cartesi Foundation Ltd.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
