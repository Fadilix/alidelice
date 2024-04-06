import { db } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

export const updateCommand = async (id: string, commanData: object) => {
  try {
    const commandRef = doc(db, "commands", id);
    await updateDoc(commandRef, commanData);
    console.log("Command updated successfully");
  } catch (error) {
    console.error("Error updating command:", error);
  }
};
