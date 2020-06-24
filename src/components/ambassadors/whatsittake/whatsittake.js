import React from "react"

import ambWhatsItTakeStyles from "../../../styles/styles_amb/whatsittake.ambassadors.module.scss"

const Whatsittake = () => {
  return (
    <div id={ambWhatsItTakeStyles.ambWhatsItTake}>
      <section
        className={[
          ambWhatsItTakeStyles.whatsittake,
          ambWhatsItTakeStyles.parallax,
        ].join(" ")}
        data-speed="10"
        id={ambWhatsItTakeStyles.whatsittake}
      >
        <div className="container order-2 order-md-1 px-md-0">
          <h2
            className="titles titles-medium"
            data-localize="whatsittake.title"
          >
            What does it take to become a Cartesi Ambassador?
          </h2>
          <div className="row">
            <div className="col-12 col-md-9">
              <p data-localize="whatsittake.info">
                We are on an ever lookout for a considerable variety of
                backgrounds, talents and novel ideas. Social diversity of skill
                sets will facilitate expansion of Cartesi's brand across all
                regions, languages and unique cultures. To harness the power of
                all diverse backgrounds, we’re naturally seeking to enhance our
                marketing presence and brand awareness; working alongside
                industry leaders and experienced professionals throughout a
                spectrum of fields.
              </p>

              <p>
                Through individual diversity and aptitude, marketing leaders
                around the world will enable Cartesi to reach out to and
                solidify community ambassadors that show exemplary talent and
                verbal communications.
              </p>

              <p>
                Individuals who carefully manage existing colossal or small
                community gatherings (online or in-person) will be heavily
                considered to be a part of this social program.
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 order-md-2 d-flex d-sm-none">
          {/* <!-- <svg className="icons blocks">
                        <use xlink:href="#blocks"></use>
                    </svg> --> */}
          <svg className="icons block1" data-speed="10">
            <use xlinkHref="#block1"></use>
          </svg>
          <svg className="icons block2" data-speed="5">
            <use xlinkHref="#block2"></use>
          </svg>
          <svg className="icons block3" data-speed="10">
            <use xlinkHref="#block3"></use>
          </svg>
        </div>
      </section>
    </div>
  )
}

export default Whatsittake
