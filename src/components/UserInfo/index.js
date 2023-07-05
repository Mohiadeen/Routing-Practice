import './index.css'

const UserInfo = props => {
  const {userDetails} = props
  const {title, description, publishedDate} = userDetails

  return (
    <li className="info">
      <div className="title-date">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="line" />
    </li>
  )
}

export default UserInfo
