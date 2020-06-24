import React from "react"

import ambAboutStyle from "../../../styles/styles_amb/about.ambassadors.module.scss"

const About = () => {
  return (
    <div id={ambAboutStyle.ambAbout}>
      <section className={ambAboutStyle.about} id="about">
        <div className="container">
          <h2
            className={[
              ambAboutStyle.titles,
              ambAboutStyle.titlesMedium,
              ambAboutStyle.textCenter,
            ].join(" ")}
          >
            Ambassador Overview
          </h2>
          <p>
            A vigorous Cartesi community is vital to the team’s worldwide
            objectives in the DApp space. As we continue to progressively expand
            our community, we're on the look-out for leaders, novel ideas, and
            continuous improvements to our social infrastructure. To enhance
            brand awareness and sufficiently establish a broader influential
            sphere, we are devoted to on-boarding talent in a formalized method.
          </p>
          <p>
            We appreciate your interest in assisting us to bring about a larger
            and more influential digital marketing presence within
            cryptocurrency and the Linux spheres.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
