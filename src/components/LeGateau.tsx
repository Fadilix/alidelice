import Card from "./Card";
import "../scss/LeGateau.scss"
import { useState } from "react";
import Form from "./Form";

const LeGateau = () => {
    const [isCommanding, setIsCommanding] = useState(false);
    const handleCommand = () => {
        setIsCommanding(!isCommanding);
    }
    return (
        <div className="legateau-container" id="legateau">
            <h1 style={{
                textAlign: "center"
            }}>Découvrez Le Gâteau d'AliDélice</h1>
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