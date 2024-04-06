import Card from "./Card";
import "../scss/LeGateau.scss"
import { useState } from "react";

const LeGateau = () => {
    const [isCommanding, setIsCommaing] = useState(false);
    const handleCommand = () => {
        setIsCommaing(!isCommanding);
    }
    return (
        <div className="legateau-container">
            <h1>Découvrez Le Gâteau d'AliDélice</h1>
            <Card
                handleCommand={handleCommand}
                isCommanding={isCommanding}
            />

        </div>
    )
}

export default LeGateau;