import "../scss/Card.scss"
import star from "../assets/svgs/star.svg"

type CardProps = {
    handleCommand: () => void,
    isCommanding: boolean
}

const Card: React.FC<CardProps> = ({ handleCommand, isCommanding }) => {
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
                <button className="command" onClick={handleCommand}>
                    <a href="#commanding" style={{ textDecoration: "none" }}>
                        {
                            !isCommanding ? (
                                <p>Commander</p>
                            ) : (
                                <p>Annuler</p>
                            )
                        }
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Card