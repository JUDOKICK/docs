import React from "react"
import { Link } from "gatsby"

import footerStyles from "../../../styles/styles_amb/footer.module.scss"
import icoCartesi from "../../../images/ambassadors/ico-cartesi.svg"

const Footer = () => {
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
                  <Link to="https://www.github.com/cartesi" target="_blank">
                    <i className={["fab", footerStyles.faGithub].join(" ")}></i>
                  </Link>
                </li>
                <li className={footerStyles.socialmediaItem}>
                  <Link to="https://discord.gg/Pt2NrnS" target="_blank">
                    <i
                      className={["fab", footerStyles.faDiscord].join(" ")}
                    ></i>
                  </Link>
                </li>
                <li className={footerStyles.socialmediaItem}>
                  <Link
                    to="https://www.twitter.com/cartesiproject"
                    target="_blank"
                  >
                    <i
                      className={["fab", footerStyles.faTwitter].join(" ")}
                    ></i>
                  </Link>
                </li>
                <li className={footerStyles.socialmediaItem}>
                  <Link to="https://www.medium.com/cartesi" target="_blank">
                    <i className={["fab", footerStyles.faMedium].join(" ")}></i>
                  </Link>
                </li>
                <li className={footerStyles.socialmediaItem}>
                  <Link to="https://t.me/cartesiproject" target="_blank">
                    <i
                      className={["fab", footerStyles.faTelegramPlane].join(
                        " "
                      )}
                    ></i>
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- //social media --> */}

            {/* <!-- news --> */}
            <div
              className={footerStyles.mlFormEmbed}
              data-account="1797592:x4y1u5u9w3"
              data-form="2025920:r0w4v3"
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
                      <form
                        className={footerStyles.mlBlockForm}
                        action="https://app.mailerlite.com/webforms/submit/r0w4v3"
                        data-code="r0w4v3"
                        method="post"
                        target="_blank"
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
                                <div
                                  className={[
                                    footerStyles.mlFieldGroup,
                                    footerStyles.mlFieldEmail,
                                    footerStyles.mlValidateEmail,
                                    footerStyles.mlValidateRequired,
                                  ].join(" ")}
                                >
                                  <input
                                    type="email"
                                    className={footerStyles.formControl}
                                    data-inputmask=""
                                    name="fields[email]"
                                    placeholder="Email"
                                    autocomplete="email"
                                  />
                                </div>
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
                              <button
                                disabled="disabled"
                                style={{ display: "none" }}
                                type="button"
                                className={footerStyles.loading}
                              >
                                {" "}
                                <div
                                  className={footerStyles.mlFormEmbedSubmitLoad}
                                >
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                </div>{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                        <input type="hidden" name="ml-submit" value="1" />
                      </form>
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
                    <Link
                      to="https://www.github.com/cartesi"
                      className={footerStyles.navLink}
                      title="Developers"
                      target="_blank"
                    >
                      Developers
                    </Link>
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
                    <Link
                      to="https://medium.com/cartesi"
                      className={footerStyles.navLink}
                      title="News"
                      target="_blank"
                    >
                      News
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={footerStyles.content}>
                <ul className={footerStyles.nav}>
                  <li className={footerStyles.navItem}>
                    <Link
                      to="https://cartesi.io/#cartesi"
                      className={footerStyles.navLink}
                      title="Why Cartesi"
                      target="_blank"
                    >
                      Why Cartesi
                    </Link>
                  </li>
                  <li className={footerStyles.navItem}>
                    <Link
                      to="https://cartesi.io/cartesi_whitepaper.pdf"
                      className={footerStyles.navLink}
                      title="Whitepaper"
                      target="_blank"
                    >
                      Whitepaper
                    </Link>
                  </li>
                  <li className={footerStyles.navItem}>
                    <Link
                      to="https://cartesi.io/cartesi_lightpaper_english.pdf"
                      className={footerStyles.navLink}
                      title="Lightpaper"
                      target="_blank"
                    >
                      Lightpaper
                    </Link>
                  </li>
                  <li className={footerStyles.navItem}>
                    <Link
                      to="https://cartesi.io/#cartesi__feat-img"
                      className={footerStyles.navLink}
                      title="How it works"
                      target="_blank"
                    >
                      How it works
                    </Link>
                  </li>
                  <li className={footerStyles.navItem}>
                    <Link
                      to="https://cartesi.io/#how-to"
                      className={footerStyles.navLink}
                      title="Industries"
                      target="_blank"
                    >
                      Industries
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={footerStyles.content}>
                <ul className={footerStyles.nav}>
                  <li className={footerStyles.navItem}>
                    <Link
                      to="https://cartesi.io/#roadmap"
                      className={footerStyles.navLink}
                      title="Roadmap"
                      target="_blank"
                    >
                      Roadmap
                    </Link>
                  </li>
                  <li className={footerStyles.navItem}>
                    <Link
                      to="https://cartesi.io/#blog"
                      className={footerStyles.navLink}
                      title="Blog"
                      target="_blank"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className={footerStyles.navItem}>
                    <Link
                      to="https://cartesi.io/faq.html"
                      className={footerStyles.navLink}
                      title="FAQ"
                      target="_blank"
                    >
                      FAQ
                    </Link>
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
                    <Link
                      to="https://cartesi.io/#team-core"
                      className={footerStyles.navLink}
                      title="Core Team"
                      target="_blank"
                    >
                      Core Team
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={footerStyles.content}>
                <ul className={footerStyles.nav}>
                  <li className={footerStyles.navItem}>
                    <Link
                      to="https://cartesi.io/#team-advisors"
                      className={footerStyles.navLink}
                      title="Advisor"
                      target="_blank"
                    >
                      Advisor
                    </Link>
                  </li>
                  <li className={footerStyles.navItem}>
                    <Link
                      to="https://cartesi.io/#partners"
                      className={footerStyles.navLink}
                      title="Partners & Supporters"
                      target="_blank"
                    >
                      Partners & Supporters
                    </Link>
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
                    <Link
                      to="https://cartesi.io/privacy_policy.pdf"
                      className={footerStyles.navLink}
                      title="Privacy Policy"
                      target="_blank"
                    >
                      Privacy Policy
                    </Link>
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
