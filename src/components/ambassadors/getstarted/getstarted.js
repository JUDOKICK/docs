import React, { useState } from "react"

import getstartedStyles from "../../../styles/styles_amb/getstarted.module.scss"
import { FormComp } from "../../bootstrap.components"

const Getstarted = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Antigua & Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "British",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Canary Islands",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Channel Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote DIvoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Ter",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Great Britain",
    "Greece",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Hawaii",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea North",
    "Korea South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Midway Islands",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherland Antilles",
    "Netherlands",
    "Nevis",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau Island",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of Montenegro",
    "Republic of Serbia",
    "Romania",
    "Russia",
    "Rwanda",
    "St Barthelemy",
    "St Eustatius",
    "St Helena",
    "St Kitts-Nevis",
    "St Lucia",
    "St Maarten",
    "St Pierre & Miquelon",
    "St Vincent & Grenadines",
    "Saipan",
    "Samoa",
    "Samoa American",
    "San Marino",
    "Sao Tome & Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Sudan South",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tahiti",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks & Caicos Is",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City State",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (Brit)",
    "Virgin Islands (USA)",
    "Wake Island",
    "Wallis & Futana Is",
    "Yemen",
    "Zaire",
    "Zambia",
    "Zimbabwe",
  ]

  const options = countries.map(item => {
    return <option value={item}>{item}</option>
  })

  return (
    <div id={getstartedStyles.ambGetstarted}>
      <section
        className={[
          getstartedStyles.getstarted,
          getstartedStyles.parallax,
        ].join(" ")}
        data-speed="10"
        style={{ backgroundPosition: `right ${-588.7}px` }}
        id={getstartedStyles.getstarted}
      >
        <div className={getstartedStyles.container}>
          <h2
            className={[
              getstartedStyles.titles,
              getstartedStyles.titlesMedium,
            ].join(" ")}
          >
            Get Started
          </h2>
          <div className="row">
            <div className={[getstartedStyles.formarea].join(" ")}>
              {/* <form
                action="https://app.99inbound.com/api/e/xkkbVDHg"
                method="POST"
                target="_blank"
                className={getstartedStyles.needsValidation}
                noValidate
              > */}
              <FormComp
                noValidate
                validated={validated}
                className={
                  validated
                    ? getstartedStyles.wasValidated
                    : getstartedStyles.needsValidation
                }
                onSubmit={handleSubmit}
              >
                <div className={getstartedStyles.formGroup}>
                  <label for="fullname" className={getstartedStyles.srOnly}>
                    Full Name
                  </label>
                  <FormComp.Control
                    type="text"
                    name="fullname"
                    id="fullname"
                    className={[
                      getstartedStyles.formControl,
                      getstartedStyles.formControlLg,
                    ].join(" ")}
                    placeholder="Full Name"
                    required
                  />
                  <FormComp.Control.Feedback
                    type="invalid"
                    // className={getstartedStyles.invalidFeedback}
                  >
                    Please enter required field!
                  </FormComp.Control.Feedback>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="telegram" className={getstartedStyles.srOnly}>
                    Telegram Handle
                  </label>
                  <FormComp.Control
                    type="text"
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    name="telegram"
                    id="telegram"
                    placeholder="Telegram Handle (@)"
                    required
                  />
                  <FormComp.Control.Feedback
                    type="invalid"
                    // className={getstartedStyles.invalidFeedback}
                  >
                    Please enter required field!
                  </FormComp.Control.Feedback>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="country" className={getstartedStyles.srOnly}>
                    Representing Country
                  </label>
                  <FormComp.Control
                    as="select"
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    name="country"
                    id="country"
                    required
                  >
                    {options}
                  </FormComp.Control>
                  <FormComp.Control.Feedback
                    type="invalid"
                    // className={getstartedStyles.invalidFeedback}
                  >
                    Please select an country!
                  </FormComp.Control.Feedback>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="expertise" className={getstartedStyles.srOnly}>
                    Area of Expertise
                  </label>
                  <FormComp.Control
                    as="textarea"
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    id="expertise"
                    name="expertise"
                    rows="3"
                    placeholder="Area of Expertise"
                    value=""
                    required
                  ></FormComp.Control>
                  <FormComp.Control.Feedback type="invalid">
                    Please enter required field!
                  </FormComp.Control.Feedback>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="howlong" className={getstartedStyles.srOnly}>
                    How long have you been involved in crypto or blockchain?
                  </label>
                  <FormComp.Control
                    type="text"
                    name="howlong"
                    id="howlong"
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    placeholder="How long have you been involved in crypto or blockchain?"
                    required
                  />
                  <FormComp.Control.Feedback type="invalid">
                    Please enter required field!
                  </FormComp.Control.Feedback>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="about" className={getstartedStyles.srOnly}>
                    About Yourself{" "}
                  </label>
                  <FormComp.Control
                    as="textarea"
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    name="about"
                    id="about"
                    rows="3"
                    placeholder="About Yourself"
                    required
                  ></FormComp.Control>
                  <FormComp.Control.Feedback type="invalid">
                    Please enter required field!
                  </FormComp.Control.Feedback>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="experiences" className={getstartedStyles.srOnly}>
                    Describe your experiences and professional background
                  </label>
                  <FormComp.Control
                    as="textarea"
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    name="experiences"
                    id="experiences"
                    rows="3"
                    placeholder="Describe your experiences and professional background"
                    required
                  ></FormComp.Control>
                  <FormComp.Control.Feedback type="invalid">
                    Please enter required field!
                  </FormComp.Control.Feedback>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="references" className={getstartedStyles.srOnly}>
                    Link some references and resources we can examine
                  </label>
                  <FormComp.Control
                    as="textarea"
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    name="references"
                    id="references"
                    rows="3"
                    placeholder="Link some references and resources we can examine"
                    required
                  ></FormComp.Control>
                  <FormComp.Control.Feedback type="invalid">
                    Please enter required field!
                  </FormComp.Control.Feedback>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="why" className={getstartedStyles.srOnly}>
                    Explain why you want to be an ambassador
                  </label>
                  <FormComp.Control
                    as="textarea"
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    name="why"
                    id="why"
                    rows="3"
                    placeholder="Explain why you want to be an ambassador"
                    required
                  ></FormComp.Control>
                  <FormComp.Control.Feedback type="invalid">
                    Please enter required field!
                  </FormComp.Control.Feedback>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="questions" className={getstartedStyles.srOnly}>
                    Any final questions or comments?
                  </label>
                  <FormComp.Control
                    as="textarea"
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    name="questions"
                    id="questions"
                    rows="3"
                    placeholder="Any final questions or comments?"
                    required
                  ></FormComp.Control>
                  <FormComp.Control.Feedback type="invalid">
                    Please enter required field!
                  </FormComp.Control.Feedback>
                </div>
                <div
                  className={[
                    getstartedStyles.formGroup,
                    "form-check justify-content-center d-flex",
                  ].join(" ")}
                >
                  {/* <div className={getstartedStyles.formCheck}> */}
                  <FormComp.Check
                    // className={[getstartedStyles.formCheckInput].join(" ")}
                    // className="form-check-input"

                    required
                    type="checkbox"
                    name="agreement"
                    value=""
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    // id={getstartedStyles.invalidCheck}
                    required
                  />
                  {/* <label
                    className={getstartedStyles.formCheckLabel}
                    for="invalidCheck"
                  >
                    Agree to terms and conditions
                  </label> */}
                  {/* <div className={getstartedStyles.invalidFeedback}>
                    
                  </div> */}
                </div>
                {/* </div> */}
                {/* <div style={{ position: "absolute", left: -5000 + "px" }}>
                  <FormComp.Check
                    type="checkbox"
                    name="lovely_tangello_honeycomb_weasel"
                    value="1"
                    // tabindex="-1"
                    autocomplete="no"
                  />
                </div> */}
                <button
                  type="submit"
                  className={[
                    getstartedStyles.btn,
                    getstartedStyles.btnAzul,
                  ].join(" ")}
                >
                  Apply
                </button>
              </FormComp>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Getstarted
