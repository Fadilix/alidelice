import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

type commandType = {
  id: string;
  firstName: string;
  room: string;
  quantity: number;
  delivered: boolean;
};

export const useCommands = () => {
  const [commands, setCommands] = useState<commandType[]>([]);

  const fetchData = async () => {
    await getDocs(collection(db, "commands")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as commandType[];
      setCommands(newData);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { commands };
};
