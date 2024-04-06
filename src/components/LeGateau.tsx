import Card from "./Card";
import "../scss/LeGateau.scss"
import { useState } from "react";
import Form from "./Form";

const LeGateau = () => {
    const [isCommanding, setIsCommaing] = useState(false);
    const handleCommand = () => {
        setIsCommaing(!isCommanding);
    }
    return (
        <div className="legateau-container">
            <h1>Découvrez Le Gâteau d'AliDélice</h1>
            <div className="legateau">
                <Card
                    handleCommand={handleCommand}
                    isCommanding={isCommanding}
                />

                <Form isCommanding={isCommanding} />
            </div>

        </div>
    )
}

export default LeGateau;