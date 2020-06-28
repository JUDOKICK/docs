import React, { useEffect, useState } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { getMediumDate } from "../../utils/date"
import newsStyle from "./news.module.scss"

const News = ({ title, limit }) => {
  const [posts, setPosts] = useState([])

  let limitMedium = limit ? limit : 3
  let mediumApi = `${process.env.MEDIUM_API}&limit=${limitMedium}&picture=big`
  
  useEffect(() => {
    fetch(mediumApi)
      .then(response => response.json())
      .then(result => {
        setPosts(result)
      })
  }, [])

  const news = posts.map((item, key) => {
    let pic = item.picture.replace("${size}", 409)

    return (
      <div key={key} className="col-sm">
        <div
          className={[newsStyle.block, "card news-sections-cards"].join(" ")}
        >
          <div className={["card-header", newsStyle.cardHeader].join(" ")}>
            <a target="_blank" rel="noopener noreferrer" href={item.url}>
              <img src={pic} alt={item.title} />
            </a>
          </div>
          <div className={["card-body", newsStyle.cardBody].join(" ")}>
            <div className={newsStyle.author}>
              <img src={item.avatar} alt={item.author} />
              <p>
                {item.author}
                <span>{getMediumDate(item.publishAt)}</span>
              </p>
            </div>
            <div className={newsStyle.content}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
          <div className={["card-footer", newsStyle.cardFooter].join(" ")}>
            <a target="_blank" rel="noopener noreferrer" href={item.url}>
              <button className={newsStyle.btnDefault}>
                <FormattedMessage id="news.more" />
              </button>
            </a>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div id="news">
      <div className={[newsStyle.news, "row"].join(" ")}>
        <div className={newsStyle.title}>
          <h1>
            { title ? title : <FormattedMessage id="news.title" /> }
          </h1>
        </div>
        <div className={["row", newsStyle.gridCards].join(" ")}>{news}</div>
      </div>
    </div>
  )
}

export default News
