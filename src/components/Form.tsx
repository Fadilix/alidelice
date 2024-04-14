import React, { FormEvent, useState } from 'react'
import "../scss/Form.scss";
import { toast } from "react-hot-toast";
import { style } from '../toastStyles/darkMode';
import { addCommand } from '../backend/AddCommand';

type FormType = {
    isCommanding: boolean;

}
const Form: React.FC<FormType> = ({ isCommanding }) => {
    const [CommanData, setCommanData] = useState({
        firstName: "",
        room: "",
        quantity: 0,
    })

    const clearInputData = () => {
        setCommanData({
            firstName: "",
            room: "",
            quantity: 0,
        })
    }

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const text = `Monsieur ${CommanData.firstName} (Salle ${CommanData.room}),\nVous avez commandé une quantité de ${CommanData.quantity} gâteau(x)\nÊtes vous sur de vouloir confirmer votre commande ?`
        if (window.confirm(text)) {

            if (!CommanData.firstName || !CommanData.quantity || !CommanData.room) {
                toast.error("Vous devez renseigner tous les champs",
                    { style }
                )
            } else {
                await addCommand(CommanData.firstName, CommanData.room, CommanData.quantity);
                toast("Merci d'avoir commandé chez AliDélice",
                    { icon: '🎊', style }
                );
                setTimeout(() => {
                    toast.success("Vous serez livré d'ici peu", { style });
                }, 1000);
                clearInputData();



            }
        } else {
            return;
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCommanData((prev) => ({ ...prev, [name]: value }));
    }

    console.log(CommanData);
    return (
        <div
            className='form-container'
            style={{
                transition: ".8s all",
                overflow: "hidden",
                width: !isCommanding ? "0px" : "100%",
                height: !isCommanding ? "0px" : "auto",
            }}
        >
            <form action="" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
                onSubmit={handleFormSubmit}
            >
                {/* <div className='row'>
                    <label htmlFor="">Nom</label>
                    <input type="text" />
                </div> */}

                <div className="row">
                    <label htmlFor="">Prénom</label>
                    <input type="text" name='firstName' value={CommanData.firstName} onChange={handleInputChange} />
                </div>

                <div className="row">
                    <label htmlFor="">Salle</label>
                    <select name="room" id="" value={CommanData.room} onChange={handleInputChange}>
                        <option value="" disabled>Selectionnez votre classe</option>
                        <option value="L1A">L1A</option>
                        <option value="L1B">L1B</option>
                        <option value="L1C">L1C</option>
                        <option value="L1D">L1D</option>
                        <option value="L1E">L1E</option>
                        <option value="L2A">L2A</option>
                        <option value="L2B">L2B</option>
                        <option value="L2C">L2C</option>
                        <option value="GLSIA">GLSIA</option>
                        <option value="GLSIB">GLSIB</option>
                        <option value="ASR">ASR</option>
                    </select>
                </div>

                <div className="row">
                    <label htmlFor="">Quantité</label>
                    <input type="number" name="quantity" id="" value={CommanData.quantity} onChange={handleInputChange} />
                </div>

                <button type="submit">Valider la commande</button>
            </form>
        </div>
    )
}

export default Form;