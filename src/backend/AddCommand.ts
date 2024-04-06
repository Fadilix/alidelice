import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const addCommand = async (
  firstName: string,
  room: string,
  quantity: number
) => {
  try {
    const docRef = await addDoc(collection(db, "commands"), {
      firstName,
      room,
      quantity,
    });
    console.log("Document written with ID:", docRef.id);
  } catch (e: any) {
    console.error("Error adding document", e.message);
  }
};

export { addCommand };
