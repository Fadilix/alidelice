import NavBar from "../components/NavBar"
import "../scss/Home.scss"
const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="landing-page">
        <p>Bienvenue chez AliDélice, où nous nous consacrons entièrement à "Le Gateau". Notre passion pour l'excellence culinaire se reflète dans chaque bouchée de cette œuvre d'art salée, un régal inoubliable à chaque dégustation.</p>
        <button>Commander Le Gateau</button>
      </div>
    </div>
  )
}

export default Home