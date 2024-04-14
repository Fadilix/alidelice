import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

type userType = {
  username: string;
  createdAt: string;
  id: string;
};

export const useUsers = () => {
  const [users, setusers] = useState<userType[]>([]);

  const fetchData = async () => {
    await getDocs(collection(db, "user")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as userType[];
      setusers(newData);
    });
  };

  useEffect(() => {
    fetchData();
  }, [users]);

  return { users };
};
