import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import toast from "react-hot-toast";
import { style } from "../toastStyles/darkMode";

type commandType = {
  id: string;
  firstName: string;
  room: string;
  quantity: number;
  delivered: boolean;
  timestamp: string;
};

export const useCommands = () => {
  const [commands, setCommands] = useState<commandType[]>([]);

  const fetchData = async () => {
    try {
      await getDocs(collection(db, "commands")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as commandType[];
        setCommands(newData);
      });
    } catch (error: any) {
      toast.error("Error: " + error.message, { style });
    }
  };

  useEffect(() => {
    fetchData();
    // console.log("hello, world");
  }, []);

  return { commands };
};
