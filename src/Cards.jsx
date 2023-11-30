import star from './images/star.png'


const Cards = ({stats, location, coverImg, title, price,description,openSpots}) => {

    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }

    return (
            <div className="cards">
                 {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
                <img src={`./src/images/${coverImg}`}  className='card--img'/>
            
            <div className="card--stats">
                    <img src={star} className="card--star" />
                    <span className='rating'>{stats.rating}</span>
                    <span className="grey">({stats.reviewCount}) • </span>
                    <span className="grey">{location}</span>
            </div>
            <h3 className="card--title">{title}</h3>
            <p className='description'>{description}</p>
            <p className="card--price">
                <span className="bold">From ${price}</span> per night
            </p>
            </div>
        )
}

export default Cards;