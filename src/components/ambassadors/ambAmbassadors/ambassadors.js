import React from "react"
import ambAmbassadorsStyle from "../../../styles/styles_amb/ambassador.module.scss"

import ambHeyodHewow from "../../../images/ambassadors/ambassador-heyod-hewow.png"
import ambShapYe from "../../../images/ambassadors/ambassador-sharp-ye.png"
import ambVietAhn from "../../../images/ambassadors/ambassador-viet-ahn.png"
import ambWonhyoungLim from "../../../images/ambassadors/ambassador-wonhyoung-lim.png"
import ambBerkayKorkmazz from "../../../images/ambassadors/ambassador-berkay-korkmazz.png"
import ambHelenImah from "../../../images/ambassadors/ambassador-helen-imah.png"
import ambDilipIshara from "../../../images/ambassadors/ambassador-dilip-ishara.png"
import ambSuhasHegde from "../../../images/ambassadors/ambassador-suhas-hegde.png"
import ambChristianLaurden from "../../../images/ambassadors/ambassador-christian-laurden.png"

const ambassadors = () => {
  return (
    <div id={ambAmbassadorsStyle.ambAmbassadors}>
      <div
        className={[
          ambAmbassadorsStyle.ambassadors,

          //   ambAmbassadorsStyle.open,
        ].join(" ")}
        id="amb-ambassadors"
      >
        <div className={ambAmbassadorsStyle.container}>
          <ul
            className={[
              ambAmbassadorsStyle.content,
              ambAmbassadorsStyle.row,
            ].join(" ")}
          >
            <li className={ambAmbassadorsStyle.member}>
              <img src={ambHeyodHewow} alt="Heyod Hewow" />
              <p className={ambAmbassadorsStyle.title}>
                <span>Heyod Hewow</span>
                Russian Ambassador
              </p>
            </li>
            <li className={ambAmbassadorsStyle.member}>
              <a
                href="https://www.linkedin.com/in/sharp-ye-864660176/"
                title="Sharp Ye"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ambShapYe} alt="Sharp Ye" />
                <p className={ambAmbassadorsStyle.title}>
                  <span>Sharp Ye</span>
                  Chinese Ambassador
                </p>
              </a>
            </li>
            <li className={ambAmbassadorsStyle.member}>
              <a
                href="https://www.linkedin.com/in/peteranh910/"
                title="Viet Anh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ambVietAhn} alt="Viet Anh" />
                <p className={ambAmbassadorsStyle.title}>
                  <span>Viet Anh</span>
                  Vietnamese Ambassador
                </p>
              </a>
            </li>
            <li className={ambAmbassadorsStyle.member}>
              <a
                href="https://www.linkedin.com/in/wonhyoung-lim-158b86175/"
                title="Wonhyoung Lim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ambWonhyoungLim} alt="Wonhyoung Lim" />
                <p className={ambAmbassadorsStyle.title}>
                  <span>Wonhyoung Lim</span>
                  Korean Ambassador
                </p>
              </a>
            </li>
            <li className={ambAmbassadorsStyle.member}>
              <a
                href="https://www.linkedin.com/in/berkayykorkmaz/"
                title="Berkay Korkmazz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ambBerkayKorkmazz} alt="Berkay Korkmazz" />
                <p className={ambAmbassadorsStyle.title}>
                  <span>Berkay Korkmazz</span>
                  Turkish Ambassador
                </p>
              </a>
            </li>

            <li className={ambAmbassadorsStyle.member}>
              <a
                href="https://www.linkedin.com/in/helenimah"
                title="Helen IMAH"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ambHelenImah} alt="Helen IMAH" />
                <p className={ambAmbassadorsStyle.title}>
                  <span>Helen IMAH</span>
                  Nigerian Ambassador
                </p>
              </a>
            </li>
            <li className={ambAmbassadorsStyle.member}>
              <a
                href="https://www.linkedin.com/in/christian-naitsirhc-46536b16a"
                title="Dilip Ishara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ambDilipIshara} alt="Dilip Ishara" />
                <p className={ambAmbassadorsStyle.title}>
                  <span>Dilip Ishara</span>
                  Sri Lankan Ambassador
                </p>
              </a>
            </li>
            <li className={ambAmbassadorsStyle.member}>
              <a
                href="https://www.linkedin.com/in/suhashegde/"
                title="Suhas Hegde"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ambSuhasHegde} alt="Suhas Hegde" />
                <p className={ambAmbassadorsStyle.title}>
                  <span>Suhas Hegde</span>
                  Indian Ambassador
                </p>
              </a>
            </li>
            <li className={ambAmbassadorsStyle.member}>
              <a
                href="https://www.linkedin.com/in/christian-laurden-46536b16a/"
                title="Christian Laurden"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ambChristianLaurden} alt="Christian Laurden" />
                <p className={ambAmbassadorsStyle.title}>
                  <span>Christian Laurden</span>
                  Phillippine Ambassador
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ambassadors
