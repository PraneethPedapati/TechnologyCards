import './index.css'

const Technologies = props => {
  const {cardList} = props
  const {title, description, imgUrl, className} = cardList

  return (
    <li className={`${className} card`}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div className="img-container">
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}

export default Technologies
