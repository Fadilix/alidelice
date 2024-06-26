import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useUsers } from "./useUsers";
import toast from "react-hot-toast";
import { style } from "../toastStyles/darkMode";

// type userType = {
//     username: string,
//     createdAt: string;
// }
const addUser = async (username: string) => {
  const { users } = useUsers();
  const usernames = users.map((user) => user.username);
  try {
    if (!usernames.includes(username)) {
      await addDoc(collection(db, "user"), {
        username,
        createdAt: Date.now(),
      });
      //   console.log("Document written with ID:", docRef.id);
    } else {
      toast.error("User already exists", { style });
    }
  } catch (e: any) {
    toast.error("Error adding document" + e.message, { style });
  }
};

export { addUser };
