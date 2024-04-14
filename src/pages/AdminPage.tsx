import { updateCommand } from "../backend/updateCommand";
import { useCommands } from "../backend/useCommands";
import "../scss/AdminPage.scss"
import { RingLoader } from "react-spinners";

const AdminPage = () => {
    const { commands } = useCommands();
    // console.log(commands);

    const handleDelivery = (id: string) => {
        const data = getUserById(id)
        updateCommand(id, { ...data, delivered: true })
    }

    const getUserById = (id: string) => {
        const res = commands.filter((command) => command.id === id)
        return res;
    }

    const formatDate = (date: string) => {
        const dat = new Date(date);
        return dat.toLocaleString();
    }

    const notDeliveredYet = commands.filter((command) => command.delivered === false).reverse();

    return (
        <div className="admin-container">
            <h1>AlidAdmin</h1>

            {notDeliveredYet ? (
                <table width="100%">
                    <thead>
                        <tr>
                            <th>Prénom</th>
                            <th>Salle</th>
                            <th>Quantité</th>
                            <th>Timestamp</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notDeliveredYet
                            .map((command) => (
                                <tr>
                                    <td data-cell="Prénom">{command.firstName}</td>
                                    <td data-cell="Salle">{command.room}</td>
                                    <td data-cell="Quantité">{command.quantity}</td>
                                    <td data-cell="Timestamp">{formatDate(command.timestamp)}</td>
                                    <td data-cell="Action">
                                        <button
                                            className="deliver"
                                            onClick={() => { handleDelivery(command.id) }}
                                        >
                                            Livrer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>

            ) : (

                <div className="ring-loader">
                    <RingLoader />
                </div>
            )
            }

        </div>
    )
}

export default AdminPage;