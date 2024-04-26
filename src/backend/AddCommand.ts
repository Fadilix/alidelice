import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import toast from "react-hot-toast";
import { style } from "../toastStyles/darkMode";

const addCommand = async (
  firstName: string,
  room: string,
  quantity: number
) => {
  try {
    // const docRef =
    await addDoc(collection(db, "commands"), {
      firstName,
      room,
      quantity,
      delivered: false,
      timestamp: Date.now(),
    });
    // console.log("Document written with ID:", docRef.id);
  } catch (e: any) {
    // console.error("Error adding document", e.message);
    toast.error("Error : " + e.message, { style });
  }
};

export { addCommand };

