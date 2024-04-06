import "../scss/Card.scss"
import star from "../assets/svgs/star.svg"

const Card = () => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="image">
                    <p className="description">Plongez dans l'expérience ultime de la gourmandise avec Le Gateau d'AliDélice : une création culinaire exquise, mêlant harmonieusement une symphonie de saveurs exotiques et de textures délicates. Chaque bouchée est une invitation à un voyage gustatif inoubliable, une ode à la perfection artisanale.</p>
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