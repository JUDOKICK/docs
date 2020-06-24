import React from "react"

import getstartedStyles from "../../../styles/styles_amb/getstarted.module.scss"

const Getstarted = () => {
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
              <form
                action="https://app.99inbound.com/api/e/xkkbVDHg"
                method="POST"
                target="_blank"
                className={getstartedStyles.needsValidation}
                novalidate
              >
                <div className={getstartedStyles.formGroup}>
                  <label for="fullname" className={getstartedStyles.srOnly}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    placeholder="Full Name"
                    required
                  />
                  <div className={getstartedStyles.invalidFeedback}>
                    Please enter required field!
                  </div>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="telegram" className={getstartedStyles.srOnly}>
                    Telegram Handle
                  </label>
                  <input
                    type="text"
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    name="telegram"
                    placeholder="Telegram Handle (@)"
                    required
                  />
                  <div className={getstartedStyles.invalidFeedback}>
                    Please enter required field!
                  </div>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="country" className={getstartedStyles.srOnly}>
                    Representing Country
                  </label>
                  <select
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    name="country"
                    required
                  >
                    {options}
                  </select>
                  <div className={getstartedStyles.invalidFeedback}>
                    Please select a country.
                  </div>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="" className={getstartedStyles.srOnly}>
                    Area of Expertise
                  </label>
                  <textarea
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    name="expertise"
                    rows="3"
                    placeholder="Area of Expertise"
                    value=""
                    required
                  ></textarea>
                  <div className={getstartedStyles.invalidFeedback}>
                    Please enter required field!
                  </div>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="country" className={getstartedStyles.srOnly}>
                    How long have you been involved in crypto or blockchain?
                  </label>
                  <input
                    type="text"
                    name="howlong"
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    placeholder="How long have you been involved in crypto or blockchain?"
                    required
                  />
                  <div className={getstartedStyles.invalidFeedback}>
                    Please enter required field!
                  </div>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="about" className={getstartedStyles.srOnly}>
                    About Yourself{" "}
                  </label>
                  <textarea
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    name="about"
                    rows="3"
                    placeholder="About Yourself"
                    required
                  ></textarea>
                  <div className={getstartedStyles.invalidFeedback}>
                    Please enter required field!
                  </div>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="experiences" className={getstartedStyles.srOnly}>
                    Describe your experiences and professional background
                  </label>
                  <textarea
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    name="experiences"
                    rows="3"
                    placeholder="Describe your experiences and professional background"
                    required
                  ></textarea>
                  <div className={getstartedStyles.invalidFeedback}>
                    Please enter required field!
                  </div>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="references" className={getstartedStyles.srOnly}>
                    Link some references and resources we can examine
                  </label>
                  <textarea
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    name="references"
                    rows="3"
                    placeholder="Link some references and resources we can examine"
                    required
                  ></textarea>
                  <div className={getstartedStyles.invalidFeedback}>
                    Please enter required field!
                  </div>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="why" className={getstartedStyles.srOnly}>
                    Explain why you want to be an ambassador
                  </label>
                  <textarea
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    name="why"
                    rows="3"
                    placeholder="Explain why you want to be an ambassador"
                    required
                  ></textarea>
                  <div className={getstartedStyles.invalidFeedback}>
                    Please enter required field!
                  </div>
                </div>
                <div className={getstartedStyles.formGroup}>
                  <label for="" className={getstartedStyles.srOnly}>
                    Any final questions or comments?
                  </label>
                  <textarea
                    className={[
                      getstartedStyles.formControl,
                      "form-control-lg",
                    ].join(" ")}
                    name="questions"
                    rows="3"
                    placeholder="Any final questions or comments?"
                    required
                  ></textarea>
                  <div className={getstartedStyles.invalidFeedback}>
                    Please enter required field!
                  </div>
                </div>
                <div
                  className={[
                    getstartedStyles.formGroup,
                    "form-check justify-content-center d-flex",
                  ].join(" ")}
                >
                  <div className={getstartedStyles.formCheck}>
                    <input
                      className={getstartedStyles.formCheckInput}
                      type="checkbox"
                      name="agreement"
                      value=""
                      id={getstartedStyles.invalidCheck}
                      required
                    />
                    <label
                      className={getstartedStyles.formCheckLabel}
                      for="invalidCheck"
                    >
                      Agree to terms and conditions
                    </label>
                    <div className={getstartedStyles.invalidFeedback}>
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: -5000 + "px" }}>
                  <input
                    type="checkbox"
                    name="lovely_tangello_honeycomb_weasel"
                    value="1"
                    tabindex="-1"
                    autocomplete="no"
                  />
                </div>
                <button
                  type="submit"
                  className={["btn", getstartedStyles.btnAzul].join(" ")}
                >
                  Apply
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Getstarted
