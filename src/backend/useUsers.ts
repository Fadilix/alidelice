import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import toast from "react-hot-toast";
import { style } from "../toastStyles/darkMode";

type userType = {
  username: string;
  createdAt: string;
  id: string;
};

export const useUsers = () => {
  const [users, setusers] = useState<userType[]>([]);

  const fetchData = async () => {
    try {
      await getDocs(collection(db, "user")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as userType[];
        setusers(newData);
      });
    } catch (error: any) {
      toast.error("Error : " + error.message, { style });
    }
  };

  useEffect(() => {
    fetchData();
  }, [users]);

  return { users };
};
