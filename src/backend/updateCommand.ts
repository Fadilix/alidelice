import toast from "react-hot-toast";
import { db } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { style } from "../toastStyles/darkMode";

export const updateCommand = async (id: string, commanData: object) => {
  try {
    const commandRef = doc(db, "commands", id);
    await updateDoc(commandRef, commanData);
    // console.log("Command updated successfully");
  } catch (error: any) {
    // console.error("Error updating command:", error);
    toast.error("Error : " + error.message, { style });
  }
};
