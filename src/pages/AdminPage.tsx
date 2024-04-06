import { useCommands } from "../backend/useCommands";

const AdminPage = () => {
    const { commands } = useCommands();
    console.log(commands);
    return (
        <div>
            hello
            {commands.map((command) => (
                <div>
                    {command.firstName}
                </div>
            ))}
        </div>
    )
}

export default AdminPage;