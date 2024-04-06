import "../scss/Card.scss"
import star from "../assets/svgs/star.svg"

const Card = () => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="image">
                    <p className="description">Découvrez Le Gateau d'AliDélice : une création culinaire exquise, mêlant harmonieusement saveurs et textures</p>
                </div>
                <p className="text">Le Gâteau</p>
                <div className="stars">
                    <img src={star} alt="star-rating" />
                    <img src={star} alt="star-rating" />
                    <img src={star} alt="star-rating" />
                    <img src={star} alt="star-rating" />
                    <img src={star} alt="star-rating" />
                </div>
                <button className="command"><p>Commander</p></button>
            </div>
        </div>
    )
}

export default Card